---
title: vuepress部署注意事项
cover: /assets/images/bg2.png
isTimeLine: true
date: 2023-08-06
sticky: true
star: true
footer: <a href="https://icp.gov.moe/?keyword=20231319" target="_blank">萌 ICP 备 20231319 号</a>
copyright: Copyright © 2023 没有蜡笔的小新
category:
  - 前端
tag:
  - vuepress
  - github-pages
---

### 部署到 Github Pages 访问页面样式丢失问题

---

## vuepress 部署注意事项

- 部署可以正常访问，但是页面样式丢失，这时候需要查看 config.ts 文件下的 base 路径配置是否正确

```
 访问路径为https://<USERNAME>.github.io/，则可以省略这一步，因为 base 默认即是 “/”。
```

```
  访问路径https://<USERNAME>.github.io/<REPO>/，则将 base 设置为 “/<REPO>/”
```

::: tip

- `<USERNAME>`用户名
- `<REPO>`仓库名称
  :::

```js
  // github创建的仓库为study_blog，则base需要改为如下设置
  export default defineUserConfig({
    ...
    base: "/study_blog/",
    ...
  })
```
