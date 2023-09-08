import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-9ab65593.js";const p="/assets/content1-912019bb.png",e={},o=t('<hr><h4 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h4><blockquote><p>斜角标签是前端<code>toC</code>开发常见的场景，其效果图大概如下：</p></blockquote><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_2-思路" tabindex="-1"><a class="header-anchor" href="#_2-思路" aria-hidden="true">#</a> 2.思路</h4><p>主要在卡片的盒子内新建一个长条的标签盒子，通过定位的方式调整位置，然后再通过变形<code>transform: rotate(45deg)</code>，旋转 45 度角，超出卡片盒子的部分设置<code>overflow:hidden</code>;</p><h4 id="_3-代码" tabindex="-1"><a class="header-anchor" href="#_3-代码" aria-hidden="true">#</a> 3.代码</h4><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>核查完成<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.card</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> // 隐藏标签的超出部分
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.tag</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> // 文本居中
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> // 绝对定位
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    // 以下属性会影响斜边标签的显示
    <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 76%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-info line-numbers-mode" data-ext="info"><pre class="language-info"><code>    这里要注意，旋转的中心默认是以中心旋转，这会导致转45度会出现显示不全、显示不出文本等情况，而修改transform-origin也是没用的，无论它以哪个点，只旋转的话都是会显示不全的；
所以需要调节其位置，配合width，让其出现在合理的位置，最好是根据父元素的大小来决定其位置和大小，这样即使父元素大小不确定也能正确出现在角落.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,10),c=[o];function i(l,u){return s(),a("div",null,c)}const k=n(e,[["render",i],["__file","css-斜角标签.html.vue"]]);export{k as default};
