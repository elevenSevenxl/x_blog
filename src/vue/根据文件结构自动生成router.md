---
title: 根据文件结构自动生成router.js
cover: /assets/images/cover14.jpg
isTimeLine: true
date: 2023-08-29
# order: 3
# sticky: true
# star: true
footer: <a href="https://icp.gov.moe/?keyword=20255521" target="_blank">萌 ICP 备 20255521 号</a>
copyright: Copyright © 2025 没有蜡笔的小新
category:
  - vue
tag:
  - vue
---

---

## 根据文件结构自动生成 router.js

### 读取 views 目录下的.vue 文件动态生成路由

```js
var fs = require('fs')
const readline = require('readline')
const os = require('os')

const vueDir = './src/views/'

fs.readdir(vueDir, (err, files) => {
  if (err) {
    console.log(err)
    return
  }
  let routers = ''
  for (const [index, fileName] of files.entries()) {
    console.log('zzzzzzzzz', index)
    if (fileName.indexOf('.') < 0) {
      continue
    }
    const [name, ext] = fileName.split('.')
    if (ext !== 'vue') {
      continue
    }
    // let routerName = null
    // const contentFull = fs.readFileSync(`${vueDir}${fileName}`, 'utf-8')
    // - Windows 使用 \r\n
    // - Linux/Unix 使用 \n
    // - Mac OS 使用 \r
    // os.EOL 将会根据当前的操作系统,返回对应行结束符的表示
    // var match = /\<\!\-\-\s*(.*)\s*\-\-\>/g.exec(contentFull.split(os.EOL)[0])
    // console.log('ccc', match)
    // if (match) {
    //   routerName = match[1].trim()
    // }
    console.log('qqqqqqq', os)
    routers += `  { \n\t\t${name ? "name: '" + name + "',\n\t\t"''}path: '/${name === 'root' ? '' : name}',\n\t\tcomponent: () => import(/* webpackChunkName: '${name}' */ '@/views/${fileName}')\n\t}`
    // 如果不是最后一个路由添加则添加换行和，
    if (index !== files.length - 1) {
      routers += ',\n'
    }
    console.log('------------', routers)
  }
  const result = `// 该文件由gen-router.js自动生成，请勿手动修改
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
const routes = [
${routers}
];

const router = new VueRouter({
  mode: 'hash',
  routes
})
export default router

`
  // console.log(result);
  fs.writeFile('./src/router.js', result, 'utf-8', err => {
    if (err) throw err
    // 如果没有错误
    console.log('./src/router.js 生成成功！')
  })
})

```

### 新建一个 vue2 项目的 demo，在 package.json 文件中配置

```json
 "scripts": {
    "serve": "node gen-router.js && vue-cli-service serve",
    "build": "node gen-router.js && vue-cli-service build",
    "genmenu": "node gen-router.js",
    "svgo": "svgo -f src/assets/icons/svg --config=src/assets/icons/svgo.config.js"
  }
```

### 执行 `npm run dev` ，生成文件如下

```js
// 该文件由gen-router.js自动生成，请勿手动修改
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
const routes = [
  {
    name: 'AboutView',
    path: '/AboutView',
    component: () =>
      import(/* webpackChunkName: 'AboutView' */ '@/views/AboutView.vue')
  },
  {
    name: 'HomeView',
    path: '/HomeView',
    component: () =>
      import(/* webpackChunkName: 'HomeView' */ '@/views/HomeView.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})
export default router
```

---
