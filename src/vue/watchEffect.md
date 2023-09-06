---
title: watchEffect
cover: /assets/images/cover19.jpg
isTimeLine: true
date: 2023-09-06
# order: 3
# sticky: true
# star: true
footer: <a href="https://icp.gov.moe/?keyword=20231319" target="_blank">萌 ICP 备 20231319 号</a>
copyright: Copyright © 2023 没有蜡笔的小新
category:
  - 前端
tag:
  - vue3
---

立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。

如果用到 message 就只会监听 message 就是用到几个监听几个 而且是非惰性 会默认调用一次

```js
let message = ref<string>('')
let message2 = ref<string>('')
watchEffect(() => {
  //console.log('message', message.value);
  console.log('message2', message2.value)
})
// 清除副作用
// 就是在触发监听之前会调用一个函数可以处理你的逻辑例如防抖

import { watchEffect, ref } from 'vue'
let message = ref<string>('')
let message2 = ref<string>('')
watchEffect(oninvalidate => {
  //console.log('message', message.value);
  oninvalidate(() => {})
  console.log('message2', message2.value)
})
// 停止跟踪 watchEffect 返回一个函数 调用之后将停止更新

const stop = watchEffect(
  oninvalidate => {
    //console.log('message', message.value);
    oninvalidate(() => {})
    console.log('message2', message2.value)
  },
  {
    flush: 'post',
    onTrigger() {}
  }
)
stop()
```

---

更多的配置项

副作用刷新时机：flush 一般使用 post  
更新时机： pre--组件更新前执行； sync--强制效果始终同步触发； post--组件更新后执行
onTrigger：可以帮助我们调试 watchEffect

```js
import { watchEffect, ref } from 'vue'
let message = ref < string > ''
let message2 = ref < string > ''
watchEffect(
  oninvalidate => {
    //console.log('message', message.value);
    oninvalidate(() => {})
    console.log('message2', message2.value)
  },
  {
    flush: 'post',
    onTrigger() {}
  }
)
```

---
