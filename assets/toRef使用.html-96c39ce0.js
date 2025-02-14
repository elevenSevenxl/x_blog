const e=JSON.parse(`{"key":"v-4aee09e6","path":"/vue/toRef%E4%BD%BF%E7%94%A8.html","title":"toRef使用","lang":"zh-CN","frontmatter":{"title":"toRef使用","cover":"/assets/images/cover16.jpg","isTimeLine":true,"date":"2023-08-31T00:00:00.000Z","footer":"<a href=\\"https://icp.gov.moe/?keyword=20255521\\" target=\\"_blank\\">萌 ICP 备 20255521 号</a>","copyright":"Copyright © 2025 没有蜡笔的小新","category":["前端"],"tag":["vue3"],"description":"// toRef 只能修改响应式对象的值， 非响应式视图没有用 // 非响应式对象经过 toRef 改变之后的变化, toRef 接收两个参数，第一个参数是对象，第二个参数是属性名 &lt;script setup lang=\\"ts\\"&gt; import { toRef, toRefs, reactive, toRaw } from 'vue' // toRef 只能修改响应式对象的值， 非响应式视图没有用 // 非响应式对象经过toRef改变之后的变化, toRef接收两个参数，第一个参数是对象，第二个参数是属性名 const people = { name: '张三', age: 18, } const name = toRef(people, 'name') const change = () =&gt; { name.value = '王五' console.log(people); // {name: '王五', age: 18} } &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://elevenSevenxl.github.io/x_blog/x_blog/vue/toRef%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"木兮blog"}],["meta",{"property":"og:title","content":"toRef使用"}],["meta",{"property":"og:description","content":"// toRef 只能修改响应式对象的值， 非响应式视图没有用 // 非响应式对象经过 toRef 改变之后的变化, toRef 接收两个参数，第一个参数是对象，第二个参数是属性名 &lt;script setup lang=\\"ts\\"&gt; import { toRef, toRefs, reactive, toRaw } from 'vue' // toRef 只能修改响应式对象的值， 非响应式视图没有用 // 非响应式对象经过toRef改变之后的变化, toRef接收两个参数，第一个参数是对象，第二个参数是属性名 const people = { name: '张三', age: 18, } const name = toRef(people, 'name') const change = () =&gt; { name.value = '王五' console.log(people); // {name: '王五', age: 18} } &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://elevenSevenxl.github.io/x_blog/x_blog/assets/images/cover16.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-14T07:44:03.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"toRef使用"}],["meta",{"property":"article:author","content":"没有蜡笔的小新"}],["meta",{"property":"article:tag","content":"vue3"}],["meta",{"property":"article:published_time","content":"2023-08-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-14T07:44:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"toRef使用\\",\\"image\\":[\\"https://elevenSevenxl.github.io/x_blog/x_blog/assets/images/cover16.jpg\\"],\\"datePublished\\":\\"2023-08-31T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-14T07:44:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"没有蜡笔的小新\\",\\"url\\":\\"https://elevenSevenxl.github.io/x_blog\\"}]}"]]},"headers":[{"level":2,"title":"useDemo(toRef(people, 'name'))","slug":"usedemo-toref-people-name","link":"#usedemo-toref-people-name","children":[]}],"git":{"createdTime":1693489405000,"updatedTime":1739519043000,"contributors":[{"name":"yxl","email":"123@qq.com","commits":1},{"name":"yxl","email":"1551536781@qq.com","commits":1}]},"readingTime":{"minutes":1.42,"words":426},"filePathRelative":"vue/toRef使用.md","localizedDate":"2023年8月31日","excerpt":"<hr>\\n<blockquote>\\n<p>// toRef 只能修改响应式对象的值， 非响应式视图没有用</p>\\n<p>// 非响应式对象经过 toRef 改变之后的变化, toRef 接收两个参数，第一个参数是对象，第二个参数是属性名</p>\\n</blockquote>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token operator\\">&lt;</span>script setup lang<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"ts\\"</span><span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> toRef<span class=\\"token punctuation\\">,</span> toRefs<span class=\\"token punctuation\\">,</span> reactive<span class=\\"token punctuation\\">,</span> toRaw <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'vue'</span>\\n<span class=\\"token comment\\">// toRef 只能修改响应式对象的值， 非响应式视图没有用</span>\\n<span class=\\"token comment\\">// 非响应式对象经过toRef改变之后的变化, toRef接收两个参数，第一个参数是对象，第二个参数是属性名</span>\\n<span class=\\"token keyword\\">const</span> people <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'张三'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">age</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">18</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">const</span> name <span class=\\"token operator\\">=</span> <span class=\\"token function\\">toRef</span><span class=\\"token punctuation\\">(</span>people<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'name'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">change</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  name<span class=\\"token punctuation\\">.</span>value <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'王五'</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>people<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// {name: '王五', age: 18}</span>\\n\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>script<span class=\\"token operator\\">&gt;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
