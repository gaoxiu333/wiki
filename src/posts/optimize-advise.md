---
title: google developers 性能优化建议
tags: Optimize
date: 2020-05-25 00:33:42
---

## 关键渲染路径
浏览器为页面的第一次绘制需要执行的顺序称为 关键渲染路径(Critical Rendering Path)

1. DOM：处理HTML标记并构建DOM树
2. CSSOM：处理CSS标记并构建CSSOM树
3. Render Tree：将DOM和CSSOM合并到渲染树
4. Layout：在渲染树上运行布局计算每个节点的几何形状
5. Paint：将各节点绘制到屏幕上

## Render Blocking CSS

默认情况下，CSS 属于`render blocking resource`，在构造 CSSOM 之前浏览器不会渲染任何已处理过到内容。

### 优化建议

在外部引用样式表上加上媒体查询`media`，未被匹配的样式表不会阻止首次渲染。

``` html
<link href="style.css"    rel="stylesheet">
<link href="style.css"    rel="stylesheet" media="all">
<link href="portrait.css" rel="stylesheet" media="orientation:portrait">
<link href="print.css"    rel="stylesheet" media="print">
```

## Parser blocking

默认情况下，Javascript 是`parser blocking`；当HTML解析遇到脚本时，会停止DOM构建，并将控制权移交给JavaScript运行时。

- 当浏览器遇到JavaScript标签时，DOM构造将暂停，直到脚本执行完毕。
- JavaScript可以查询和修改DOM和CSSOM。
- 浏览器会延迟JavaScript执行和DOM构建，直到完成脚本之前的CSSOM的下载和构建。
- 外部引用脚本上的`async`不会产生`parser blocking`。

### DOMContentLoaded

- HTML中没有Javascript时，DOMContentLoaded会在HTML被加载解析完成后触发
- HTML中有Javascript时，DOMContentLoaded会在HTM和Javascript执行完毕才会被触发
> Javascript 会阻止DOM解析和构建，如果之前有CSSOM，还会等待CSSOM构建完成才会执行，此时的DOMContentLoaded需要一直等到CSSOM构建完成和JavaScript执行完毕才会触发。

### 优化建议

首次渲染一定要操作DOM是，尽量只保留DOM操作的js，其他用外部引用的方式使用async标记延迟加载。

## 分析关键渲染路径

- 关键资源：可能阻止页面初始呈现的资源，如HTML、CSS和JS等资源。
- 关键路径长度：网络往返次数，也就是获取所有关键资源所需的总时间。
- 关键字节：到达页面的第一次呈现所需的字节总数，即所有关键资源的传输文件大小的总和。

示例：

![](../images/optimize2.png)

- 3个关键资源
- 最小关键路径长度为2次或更多次往返
- 11 KB的关键字节

## 优化关键路径

为了提供最快的时间进行首次渲染，需要最小化三个变量：

- 减少关键资源的数量
- 缩短关键路径长度
- 减少关键字节数

## 资源优先级

### preload

`<link rel="preload">`通知浏览器当前导航需要一部分资源，并且应该尽快开始获取该资源。使用方法如下：
```html
<link rel="preload" as="font" crossorigin="crossorigin" type="font/woff2" href="myfont.woff2">
```
>注意：如果在3秒中未使用，chrome浏览器会发出警告。

preload 可以让我们预先加载首次渲染所需要的js、css或者字体文件。

### preconnect

`<link rel="preconnect">`通知浏览器您的页面打算与另一个来源建立连接，并且您希望该过程尽快开始。

### prefetch
`<link rel="prefetch">`在浏览器闲置的情况下，加载未来可能需要的资源。

### dns-prefetch
`<link rel="dns-prefetch">` 处理DNS解析延迟问题。

dns-prefetch与preconnect结合：dns-prefetch仅执行DNS查找，但preconnect会建立与服务器的连接。如果站点是通过HTTPS服务的，则此过程包括DNS解析，建立TCP连接以及执行TLS握手。将两者结合起来可提供机会，进一步减少跨源请求的感知延迟。

## 优化Javascript

- 避免使用setTimeout或setInterval进行视觉更新；始终使用requestAnimationFrame代替。
- 将长时间运行的JavaScript从主线程移至Web Workers。
- 使用微任务使DOM在多个框架上进行更改。
- 使用Chrome DevTools的时间轴和JavaScript Profiler评估JavaScript的影响。

## CSS 优化

通过添加和删除元素，更改属性，类或通过动画来更改DOM，都将导致浏览器重新计算元素样式，并且在许多情况下会重新布局（或重排）页面或页面的一部分。此过程称为**RenderStyle**。
>用于计算元素的计算样式的时间大约有50％用于匹配选择器，而另一半时间则用于根据匹配的规则构造RenderStyle。

### 优化建议

- 降低选择器的复杂性；使用以类为中心的选择器。
- 减少必须在其上计算样式的元素数量。

## 避免和限制Layout

对“几何属性”的更改，例如宽度，高度，左侧或顶部，都会产生Layout，会让浏览器产生较大的开销。

- 优先用`Flexbox` 布局；在现代浏览器上，`Flexbox`比`float`和`position`布局会快一点。
- 避免强制同步布局和布局颠簸（读取样式，然后再更改样式，这样迫使浏览器更早的使用JavaScript进行Layout）

## print优化

除了`transforms`和`opacity`外，任何元素更改都会触发**print**

- 坚持为动画进行变换和不透明度更改。
- 用will-change或促进移动元素translateZ。
- 避免过度使用促销规则；层需要内存和管理。
- 对动画使用变换和不透明度更改

> 参考：[FLIP原理](https://aerotwist.com/blog/flip-your-animations/)

## webpack
### 减小体积

- 压缩代码 webpack4 使用 production 模式即可

**指定 NODE_ENV=production**
将 NODE_ENV 环境变量设置为`production`；如果已经启动代码压缩的话可以关闭vue、react等库的警告来减少代码
```js
// webpack.config.js (for webpack 4)
module.exports = {
  optimization: {
    nodeEnv: 'production',
    minimize: true,
  },
};
```

**Tree-shaking**
Tree-shaking 可以移除 JavaScript 上下文中未引用的代码（dead-code），但它依赖ES6模块语法，尽量使用ES6模块语法。

注意：
- 如果项目中使用了 babel，它可能会默认将ES6模块转换为Commonjs，参考：[webpack文档](https://ponyfoo.com/articles/es6-modules-in-depth)
- 如果使用typescript，在 tsconfig.json 设置`{ "compilerOptions": { "module": "es2015" } }`

## 图片资源优化

- url-loader 将图片转化为base64
- svg-url-loader 将SVG转换为 [URL 编码](https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding)
- image-webpack-loader 压缩图片质量，支持jpg、png、svg等格式

> 参考：[图片优化指南](https://images.guide/)

## 优化依赖库

参考：[使用webpack优化您的库](https://github.com/GoogleChromeLabs/webpack-libs-optimizations)

## ModuleConcatenationPlugin
过去 webpack 打包时的一个取舍是将 bundle 中各个模块单独打包成闭包，过多等闭包函数产生多余的代码，可以用 ModuleConcatenationPlugin 将模块提升在一个闭包中，这种方式叫做作用域提升（scope hoisting）

webpack4 production 模式默认开启。手动开启方式为：
```js
// webpack.config.js (for webpack 4)
module.exports = {
  optimization: {
    concatenateModules: true,
  },
}
```

## externals

如果 依赖库 使用的是CDN，或者项目中已经有相同的库，不希望webpack重新打包库时，使用`externals`

> 参考：[webpack externals 文档](https://webpack.js.org/configuration/externals/)

## 利用缓存

参考：[缓存最佳实践](https://jakearchibald.com/2016/caching-best-practices/)

## runtimeChunk
webpack 原型时默认包含在 vendor 中，也就是每次代码更新，vendor也会变更，导致vendor的hash变更；可以将 runtimeChunk 提取出来，对vendor左缓存，配置如下：

```js
// webpack.config.js (for webpack 4)
module.exports = {
  optimization: {
    runtimeChunk: true,
  },
};
```
runtimeChunk通常比较小，也可以内联在HTML中以节省HTTP
```js
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      // Inline all files which names start with “runtime~” and end with “.js”.
      // That’s the default naming of runtime chunks
      inlineSource: 'runtime~.+\\.js',
    }),
    // This plugin enables the “inlineSource” option
    new InlineSourcePlugin(),
  ],
};
```

## 模块id
默认情况下，webpack会使用计数器给每个模块生成一个id，当新增或删除模块时，可能会导致其他模块id也发生变化；id的变化，可能会导致hash的变化，可以配置`HashedModuleIdsPlugin`解决：
```js
// webpack.config.js
module.exports = {
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
  ],
};
```

## JavaScript 执行优化

- 使用`requestAnimationFrame`更新动画，避免使用`setTimeout`、`setInterval`。
- 将时间运行的`JavaScript`移到webWorkers


## 渲染优化
- 尽量避免布局。
- 使用新的布局元素，比如flexbox代替float和position
- 避免强制布局和颠簸

### 强制布局和颠簸

```js
function logBoxHeight() {
 // 强制layout

  box.classList.add('super-big');
  console.log(box.offsetHeight);
}

// 避免强制layout
function logBoxHeight() {

  console.log(box.offsetHeight); // 前一帧的就布局，offsetHeight 是已知的值，不会引发强制layout
  box.classList.add('super-big');
}
```
元素添加样式后，此时浏览器还未layout，如果直接访问元素的样式属性，会导致浏览器强制layout，会导致浏览器强制渲染。

```js
// 颠簸
function resizeAllParagraphsToMatchBlockWidth() {

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.width = box.offsetWidth + 'px';
  }
}

// 避免颠簸

let width = box.offsetWidth;

function resizeAllParagraphsToMatchBlockWidth() {
  for (let i = 0; i < paragraphs.length; i++) {
    // Now write.
    paragraphs[i].style.width = width + 'px';
  }
}
```
循环代码中为`paragraphs`的子元素提供`width`，但第一个子元素赋值后，样式已经发生改编，接下来但循环中`box.offsetWidth`都会引起强制布局，连续多次强制渲染造成颠簸。

## 避免 print

- 除了`transforms`和`opacity`，所有样式修改都会触发**print**
- 使用图层或者动画，减少print区域
- [Chrome DevTools](https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas)查看分析print





