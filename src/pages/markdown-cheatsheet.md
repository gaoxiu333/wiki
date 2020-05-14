---
title: markdown
tags:
  - markdown
categories:
  - cheat sheets
date: 2020-05-03 16:10:15
layout: cheatSheet
---

## 标题
```markdown
# 标题1
## 标题2
### 标题3

标题1
=====
标题2
-----
```

## 字体

``` markdown
*斜体*
_斜体_

**粗体**
__粗体__

***粗斜体***
___粗斜体___

~~删除线~~

<u>下划线</u>
```

## 分割线

```markdown
---

***
```

## 列表

```
* 无序项
* 无序项

+ 无序项
+ 无序项

- 无序项
- 无序项

1. 有序1
2. 有序2
```

## 区块引用

``` markdown
> 这是一个
> 区块引用
> > 嵌套引用
```

## 代码

```markdown
`foo`

​```
function foo(){
	// 这是代码块
}
​```
```

## 链接

```markdown
[google](http://google.com)

[google][google]
[google]:http://google.com

<http://google.com>
```

## 图片

```markdwon
![图片裂了的文字描述](图片地址 "可选标题")

![图片裂了的文字描述][img]
[img]:图片地址
```

## 表格

``` markdown
| 表头一 | 表头二 |
---|---
| 单元格 | 单元格 |

| 左对齐 | 居中 | 右对齐 |
| :---  | :---: | ---: |
| 单元格 | 单元格 | 单元格 |
```

## 复选框

```
[x] 已选中
[ ] 未选中

- [x] 已选中
- [ ] 未选中
```

## 折叠
```
<details>
  <summary>显示文字</summary>
  <pre>
   被折叠的部分
  </pre>
</details>
```
## 需要转义
```
\
`
*
_
{ }
[ ]
( )
#
+
-
.
!
```

## 注脚
```
这一句话[^1]里面有注脚，后面也有[^2]
[^1]:注脚内容
[^2]:脚注内容
```

公式
```
//待补充
```


