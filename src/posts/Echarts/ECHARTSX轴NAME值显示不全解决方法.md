---
title: ECHARTSX轴NAME值显示不全解决方法
cover: /assets/images/cover6.jpg
isTimeLine: true
date: 2023-08-15
# order: 3
# sticky: true
# star: true
footer: <a href="https://icp.gov.moe/?keyword=20231319" target="_blank">萌 ICP 备 20231319 号</a>
copyright: Copyright © 2023 没有蜡笔的小新
category:
  - Echarts
tag:
  - Echarts
---

---

### 1. X 轴刻度显示不完整,如图所示

![](./images/content.png)

### 2. 解决方法，调整 gird 的 left、right 值

```js
let option = {
    ...
    grid: {
        left: '3%',
        right: '10%',
        bottom: '3%',
        top: '8%',
        containLabel: true
    }
    ...
}
```

---
