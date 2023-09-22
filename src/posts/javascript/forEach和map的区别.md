---
title: forEach和map的区别
cover: /assets/images/cover13.jpg
isTimeLine: true
date: 2023-08-28
# order: 3
# sticky: true
# star: true
footer: <a href="https://icp.gov.moe/?keyword=20231319" target="_blank">萌 ICP 备 20231319 号</a>
copyright: Copyright © 2023 没有蜡笔的小新
category:
  - javascript
tag:
  - javascript
---

> `map`会返回一个新的数组，而`forEach`不会

forEach 和 map 都是 JavaScript 中用于遍历数组的函数，但它们的用法和返回值有所不同。

### forEach

1. forEach 没有返回值，总是返回 `undefined`。
2. 除非抛出异常，否则没有办法停止或中断 `forEach()` 循环。如果有这样的需求，则不应该使用 `forEach()` 方法。

示例：

```
const arr = [1, 2, 3, 4, 5];
let sum = 0
arr.forEach((element) => {
	console.log(element * 2);
});

// 输出：2, 4, 6, 8, 10

arr.forEach((element) => {
	if(element === 3) {
		return  // 跳出当次循环3不在累加
	}
	sum += element
});
console.log(sum); // 12
```

### map

map 是 JavaScript 数组的一个内置方法，它接受一个回调函数作为参数，并返回一个新数组。回调函数会在数组的每个元素上调用，并将元素的值作为参数传递给回调函数，然后将回调函数的返回值作为新数组的对应元素。map 不会修改原始数组，而是创建一个新数组。

示例：

```
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(function(element) {
return element * 2;
});
console.log(newArr);
// 输出：[2, 4, 6, 8, 10]
```
