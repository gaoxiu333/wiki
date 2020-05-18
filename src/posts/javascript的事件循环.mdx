---
title: JavaScript的事件循环
tags:
  - javascript
categories:
  - javascript
date: 2020-04-29 15:19:18
---

## 介绍

JavaScript是一个单线程语言，它由各种引擎解释，其中最著名的是Chrome和Node中使用的V8。

但是引擎实际上只做了几件事，它逐行运行代码，并将函数添加到堆栈中。

## 调用栈

调用栈是一个LIFO队列，即后进先出（Last in,First out）。

当调用一个函数时，它会被推入调用栈中。如果该函数调用另一个函数，另一个函数将位于调用栈的顶部，而这个函数执行完后 ，它会从栈中被推出，直到栈被清空。

示例

```javascript
function foo(b) {
  let a = 10;
  return a + b + 11;
}

function bar(x) {
  let y = 3;
  return foo(x * y);
}

console.log(bar(7)); // 返回 42

```

- 执行 `bar`，并推入栈中
- 执行 `bar ` 时导致 `foo` 被调用
- 执行 `foo`，将 `foo` 推入栈中
- 执行完 `foo`，发现 `foo` 没有什么事情可做了，将 `foo` 推出栈
- `bar` 执行完毕，推出栈



## 队列（Callback Queue）

Web APIs 提供了setTimeout，DOM事件等api。

在调用setTimeout时，浏览器会启用计时器，可以理解为这是浏览器做的；一旦计时器到期，将回调函数放入CallBack Queue中，并等待执行。Ajax，DOM事件等也在这里排队。

## 事件循环（Event-Loop）

![](/images/javascript-event-loop.png)

有一个过程会不断检查调用栈是否为空，并且每当它为空时，它就会检查 Callback Queue 中是否有等待调用的函数。如果有的话，那么队列中的第一个函数将被调用并将其移入调用栈。如果回调队列为空，则此监视过程将无限期地继续运行。事件循环是一个持续运行的过程，它同时监视回调队列和调用栈。

## 微任务与宏任务

ECMAScript 2015 引入了 Job Queue 的概念，Promise使用了这个队列，也是我们说的微任务。

前面 Callback Queue 中添加的任务可以被称为宏任务。

微任务优先级高于宏任务。

```javascript
console.log('script start');
setTimeout(function() {
   console.log('setTimeout');
}, 0);
var promise = new Promise(function(resolve, reject) {
   resolve();
});
promise.then(function(resolve) {
   console.log('Promise1');
})
.then(function(resolve) {
   console.log('Promise2');
});
console.log('script end');
```

<details>
  <summary>打印</summary>
  <pre>
  script start
  script end
  Promise1
  Promise2
  setTimeout
  </pre>
</details>

## 练习题

一

```javascript
setTimeout(() => console.log('setTimeout1'), 0);  
setTimeout(() => {																
    console.log('setTimeout2');
    Promise.resolve().then(() => {
        console.log('promise3');
        Promise.resolve().then(() => {
            console.log('promise4');
        })
        console.log(5)
    })
    setTimeout(() => console.log('setTimeout4'), 0);  
}, 0);
setTimeout(() => console.log('setTimeout3'), 0);  
Promise.resolve().then(() => {
    console.log('promise1');
})
```

二

```javascript
async function async1() {
    console.log( 'async1 start' )
    await async2()
    console.log( 'async1 end' )
}
async function async2() {
    console.log( 'async2' )
}
async1()
console.log( 'script start' )
```

三

```javascript
async function async1() {
	console.log( 'async1 start' )
await async2()
	console.log( 'async1 end' )
}
async function async2() {
	console.log( 'async2' )
}
console.log( 'script start' )
setTimeout( function () {
    console.log( 'setTimeout' )
}, 0 )
async1();
new Promise( function ( resolve ) {
    console.log( 'promise1' )
    resolve();
} ).then( function () {
    console.log( 'promise2' ) 
} )
console.log( 'script end' )
```

四

```javascript
new Promise((resolve, reject) => {
    console.log("promise1")
    resolve()
})
    .then(() => {
        console.log(1)
    })
    .then(() => {
        console.log(2)
    })
    .then(() => {
        console.log(3)
    })

new Promise((resolve, reject) => {
    console.log("promise2")
    resolve()
})
    .then(() => {
        console.log(4)
    })
    .then(() => {
        console.log(5)
    })
    .then(() => {
        console.log(6)
    })
```



五

```javascript
async function t1 () {
  console.log(1)
  console.log(2)
  await Promise.resolve().then(() => console.log('t1p'))
  console.log(3)
  console.log(4)
}

async function t2() {
  console.log(5)
  console.log(6)
  await Promise.resolve().then(() => console.log('t2p'))
  console.log(7)
  console.log(8)
}

t1()
t2()	
```

六

```javascript
async function t1 () {
  console.log(1)
  console.log(2)
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('t1p')
      resolve()
    }, 1000)
  })
  await console.log(3)
  console.log(4)
}

async function t2() {
  console.log(5)
  console.log(6)
  await Promise.resolve().then(() => console.log('t2p'))
  console.log(7)
  console.log(8)
}

t1()
t2()

console.log('end')
```

> 参考：
>
> https://www.javascripttutorial.net/javascript-event-loop/
>
> https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
>
> https://www.cnblogs.com/fangdongdemao/p/10262209.html









