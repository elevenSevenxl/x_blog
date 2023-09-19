---
title: BEM介绍与使用
cover: /assets/images/cover26.jpg
isTimeLine: true
date: 2023-09-20
# order: 3
# sticky: true
# star: true
footer: <a href="https://icp.gov.moe/?keyword=20231319" target="_blank">萌 ICP 备 20231319 号</a>
copyright: Copyright © 2023 没有蜡笔的小新
category:
  - title
tag:
  - title
---

---

### 什么是 less

Less （Leaner Style Sheets 的缩写） 是一门向后兼容的 CSS 扩展语言。sass 和 less 一样都是 css 预处理器。

在 vite 中使用 less | sass

```shell
npm install less  -D 安装即可

npm install sass -D 安装即可
```

在 style 标签注明即可

```css
<style lang="less">

</style>
```

```css
<style lang="scss">

</style>
```

### 什么是 scoped

实现组件的私有化, 当前 style 属性只属于当前模块.

在 DOM 结构中可以发现,vue 通过在 DOM 结构以及 css 样式上加了唯一标记,达到样式私有化,不污染全局的作用,

```css
<style scoped lang="scss">

</style>
```

### bem 架构

bem 架构是一种 css 架构 oocss 实现的一种 （面向对象 css） ，BEM 实际上是 block、element、modifier 的缩写，分别为块层、元素层、修饰符层，element UI 也使用的是这种架构

BEM 命名约定的模式是：

```ts
.block {}

.block__element {}

.block--modifier {}

// 使用sass 最小单元复刻一个bem 架构

$block-sel: "-" !default;
$element-sel: "__" !default;
$modifier-sel: "--" !default;
$namespace:'xl' !default;
@mixin bfc {
    height: 100%;
    overflow: hidden;
}

//混入
@mixin b($block) {
   $B: $namespace + $block-sel + $block; //变量
   .#{$B}{ //插值语法#{}
     @content; //内容替换
   }
}

@mixin flex {
    display: flex;
}

@mixin e($element) {
    $selector:&;
    @at-root {
        #{$selector + $element-sel + $element} {
            @content;
        }
    }
}

@mixin m($modifier) {
    $selector:&;
    @at-root {
        #{$selector + $modifier-sel + $modifier} {
            @content;
        }
    }
}

```

全局扩充 sass

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/bem.scss';"
      }
    }
  }
})
```

Vue 组件用法

```vue
<template>
  <div class="xl-wraps">
    <div>
      <Menu></Menu>
    </div>
    <div class="xl-wraps__right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import Menu from './Menu/index.vue'
import Content from './Content/index.vue'
import Header from './Header/index.vue'
</script>
<style lang="scss" scoped>
@include b('wraps') {
  @include bfc;
  @include flex;
  @include e(right) {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
```

---
