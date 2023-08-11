import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as t}from"./app-0c5d52ef.js";const p="/assets/content3-25f1ed49.png",e="/assets/content1-78d3cebd.png",o="/assets/content2-090906f4.png",c={},l=t('<hr><h3 id="_1-全部展开和收缩" tabindex="-1"><a class="header-anchor" href="#_1-全部展开和收缩" aria-hidden="true">#</a> 1. 全部展开和收缩</h3><p>根据 element-ui 文档的 toggleRowExpansion<br><img src="'+p+`" alt="" loading="lazy"></p><p>先在 data 里定义 isExpansion 为 false，同时 el-table 的 default-expand-all 默认全部收缩，当点击按钮，this.isExpansion 取反；</p><p>遍历得到 row 和布尔值 isExpansion，通过 ref 找到 table 执行方法 toggleRowExpansion(row, expanded)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 切换数据表格树形展开</span>
    <span class="token function">toggleRowExpansion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>isExpansion <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isExpansion<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">toggleRowExpansionAll</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>menuList<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isExpansion<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">toggleRowExpansionAll</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> isExpansion</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>dataTreeList<span class="token punctuation">.</span><span class="token function">toggleRowExpansion</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> isExpansion<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>children <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">toggleRowExpansionAll</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">,</span> isExpansion<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-页面效果" tabindex="-1"><a class="header-anchor" href="#_2-页面效果" aria-hidden="true">#</a> 2. 页面效果</h3><figure><img src="`+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-页面代码" tabindex="-1"><a class="header-anchor" href="#_3-页面代码" aria-hidden="true">#</a> 3.页面代码</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table</span>
  <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataTreeList<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:header-cell-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ background: &#39;#ebf8f8&#39; }<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuList<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">row-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">border</span>
  <span class="token attr-name">:default-expand-all</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isExpansion<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:tree-props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ children: &#39;children&#39;, hasChildren: &#39;hasChildren&#39; }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>菜单名称<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>code<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>菜单编码<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>seq<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>菜单序号<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>270<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>操作<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{row}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleDialog(row, &#39;add&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          添加
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleDialog(row, &#39;edit&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          编辑
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>remove(row)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          删除
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,12),u=[l];function i(k,r){return a(),s("div",null,u)}const m=n(c,[["render",i],["__file","elementUI树形表格全开展开与收缩.html.vue"]]);export{m as default};
