---
title: JavaScript数组方法的使用
cover: /assets/images/cover23.png
isTimeLine: true
date: 2023-09-13
# order: 3
# sticky: true
# star: true
footer: <a href="https://icp.gov.moe/?keyword=20255521" target="_blank">萌 ICP 备 20255521 号</a>
copyright: Copyright © 2025 没有蜡笔的小新
category:
  - javascript
tag:
  - javascript
---

---

引言： JavaScript 中的数组是一种非常常见和重要的数据结构，它提供了许多强大的方法用于对数组进行操作和处理。本文将介绍一些常用的 JavaScript 数组方法。

### 1. `push()`和`pop()`方法：

- `push()`方法用于向数组末尾添加一个或多个元素，并返回新数组的长度。

- `pop()`方法用于从数组末尾删除最后一个元素，并返回被删除的元素。

  ```js
  const array = [1, 2, 3]

  array.push(4) // [1, 2, 3, 4]
  array.pop() // 3
  ```

### 2. `shift()`和`unshift()`方法：

- `shift()`方法用于从数组开头删除第一个元素，并返回被删除的元素。

- `unshift()`方法用于向数组开头添加一个或多个元素，并返回新数组的长度。

  ```js
  const array = [1, 2, 3]

  array.shift() // 1
  array.unshift(0) // 4
  ```

### 3. `concat()`方法：

- `concat()`方法用于合并两个或多个数组，返回一个新数组，不改变原数组。

  ```js
  const array1 = [1, 2, 3]
  const array2 = [4, 5, 6]

  const newArray = array1.concat(array2) // [1, 2, 3, 4, 5, 6]
  ```

### 4. `slice()`方法：

- `slice()`方法用于从数组中提取指定位置的元素，返回一个新数组，不改变原数组。

  ```js
  const array = [1, 2, 3, 4, 5]

  const newArray = array.slice(-1) // [5]
  ```

### 5. `splice()`方法：

- splice()方法用于向/从数组中添加/删除元素，可以实现插入、替换、删除等操作，改变原数组。

  ```js
  const arr = [1, 2, 3, 4, 5]
  arr.splice(1, 2, 'a', 'b') // 插入元素
  console.log(arr) // 输出：[1, 'a', 'b', 4, 5]
  arr.splice(0, 1, 'x') // 替换元素
  console.log(arr) // 输出：[ 'x', 'a', 'b', 4, 5]
  arr.splice(3, 0, 'y') // 删除元素
  console.log(arr) // 输出：[ 'x', 'a', 'b', 'y', 5]
  ```

### 6. `forEach()`方法：

- `forEach()`方法用于对数组中的每个元素执行指定的操作，没有返回值。

  ```js
  const arr = [1, 2, 3, 4, 5]
  arr.forEach((item, index, array) => {
    console.log(item * 2)
  }) // 输出：2, 4, 6, 8, 10
  ```

### 7. `map()`方法：

- `map()`方法用于对数组中的每个元素执行指定的操作，并返回一个新数组，原数组不变。

  ```js
  const arr = [1, 2, 3, 4, 5]
  const newArr = arr.map((item, index, array) => {
    return item * 2
  }) // 输出：[2, 4, 6, 8, 10]
  ```

### 8. `filter()`方法：

- `filter()`方法用于根据指定条件过滤数组中的元素，返回一个新数组，原数组不变。

  ```js
  const arr = [1, 2, 3, 4, 5]
  const newArr = arr.filter((item, index, array) => {
    return item % 2 === 0
  }) // 输出：[2, 4]
  ```

### 9. `reduce()`方法：

- reduce()方法用于对数组中的元素进行累计计算，返回一个值。

  ```js
  const arr = [1, 2, 3, 4, 5]
  const sum = arr.reduce((accumulator, item, index, array) => {
    return accumulator + item
  }, 0) // 输出：15
  ```

---
