---
title: grid栅格布局介绍与使用
cover: /assets/images/cover15.png
isTimeLine: true
date: 2023-08-30
# order: 3
# sticky: true
# star: true
footer: <a href="https://icp.gov.moe/?keyword=20255521" target="_blank">萌 ICP 备 20255521 号</a>
copyright: Copyright © 2025 没有蜡笔的小新
category:
  - css
tag:
  - css
---

---

##

### 1.概念

栅格布局是一种将网页内容按照特定的列布局方式进行排列的布局方式。它通常用于创建响应式的网页布局，使得在不同的屏幕尺寸下，网页内容能够按照相应的栅格结构进行排列。栅格布局的原理是将网页内容按照一定的规则进行分割，然后将分割后的内容按照指定的列布局进行排列。这些分割和排列的过程可以通过 CSS 的 display: grid 属性来实现。

### 2.常见属性

`grid-template-columns`：用于定义栅格布局的列布局。可以是一个简单的长度值、一个百分比值或者一个 fr 单位。例如：`repeat(3, 1fr)`表示创建 3 列，每列的宽度自动根据其内容调整。

`grid-template-rows`：用于定义栅格布局的行布局。用法与`grid-template-columns`类似。

`grid-gap`：用于定义栅格布局的行间距和列间距。可以是一个长度值、一个百分比值或者一个 fr 单位。例如：`grid-gap: 10px;`表示行间距为`10px`，列间距为`10px`。

`grid-auto-flow`：用于定义栅格布局的自动布局算法。可选值有`column`、`row`、`dense`。例如：`grid-auto-flow: column;`表示按照列布局自动排列。

`grid-auto-positions`：用于定义栅格布局中项目的自动定位算法。可以是一个长度值或者一个百分比值。例如：`grid-auto-positions: start;`表示项目从左到右依次排列。

`justify-content`：用于定义栅格布局中项目的水平对齐方式。可选值有`start`、`end`、`center`、`space-between`、`space-around`。例如：`justify-content: center;`表示项目水平居中排列。

`align-items`：用于定义栅格布局中项目的垂直对齐方式。可选值有`start`、`end`、`center`、`baseline`、`stretch`。例如：`align-items: center;`表示项目垂直居中排列。

`place-items`：用于组合`align-items`和`justify-content`属性。例如：`place-items: center center;`表示项目垂直居中排列，水平居中排列。

`grid-template`：用于组合`grid-template-columns`、`grid-template-rows`和`grid-gap`属性。例如：`grid-template: repeat(3, 1fr) / 10px 10px;`表示创建 3 列，每列的宽度自动根据其内容调整，行间距为`10px`，列间距为`10px`。

### 3.案例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>栅格布局示例</title>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        padding: 10px;
      }

      .grid-item {
        background-color: #f1f1f1;
        padding: 20px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
    </div>
  </body>
</html>
```

在这个示例中，我们使用了`display: grid`属性来创建一个栅格布局容器。然后，我们使用`grid-template-columns`属性来定义栅格布局的列布局。这里我们使用了`repeat`函数来重复创建 3 列，每列的宽度为`1fr`，表示栅格布局的每列宽度自动根据其内容调整。

接下来，我们使用`grid-gap`属性来定义栅格布局的行间距和列间距。这里我们设置了行间距为`10px`，列间距为`10px`。

最后，我们使用`padding`属性来设置栅格布局容器的内边距。

在`grid-item`类中，我们设置了背景颜色、内边距和文本对齐方式等样式。

## 当屏幕尺寸发生变化时，栅格布局会自动调整布局，以适应不同的屏幕尺寸。这样可以确保在不同的屏幕尺寸下，网页内容能够按照指定的栅格结构进行排列。
