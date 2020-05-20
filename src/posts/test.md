---
title: Chrome DevTools 中的实用功能 草稿
tags: DevTools
categories: DevTools
date: 2020-05-20 12:30:52
---

Command 命令

Show Rendering 模拟媒体查询

Coverage  显示覆盖率

### 编辑页面

> 有时候需要对页面进行修改，又不想重新修改代码再编译，可以通过在 console 面板直接操作api来修改页面编辑属性，使页面可编辑；
参考：[Living Standard](https://html.spec.whatwg.org/multipage/interaction.html#contenteditable)

**HTMLElement.contentEditable**

该属性用于表明元素是否可编辑，有以下值：
-   `true` 表明该元素可以编辑
-   `false` 默认，表明该元素不可编辑

**document.designMode**

控制整个文档是否可编辑，有效值为：
 -  "on"
 -  "off"，默认"off"

语法：
```js
element.contentEditable = "true"

document.designMode = "on" || "off";
iframeNode.contentDocument.designMode = "on";
```

### 递增递减
> 在 Element 面板调整样式，有时候需要调整px字体或者布局大小，以递增或者递减的方式很方便。

使用快捷键为：
-   0.1: Option + ↑ / ↓
-   1  : ↑ / ↓
-   100:command + ↑ / ↓

### copy
用来复制 console 中的变量

示例：
在Elements面板选择一个元素并`Store as a global variable`，在 console 中生成一个`temp1`变量。
``` js
copy(temp1) // temp1 被复制在剪切板，可以粘贴在任何地方。
```

### 媒体查询
在设备模式下(Toggle device toolbar) => 三个点（more options）=> Show media queries
选择色块，在菜单栏中选择 Reveal in source code，之后跳转到源码位置。

## 性能监控
Performance Monito 面板



## Console 面板

显示在控制台中查看 log 时，显示每个log的时间戳

按 F1 打开设置，找到 Console 设置，在 Show timesTamps 上打钩。

console.time（[label]）
```
console.time();
for (var i = 0; i < 100000; i++) {
  let square = i ** 2;
}
console.timeEnd();
```

console.trace（）
将堆栈跟踪信息打印到控制台。

```
const first = () => { second(); };
const second = () => { third(); };
const third = () => { fourth(); };
const fourth = () => { console.trace(); };
first();
```
$（选择器，[startNode]）
指定的CSS选择器返回对第一个DOM元素的引用,此函数是document.querySelector（） 函数的别名
$$（选择器，[startNode]）
$$(selector)返回与给定CSS选择器匹配的元素数组。此命令等效于调用 document.querySelectorAll（）。

Shift+ Enter 换行
$x(path, [startNode])
$x(path) 返回与给定XPath表达式匹配的DOM元素数组。

getEventListeners（object）
回在指定对象上注册的事件侦听器

monitorEvents（object [，events]）
    monitorEvents(window, "resize");
    monitorEvents(window, ["resize", "scroll"])

profile([name]) and profileEnd([name])
性能分析

$0
选择dom后最新的一个元素

断点
属性断点
Break On > Attribute Modifications
节点删除断点
Break On > Node Removal
节点增加断点
 Break On > Subtree Modifications

 事件监听
 Event Listener Breakpoints
 断点修改变量
 scope 中，双击变量，进行修改
 watch 点击➕号可以写表达式,比如 typeof some，会一直监听some变量的类型


 ## Performance Monitor
 [参考](https://developers.google.com/web/updates/2017/11/devtools-release-notes#perf-monitor)