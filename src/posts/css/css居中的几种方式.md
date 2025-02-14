---
title: CSS居中的几种方式
cover: /assets/images/cover27.jpg
isTimeLine: true
date: 2023-09-21
# order: 3
# sticky: true
# star: true
footer: <a href="https://icp.gov.moe/?keyword=20255521" target="_blank">萌 ICP 备 20255521 号</a>
copyright: Copyright © 2025 没有蜡笔的小新
category:
  - 前端
tag:
  - css
---

---

### 1.使用 flex 布局：

```css
.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
```

### 2.使用绝对定位和 transform 属性：

```css
.container {
  position: relative;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 3.使用绝对定位和 margin 属性：

```css
.container {
  position: relative;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
}
```

### 3.使用 grid 布局：

```css
.container {
  display: grid;
  place-items: center; /_ 水平居中和垂直居中 _/
}
```

以上是一些常用的方法，可以根据具体需求选择适合的方法来实现元素的水平居中和垂直居中。

---
