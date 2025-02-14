---
title: classnames--用于有条件地将类名连接在一起
cover: /assets/images/cover9.jpg
isTimeLine: true
date: 2023-08-22
# order: 3
# sticky: true
# star: true
footer: <a href="https://icp.gov.moe/?keyword=20255521" target="_blank">萌 ICP 备 20255521 号</a>
copyright: Copyright © 2025 没有蜡笔的小新
category:
  - classnames
tag:
  - classnames
---

---

#### 1. 安装

```shell
# via npm
npm install classnames

# via Bower
bower install classnames

# or Yarn (note that it will automatically save the package to your `dependencies` in `package.json`)
yarn add classnames
```

#### 2. 使用

```js
import classNames from 'classNames'

classNames('foo', 'bar') // => 'foo bar'
classNames('foo', { bar: true }) // => 'foo bar'
classNames({ 'foo-bar': true }) // => 'foo-bar'
classNames({ 'foo-bar': false }) // => ''
classNames({ foo: true }, { bar: true }) // => 'foo bar'
classNames({ foo: true, bar: true }) // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }) // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '') // => 'bar 1'
```

---
