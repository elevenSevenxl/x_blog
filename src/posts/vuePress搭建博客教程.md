---
title: vuepress搭建博客教程
cover: /assets/images/cover4.jpg
isTimeLine: true
date: 2023-08-07
sticky: true
star: true
footer: <a href="https://icp.gov.moe/?keyword=20231319" target="_blank">萌 ICP 备 20231319 号</a>
copyright: Copyright © 2023 没有蜡笔的小新
category:
  - VuePress
tag:
  - vuepress
  - github-pages
---

### VuePress 介绍

​ VuePress 由两部分组成：第一部分是一个极简静态网站生成器 (opens new window)，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

[vuePress官方文档]: https://vuepress.vuejs.org

### vuePress 主题

​ vuePress 除了默认主题，还提供了很多扩展主题。

- vuepress 默认主题 21.7k⭐

- vuepress-theme-hope 1.4k⭐
- vuepress-theme-reco，（2.0 还在测试阶段） 1.6k⭐
- vuepress-theme-vdoing 3.5k⭐

不同主题的之间的最明显的差异就是默认的样式不同，其次就是默认提供的功能不同。

本次搭建采用的是 vuepress-theme-hope

### 搭建项目

#### 💎 初始化项目

​ ps: 当选择了一个主题，请务必使用该主题提供的脚手架工具创建项目。这样可以减少很多配置上的麻烦。

```js
Need to install the following packages:
  create-vuepress-theme-hope@2.0.0-beta.233
Ok to proceed? (y) y
? Select a language to display / 选择显示语言 简体中文
? 选择包管理器 yarn
生成 package.json...
? 设置应用名称 blogs
? 设置应用版本号 2.0.0
? 设置应用描述 A project of vuepress-theme-hope
? 设置协议 MIT
? 项目需要用到多语言么? No
? 是否需要一个自动部署文档到 GitHub Pages 的工作流？ Yes
? 你想要创建什么类型的项目？ blog
生成模板...
? 是否初始化 Git 仓库? Yes
? 选择你想使用的源 当前源
```

初始化目录结构如下：

#### ![image-20230807222825489](/assets/images/content1.png)

待更新。。。
