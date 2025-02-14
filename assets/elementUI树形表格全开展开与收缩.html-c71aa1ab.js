const n=JSON.parse('{"key":"v-37093ae0","path":"/posts/ElementUI/elementUI%E6%A0%91%E5%BD%A2%E8%A1%A8%E6%A0%BC%E5%85%A8%E5%BC%80%E5%B1%95%E5%BC%80%E4%B8%8E%E6%94%B6%E7%BC%A9.html","title":"elementUI树形表格全开展开与收缩","lang":"zh-CN","frontmatter":{"title":"elementUI树形表格全开展开与收缩","cover":"/assets/images/cover5.png","isTimeLine":true,"date":"2023-08-10T00:00:00.000Z","footer":"<a href=\\"https://icp.gov.moe/?keyword=20255521\\" target=\\"_blank\\">萌 ICP 备 20255521 号</a>","copyright":"Copyright © 2025 没有蜡笔的小新","category":["ElementUI"],"tag":["ElementUI"],"description":"1. 全部展开和收缩 根据 element-ui 文档的 toggleRowExpansion 先在 data 里定义 isExpansion 为 false，同时 el-table 的 default-expand-all 默认全部收缩，当点击按钮，this.isExpansion 取反； 遍历得到 row 和布尔值 isExpansion，通过 ref 找到 table 执行方法 toggleRowExpansion(row, expanded) methods: { // 切换数据表格树形展开 toggleRowExpansion() { this.isExpansion = !this.isExpansion; this.toggleRowExpansionAll(this.menuList, this.isExpansion); }, toggleRowExpansionAll(data, isExpansion) { data.forEach((item) =&gt; { this.$refs.dataTreeList.toggleRowExpansion(item, isExpansion); if (item.children !== undefined &amp;&amp; item.children !== null) { this.toggleRowExpansionAll(item.children, isExpansion); } }); }, },","head":[["meta",{"property":"og:url","content":"https://elevenSevenxl.github.io/x_blog/x_blog/posts/ElementUI/elementUI%E6%A0%91%E5%BD%A2%E8%A1%A8%E6%A0%BC%E5%85%A8%E5%BC%80%E5%B1%95%E5%BC%80%E4%B8%8E%E6%94%B6%E7%BC%A9.html"}],["meta",{"property":"og:site_name","content":"木兮blog"}],["meta",{"property":"og:title","content":"elementUI树形表格全开展开与收缩"}],["meta",{"property":"og:description","content":"1. 全部展开和收缩 根据 element-ui 文档的 toggleRowExpansion 先在 data 里定义 isExpansion 为 false，同时 el-table 的 default-expand-all 默认全部收缩，当点击按钮，this.isExpansion 取反； 遍历得到 row 和布尔值 isExpansion，通过 ref 找到 table 执行方法 toggleRowExpansion(row, expanded) methods: { // 切换数据表格树形展开 toggleRowExpansion() { this.isExpansion = !this.isExpansion; this.toggleRowExpansionAll(this.menuList, this.isExpansion); }, toggleRowExpansionAll(data, isExpansion) { data.forEach((item) =&gt; { this.$refs.dataTreeList.toggleRowExpansion(item, isExpansion); if (item.children !== undefined &amp;&amp; item.children !== null) { this.toggleRowExpansionAll(item.children, isExpansion); } }); }, },"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://elevenSevenxl.github.io/x_blog/x_blog/assets/images/cover5.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-14T07:44:03.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"elementUI树形表格全开展开与收缩"}],["meta",{"property":"article:author","content":"没有蜡笔的小新"}],["meta",{"property":"article:tag","content":"ElementUI"}],["meta",{"property":"article:published_time","content":"2023-08-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-14T07:44:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"elementUI树形表格全开展开与收缩\\",\\"image\\":[\\"https://elevenSevenxl.github.io/x_blog/x_blog/\\"],\\"datePublished\\":\\"2023-08-10T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-14T07:44:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"没有蜡笔的小新\\",\\"url\\":\\"https://elevenSevenxl.github.io/x_blog\\"}]}"]]},"headers":[{"level":3,"title":"1. 全部展开和收缩","slug":"_1-全部展开和收缩","link":"#_1-全部展开和收缩","children":[]},{"level":3,"title":"2. 页面效果","slug":"_2-页面效果","link":"#_2-页面效果","children":[]},{"level":3,"title":"3.页面代码","slug":"_3-页面代码","link":"#_3-页面代码","children":[]}],"git":{"createdTime":1691677270000,"updatedTime":1739519043000,"contributors":[{"name":"sunyxl","email":"39620856+elevenSevenxl@users.noreply.github.com","commits":2},{"name":"yxl","email":"123@qq.com","commits":1},{"name":"yxl","email":"1551536781@qq.com","commits":1}]},"readingTime":{"minutes":1.03,"words":310},"filePathRelative":"posts/ElementUI/elementUI树形表格全开展开与收缩.md","localizedDate":"2023年8月10日","excerpt":"<hr>\\n<h3> 1. 全部展开和收缩</h3>\\n<p>根据 element-ui 文档的 toggleRowExpansion<br>\\n</p>\\n<p>先在 data 里定义 isExpansion 为 false，同时 el-table 的 default-expand-all 默认全部收缩，当点击按钮，this.isExpansion 取反；</p>\\n<p>遍历得到 row 和布尔值 isExpansion，通过 ref 找到 table 执行方法 toggleRowExpansion(row, expanded)</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token literal-property property\\">methods</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 切换数据表格树形展开</span>\\n    <span class=\\"token function\\">toggleRowExpansion</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>isExpansion <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">!</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>isExpansion<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toggleRowExpansionAll</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>menuList<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>isExpansion<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token function\\">toggleRowExpansionAll</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">data<span class=\\"token punctuation\\">,</span> isExpansion</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      data<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">item</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>$refs<span class=\\"token punctuation\\">.</span>dataTreeList<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toggleRowExpansion</span><span class=\\"token punctuation\\">(</span>item<span class=\\"token punctuation\\">,</span> isExpansion<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>item<span class=\\"token punctuation\\">.</span>children <span class=\\"token operator\\">!==</span> <span class=\\"token keyword\\">undefined</span> <span class=\\"token operator\\">&amp;&amp;</span> item<span class=\\"token punctuation\\">.</span>children <span class=\\"token operator\\">!==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n          <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toggleRowExpansionAll</span><span class=\\"token punctuation\\">(</span>item<span class=\\"token punctuation\\">.</span>children<span class=\\"token punctuation\\">,</span> isExpansion<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
