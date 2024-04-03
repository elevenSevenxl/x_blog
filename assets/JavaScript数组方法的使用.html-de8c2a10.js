const e=JSON.parse('{"key":"v-7505d787","path":"/posts/javascript/JavaScript%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"JavaScript数组方法的使用","lang":"zh-CN","frontmatter":{"title":"JavaScript数组方法的使用","cover":"/assets/images/cover23.png","isTimeLine":true,"date":"2023-09-13T00:00:00.000Z","footer":"<a href=\\"https://icp.gov.moe/?keyword=20231319\\" target=\\"_blank\\">萌 ICP 备 20231319 号</a>","copyright":"Copyright © 2023 没有蜡笔的小新","category":["javascript"],"tag":["javascript"],"description":"引言： JavaScript 中的数组是一种非常常见和重要的数据结构，它提供了许多强大的方法用于对数组进行操作和处理。本文将介绍一些常用的 JavaScript 数组方法。 1. push()和pop()方法： push()方法用于向数组末尾添加一个或多个元素，并返回新数组的长度。 pop()方法用于从数组末尾删除最后一个元素，并返回被删除的元素。 const array = [1, 2, 3] array.push(4) // [1, 2, 3, 4] array.pop() // 3","head":[["meta",{"property":"og:url","content":"https://elevenSevenxl.github.io/x_blog/posts/javascript/JavaScript%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95%E7%9A%84%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"木兮blog"}],["meta",{"property":"og:title","content":"JavaScript数组方法的使用"}],["meta",{"property":"og:description","content":"引言： JavaScript 中的数组是一种非常常见和重要的数据结构，它提供了许多强大的方法用于对数组进行操作和处理。本文将介绍一些常用的 JavaScript 数组方法。 1. push()和pop()方法： push()方法用于向数组末尾添加一个或多个元素，并返回新数组的长度。 pop()方法用于从数组末尾删除最后一个元素，并返回被删除的元素。 const array = [1, 2, 3] array.push(4) // [1, 2, 3, 4] array.pop() // 3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://elevenSevenxl.github.io/x_blog/assets/images/cover23.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-22T05:42:06.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"JavaScript数组方法的使用"}],["meta",{"property":"article:author","content":"没有蜡笔的小新"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:published_time","content":"2023-09-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-22T05:42:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript数组方法的使用\\",\\"image\\":[\\"https://elevenSevenxl.github.io/x_blog/assets/images/cover23.png\\"],\\"datePublished\\":\\"2023-09-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-22T05:42:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"没有蜡笔的小新\\",\\"url\\":\\"https://elevenSevenxl.github.io/x_blog\\"}]}"]]},"headers":[{"level":3,"title":"1. push()和pop()方法：","slug":"_1-push-和pop-方法","link":"#_1-push-和pop-方法","children":[]},{"level":3,"title":"2. shift()和unshift()方法：","slug":"_2-shift-和unshift-方法","link":"#_2-shift-和unshift-方法","children":[]},{"level":3,"title":"3. concat()方法：","slug":"_3-concat-方法","link":"#_3-concat-方法","children":[]},{"level":3,"title":"4. slice()方法：","slug":"_4-slice-方法","link":"#_4-slice-方法","children":[]},{"level":3,"title":"5. splice()方法：","slug":"_5-splice-方法","link":"#_5-splice-方法","children":[]},{"level":3,"title":"6. forEach()方法：","slug":"_6-foreach-方法","link":"#_6-foreach-方法","children":[]},{"level":3,"title":"7. map()方法：","slug":"_7-map-方法","link":"#_7-map-方法","children":[]},{"level":3,"title":"8. filter()方法：","slug":"_8-filter-方法","link":"#_8-filter-方法","children":[]},{"level":3,"title":"9. reduce()方法：","slug":"_9-reduce-方法","link":"#_9-reduce-方法","children":[]}],"git":{"createdTime":1695361326000,"updatedTime":1695361326000,"contributors":[{"name":"yxl","email":"123@qq.com","commits":1}]},"readingTime":{"minutes":2.31,"words":694},"filePathRelative":"posts/javascript/JavaScript数组方法的使用.md","localizedDate":"2023年9月13日","excerpt":"<hr>\\n<p>引言： JavaScript 中的数组是一种非常常见和重要的数据结构，它提供了许多强大的方法用于对数组进行操作和处理。本文将介绍一些常用的 JavaScript 数组方法。</p>\\n<h3> 1. <code>push()</code>和<code>pop()</code>方法：</h3>\\n<ul>\\n<li>\\n<p><code>push()</code>方法用于向数组末尾添加一个或多个元素，并返回新数组的长度。</p>\\n</li>\\n<li>\\n<p><code>pop()</code>方法用于从数组末尾删除最后一个元素，并返回被删除的元素。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> array <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span>\\n\\narray<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// [1, 2, 3, 4]</span>\\narray<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 3</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","autoDesc":true}');export{e as data};
