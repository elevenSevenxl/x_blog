const t=JSON.parse(`{"key":"v-9b02699a","path":"/posts/Echarts/ECHARTSX%E8%BD%B4NAME%E5%80%BC%E6%98%BE%E7%A4%BA%E4%B8%8D%E5%85%A8%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.html","title":"ECHARTSX轴NAME值显示不全解决方法","lang":"zh-CN","frontmatter":{"title":"ECHARTSX轴NAME值显示不全解决方法","cover":"/assets/images/cover6.jpg","isTimeLine":true,"date":"2023-08-15T00:00:00.000Z","footer":"<a href=\\"https://icp.gov.moe/?keyword=20231319\\" target=\\"_blank\\">萌 ICP 备 20231319 号</a>","copyright":"Copyright © 2023 没有蜡笔的小新","category":["Echarts"],"tag":["Echarts"],"description":"1. X 轴刻度显示不完整,如图所示 2. 解决方法，调整 gird 的 left、right 值 let option = { ... grid: { left: '3%', right: '10%', bottom: '3%', top: '8%', containLabel: true } ... }","head":[["meta",{"property":"og:url","content":"https://elevenSevenxl.github.io/study_blog/posts/Echarts/ECHARTSX%E8%BD%B4NAME%E5%80%BC%E6%98%BE%E7%A4%BA%E4%B8%8D%E5%85%A8%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"没有蜡笔的小新"}],["meta",{"property":"og:title","content":"ECHARTSX轴NAME值显示不全解决方法"}],["meta",{"property":"og:description","content":"1. X 轴刻度显示不完整,如图所示 2. 解决方法，调整 gird 的 left、right 值 let option = { ... grid: { left: '3%', right: '10%', bottom: '3%', top: '8%', containLabel: true } ... }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://elevenSevenxl.github.io/study_blog/assets/images/cover6.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T14:43:10.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"ECHARTSX轴NAME值显示不全解决方法"}],["meta",{"property":"article:author","content":"没有蜡笔的小新"}],["meta",{"property":"article:tag","content":"Echarts"}],["meta",{"property":"article:published_time","content":"2023-08-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T14:43:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ECHARTSX轴NAME值显示不全解决方法\\",\\"image\\":[\\"https://elevenSevenxl.github.io/study_blog/\\"],\\"datePublished\\":\\"2023-08-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-15T14:43:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"没有蜡笔的小新\\",\\"url\\":\\"https://elevenSevenxl.github.io/study_blog\\"}]}"]]},"headers":[{"level":3,"title":"1. X 轴刻度显示不完整,如图所示","slug":"_1-x-轴刻度显示不完整-如图所示","link":"#_1-x-轴刻度显示不完整-如图所示","children":[]},{"level":3,"title":"2. 解决方法，调整 gird 的 left、right 值","slug":"_2-解决方法-调整-gird-的-left、right-值","link":"#_2-解决方法-调整-gird-的-left、right-值","children":[]}],"git":{"createdTime":1692110590000,"updatedTime":1692110590000,"contributors":[{"name":"yxl","email":"1551536781@qq.com","commits":1}]},"readingTime":{"minutes":0.33,"words":99},"filePathRelative":"posts/Echarts/ECHARTSX轴NAME值显示不全解决方法.md","localizedDate":"2023年8月15日","excerpt":"<hr>\\n<h3> 1. X 轴刻度显示不完整,如图所示</h3>\\n<figure><figcaption></figcaption></figure>\\n<h3> 2. 解决方法，调整 gird 的 left、right 值</h3>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">let</span> option <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token operator\\">...</span>\\n    <span class=\\"token literal-property property\\">grid</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token literal-property property\\">left</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'3%'</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">right</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'10%'</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">bottom</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'3%'</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">top</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'8%'</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">containLabel</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token operator\\">...</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
