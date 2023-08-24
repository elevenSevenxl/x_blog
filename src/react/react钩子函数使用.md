---
title: react钩子函数使用
isTimeLine: true
cover: /assets/images/cover11.jpg
date: 2023-08-24
footer: <a href="https://icp.gov.moe/?keyword=20231319" target="_blank">萌 ICP 备 20231319 号</a>
copyright: Copyright © 2023 没有蜡笔的小新
category:
  - 前端
tag:
  - react
  - javascript
---

---

### React 钩子函数介绍及使用

​ React 钩子函数是一组特殊的函数，它们可以在组件的生命周期中执行特定的操作。钩子函数可以让你在不编写 class 的情况下使用 state 和其他 React 特性。以下是一些常用的 React 钩子函数及其用法：

#### 1、useState

​ 用于在函数组件中添加 state。它接受一个初始状态值作为参数，并返回一个包含当前状态值和一个更新状态值的函数。

```javascript
import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>当前计数：{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

export default Counter
```

#### 2、useEffect

​ 用于在函数组件中处理副作用，如数据获取、订阅或手动更改 DOM。它接受两个参数：一个回调函数和一个依赖数组。当依赖数组中的任何值发生变化时，回调函数将被执行。

```javascript
import React, { useState, useEffect } from 'react'

function Example() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, []) // 当依赖数组为空时，只在组件挂载和卸载时执行回调函数

  async function fetchData() {
    const response = await fetch('https://api.example.com/data')
    const data = await response.json()
    setData(data)
  }

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}

export default Example
```

#### 3、useContext

​ 用于在函数组件中访问 React context。它接受一个 context 对象作为参数，并返回该 context 的当前值。

```javascript
import React, { useContext } from 'react'
const ThemeContext = React.createContext('light')

function ThemedButton() {
  const theme = useContext(ThemeContext)

  return (
    <button style={{ background: theme === 'dark' ? 'black' : 'white' }}>
      我是一个主题按钮
    </button>
  )
}

function App() {
  return (
    <ThemeContext.Provider value='dark'>
      <ThemedButton />
    </ThemeContext.Provider>
  )
}

export default App
```

#### 4、useReducer

​ 用于在函数组件中管理复杂的 state 逻辑。它接受一个 reducer 函数和一个初始状态作为参数，并返回一个包含当前状态和一个更新状态的函数。

```javascript
import React, { useReducer } from 'react'

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <p>当前计数：{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  )
}

export default Counter
```

#### 5、useCallback

​ 用于在函数组件中缓存回调函数，以避免不必要的重新渲染。它接受一个回调函数和一个依赖数组作为参数，并返回一个缓存的回调函数。当依赖数组中的任何值发生变化时，缓存的回调函数将被更新。

```javascript
import React, { useState, useCallback } from 'react'

function Example() {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count]) // 只有当count发生变化时，才会更新缓存的回调函数

  return (
    <div>
      <p>当前计数：{count}</p>
      <button onClick={increment}>+1</button>
    </div>
  )
}

export default Example
```

## 以上就是一些常用的 React 钩子函数及其用法。
