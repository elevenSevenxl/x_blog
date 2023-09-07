---
title: elementUI用table多选实现单选
cover: /assets/images/cover20.png
isTimeLine: true
date: 2023-09-07
# order: 3
# sticky: true
# star: true
footer: <a href="https://icp.gov.moe/?keyword=20231319" target="_blank">萌 ICP 备 20231319 号</a>
copyright: Copyright © 2023 没有蜡笔的小新
category:
  - ElementUI
tag:
  - ElementUI
---

---

### 1.首先隐藏掉多选 checkbox

```js
 ::v-deep .el-table__header {
    .el-checkbox {
      display: none;
    }
  }
```

### 2.利用 table 的 selection-change 事件实现单选

```vue
<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    style="width: 100%;"
    class="exam_table"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column label="角色名称" min-width="120" prop="name">
    </el-table-column>
    <el-table-column prop="num" label="成员数量" min-width="120">
    </el-table-column>
  </el-table>
</template>

data(){ return { tableSelect:[] } }, methods:{ handleSelectionChange(val) { if
(val.length > 1) { this.$refs.multipleTable.clearSelection();
this.$refs.multipleTable.toggleRowSelection(val.pop()); } else {
this.tableSelect = val; } }, }
```

---
