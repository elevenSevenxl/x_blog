---
title: 数字转中文或英文
cover: /assets/images/cover23.png
isTimeLine: true
date: 2023-09-27
# order: 3
# sticky: true
# star: true
footer: <a href="https://icp.gov.moe/?keyword=20231319" target="_blank">萌 ICP 备 20231319 号</a>
copyright: Copyright © 2023 没有蜡笔的小新
category:
  - 前端
tag:
  - javascript
---

---

Pixiu-Number-Toolkit 是一个强大的 JavaScript 数字处理库，其中一个重要的功能是 numberToWords，它可以将阿拉伯数字转换为英文或中文的文字形式。这个 JavaScript 数字转换功能非常实用，可以用于各种场景，如财务报告、数据可视化等。

- 将数字转为中文汉字
  numberToWords 函数接受两个参数：一个数字和一个语言标识符（"en"或"zh"）。当语言标识符为"zh"时，该函数将阿拉伯数字转换为中文形式。

```js
 例如，如果我们输入 numberToWords(12345, "zh")，函数将返回"一万二千三百四十五"。
```

该函数使用了中文的计数系统，其中每四个数字一组，从右到左分别代表个、十、百、千。每组数字之间用"万"或"亿"分隔。

- 将数字转为英文单词
  当语言标识符为"en"时，该函数将阿拉伯数字转换为英文形式。

```js
例如，如果我们输入 numberToWords(12345, "en")，函数将返回"twelve thousand three hundred forty-five"。
```

该函数使用了英文的计数系统，其中每三个数字一组，从右到左分别代表个、十、百。每组数字之间用"thousand"、"million"、"billion"等分隔。

- 使用方法

首先，需要安装 pixiu-number-toolkit 库：

```shell
npm install pixiu-number-toolkit
```

然后，在你的代码中导入 numberToWords 函数：

```js
import { numberToWords } from 'pixiu-number-toolkit'
or
const { numberToWords } = require('pixiu-number-toolkit')
```

最后，你就可以使用这个函数进行数字转换了：

```js
let num = 12345
console.log(numberToWords(num, 'zh')) // 输出: "一万二千三百四十五"
console.log(numberToWords(num, 'en')) // 输出: "twelve thousand three hundred forty-five"
```

总的来说，Pixiu-Number-Toolkit 的 numberToWords 功能是一个非常实用的工具，无论你需要将数字转换为中文还是英文，它都能提供强大的支持。

---
