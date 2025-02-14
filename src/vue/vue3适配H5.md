---
title: vue3适配H5
cover: /assets/images/cover24.png
isTimeLine: true
date: 2023-09-14
# sticky: true
footer: <a href="https://icp.gov.moe/?keyword=20255521" target="_blank">萌 ICP 备 20255521 号</a>
copyright: Copyright © 2025 没有蜡笔的小新
category:
  - 前端
tag:
  - vue3
---

---

### 前言

​ 移动设备具有各种不同的屏幕尺寸和分辨率，例如智能手机和平板电脑。为了提供更好的用户体验，网页需要根据设备的屏幕宽度进行自适应布局。如果不设置 width=device-width，移动设备会按照默认的视口宽度（通常是较宽的桌面屏幕）来渲染网页，导致网页内容在移动设备上显示不正常，可能出现内容被截断或需要水平滚动的情况.

​ 在开发移动端的时候需要适配各种机型，有大的，有小的，我们需要一套代码，在不同的分辨率适应各种机型。

因此我们需要设置 meta 标签：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

然后我们实现一个经典的圣杯布局

圣杯布局：在`CSS`中，圣杯布局是指两边盒子宽度固定，中间盒子自适应的三栏布局，其中，中间栏放到文档流前面，保证先行渲染；

```vue
<template>
  <div>
    <header>
      <div>left</div>
      <div>center</div>
      <div>right</div>
    </header>
  </div>
</template>
<style>
header {
  display: flex;
  justify-content: space-between;
  div {
    height: 50px;
    color: white;
    text-align: center;
    line-height: 50px;
  }

  div:nth-child(1) {
    width: 100px;
    background: red;
  }

  div:nth-child(2) {
    flex: 1;
    background: green;
  }

  div:nth-child(3) {
    width: 100px;
    background: blue;
  }
}
</style>
```

正常手机看着也还行，但是如果是小手机就会有问题 很挤

自适应
发现`px`是相对单位固定的，无法进行自适应，不会随着屏幕尺寸的改变而改变。

而 rem 是根据`html`的 font-size 进行缩放的，可以进行自适应，缺点就是需要计算每个屏幕大小所对应的 font-size

`vw` `vh`是相对`viewport` 视口的单位，配合 meta 标签可以直接使用，无需计算

1 `vw `= 1/100 视口宽度

1 `vh` = 1/100 视口高度

当前屏幕视口是 375 像素，1`vw`就是 3.75 像素

现在知道了用什么单位，但是我们还要根据`px`去换算`vw`就很麻烦，能不能自动转换？？？

`postCss`
https://cn.vitejs.dev/config/shared-options.html#css-postcss

发现`vite`已经内置了`postCss`

https://www.postcss.com.cn/

`postCss` 提供了把`css` 转换`AST`的能力，类似于 Babel，为此我们可以编写一个插件用于将`px`转换为`vw`

```shell
npm init vue
```

构建一个`vue`项目

根目录新建一个`plugins`文件夹新建两个文件`pxto-viewport.ts` `type.ts`

然后在` tsconfig.node.json` 的 includes 配置` "plugins/**/*",`

`compilerOptions` 配置` noImplicitAny:false`

`pxto-viewport.ts`

```ts
import type { Options } from './type'
import type { Plugin } from 'postcss'
const defaultOptions = {
  viewPortWidth: 375,
  mediaQuery: false,
  unitToConvert: 'px'
}
export const pxToViewport = (options: Options = defaultOptions): Plugin => {
  const opt = Object.assign({}, defaultOptions, options)
  return {
    postcssPlugin: 'postcss-px-to-viewport',
    //css节点都会经过这个钩子
    Declaration(node) {
      const value = node.value
      //匹配到px 转换成vw
      if (value.includes(opt.unitToConvert)) {
        const num = parseFloat(value)
        const transformValue = (num / opt.viewPortWidth) * 100
        node.value = `${transformValue.toFixed(2)}vw` //转换之后的值
      }
    }
  }
}
```

`type.ts`

```ts
export interface Options {
  viewPortWidth?: number
  mediaQuery?: boolean
  unitToConvert?: string
}
```

`vite.config.ts` 引入我们写好的插件

```ts
  css:{
     postcss:{
         plugins:[
            pxToViewport()
         ]
     },
  },
```

额外的小知识
比如要增加一个 可以设置全局的字体大小 或者全局背景颜色切换应该怎么做呢？

安装`vueUse`

```shell
npm i  @vueuse/core
```

定义`css`变量

```css
:root {
  --size: 14px;
}
div {
  height: 50px;
  color: white;
  text-align: center;
  line-height: 50px;
  font-size: var(--size);
}
```

切换字体大小

```html
<div>
  <button @click="change(36)">大</button>
  <button @click="change(24)">中</button>
  <button @click="change(14)">小</button>
</div>
```

```js
import { useCssVar } from '@vueuse/core'
const change = (str: number) => {
  const color = useCssVar('--size')
  color.value = `${str}px`
}

useCssVar 的底层原理就是

document.documentElement.style.getPropertyValue('--size')
读取就是get设置就是set 只要想切换的页面用这个css变量就可以了，如果想持久存储就用localstorage
```

---
