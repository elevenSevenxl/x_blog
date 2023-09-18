---
title: shallowRef 和 markRaw 的区别
cover: /assets/images/cover25.jpg
isTimeLine: true
date: 2023-09-19
# sticky: true
footer: <a href="https://icp.gov.moe/?keyword=20231319" target="_blank">萌 ICP 备 20231319 号</a>
copyright: Copyright © 2023 没有蜡笔的小新
category:
  - 前端
tag:
  - vue3
---

---

> shallowRef 和 markRaw 是 Vue3 中的两个函数，用于处理响应式数据。

- shallowRef：
  用于创建一个响应式的数据引用（Ref）。
  当包装的值发生变化时，会触发视图的重新渲染。
  但是，如果包装的值是一个对象或数组，则不会对其进行递归地深层监听，只会监听其第一层的变化。
  这意味着，如果对象或数组内部的属性或元素发生变化，视图不会重新渲染。

```js
import { shallowRef } from 'vue'

const obj = { value: 1 }
const shallowObj = shallowRef(obj)

shallowObj.value = 2 // 视图更新

// 下面的操作不会触发视图更新
shallowObj.value.innerValue = 3
```

- markRaw：
  用于创建一个非响应式的数据，即不会被 Vue 追踪其变化。
  适用于那些不希望被 Vue 追踪其变化的数据，比如第三方库的对象或不需要响应式的临时数据。
  使用 markRaw 包装的数据，无论其如何变化，都不会触发视图的重新渲染。

```js
import { markRaw } from 'vue'

const obj = markRaw({ value: 1 })

obj.value = 2 // 视图不会更新
```

```warning
需要注意的是，使用markRaw包装的数据将失去响应性，不再受Vue的追踪，因此需要谨慎使用。一般来说，应该优先使用响应式的数据来实现视图的更新。只有在某些特殊情况下，才会使用markRaw来明确指定某些数据不需要被追踪。
```

- 使用场景

动态组件 tab 切换

1.在 Vue2 的时候 is 是通过组件名称切换的 在 Vue3 setup 是通过组件实例切换的

2.如果你把组件实例放到 Reactive Vue 会给你一个警告 runtime-core.esm-bundler.js:38 [Vue warn]: Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.
Component that was made reactive:

这是因为 reactive 会进行 proxy 代理 而我们组件代理之后毫无用处，为了节省性能开销，推荐我们使用 shallowRef 或者 markRaw 跳过 proxy 代理。

---
