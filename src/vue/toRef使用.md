---
title: toRef使用
cover: /assets/images/cover16.jpg
isTimeLine: true
date: 2023-08-31
# sticky: true
footer: <a href="https://icp.gov.moe/?keyword=20231319" target="_blank">萌 ICP 备 20231319 号</a>
copyright: Copyright © 2023 没有蜡笔的小新
category:
  - 前端
tag:
  - vue3
---

---

> // toRef 只能修改响应式对象的值， 非响应式视图没有用
>
> // 非响应式对象经过 toRef 改变之后的变化, toRef 接收两个参数，第一个参数是对象，第二个参数是属性名

```js
<script setup lang="ts">
import { toRef, toRefs, reactive, toRaw } from 'vue'
// toRef 只能修改响应式对象的值， 非响应式视图没有用
// 非响应式对象经过toRef改变之后的变化, toRef接收两个参数，第一个参数是对象，第二个参数是属性名
const people = {
  name: '张三',
  age: 18,
}
const name = toRef(people, 'name')
const change = () => {
  name.value = '王五'
  console.log(people);  // {name: '王五', age: 18}

}
</script>
```

通过控制台可以查看此时数据已被修改，但是页面显示数据并没有变化，可以得出非响应式对象用了 toRef 毫无卵用。

下面把对象变成响应式的再去修改

```js
<script setup lang="ts">
import { toRef, toRefs, reactive, toRaw } from 'vue'
// toRef 只能修改响应式对象的值， 非响应式视图没有用
// 非响应式对象经过toRef改变之后的变化, toRef接收两个参数，第一个参数是对象，第二个参数是属性名
const people = reactive({ name: '张三', age: 18 })
const name = toRef(people, 'name')
const change = () => {
  name.value = '王五'
  console.log(people);

}
</script>
```

可以发现页面数据已成功修改

应用场景有一个函数接收 ref 的一个属性，但是 reactive 包裹的是一个对象，这时候可以用 toRef 结构出来传参即可

## `useDemo(toRef(people, 'name'))`
