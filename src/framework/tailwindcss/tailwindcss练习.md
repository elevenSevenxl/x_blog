---
title: tailwind.css-demo
cover: /assets/images/cover18.jpg
isTimeLine: true
date: 2023-09-05
# sticky: true
# star: true
footer: <a href="https://icp.gov.moe/?keyword=20231319" target="_blank">萌 ICP 备 20231319 号</a>
copyright: Copyright © 2023 没有蜡笔的小新
category:
  - 前端
tag:
  - tailwindcss
---

---

#### 1.实现头部导航栏效果图

![](./images/content1.png)

![](./images/content2.png)

#### 2.代码

```vue
<template>
  <div class="w-full h-full">
    <header class="h-16 bg-gray-800 flex text-gray-300 px-5">
      <a href="#" class="mr-5">
        <img src="./logo.svg" alt="" class="h-full" />
      </a>
      <nav class="flex items-center">
        <a href="#" class="bg-black px-5 py-2 mx-1 rounded-lg hover:bg-black"
          >react</a
        >
        <a href="#" class="px-5 py-2 mx-1 rounded-lg hover:bg-black">vue</a>
        <a href="#" class="px-5 py-2 mx-1 rounded-lg hover:bg-black">uniapp</a>
        <a href="#" class="px-5 py-2 mx-1 rounded-lg hover:bg-black"
          >tailwind</a
        >
      </nav>
      <div class="group ml-auto relative flex items-center ">
        <img src="./logo.svg" alt="" class="h-9 rounded-full" />
        <div
          class="absolute bg-white text-gray-700 text-sm top-14 right-0 shadow-lg w-48 ring-1 ring-blcak ring-opacity-5 py-2 rounded-md scale-0 group-hover:scale-100 duration-300 origin-top-right"
        >
          <a href="#" class="text-gray-600 block px-4 py-2 hover:bg-gray-100"
            >个人资料</a
          >
          <a href="#" class="text-gray-600 block px-4 py-2 hover:bg-gray-100"
            >设置</a
          >
          <a href="#" class="text-gray-600 block px-4 py-2 hover:bg-gray-100"
            >退出</a
          >
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
```

---
