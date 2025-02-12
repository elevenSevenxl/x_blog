import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-bb0dd3f0.js";const e={},p=t(`<hr><h3 id="什么是-less" tabindex="-1"><a class="header-anchor" href="#什么是-less" aria-hidden="true">#</a> 什么是 less</h3><p>Less （Leaner Style Sheets 的缩写） 是一门向后兼容的 CSS 扩展语言。sass 和 less 一样都是 css 预处理器。</p><p>在 vite 中使用 less | sass</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token function">less</span>  <span class="token parameter variable">-D</span> 安装即可

<span class="token function">npm</span> <span class="token function">install</span> sass <span class="token parameter variable">-D</span> 安装即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 style 标签注明即可</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;style lang=<span class="token string">&quot;less&quot;</span>&gt;

&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;style lang=<span class="token string">&quot;scss&quot;</span>&gt;

&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="什么是-scoped" tabindex="-1"><a class="header-anchor" href="#什么是-scoped" aria-hidden="true">#</a> 什么是 scoped</h3><p>实现组件的私有化, 当前 style 属性只属于当前模块.</p><p>在 DOM 结构中可以发现,vue 通过在 DOM 结构以及 css 样式上加了唯一标记,达到样式私有化,不污染全局的作用,</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;style scoped lang=<span class="token string">&quot;scss&quot;</span>&gt;

&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bem-架构" tabindex="-1"><a class="header-anchor" href="#bem-架构" aria-hidden="true">#</a> bem 架构</h3><p>bem 架构是一种 css 架构 oocss 实现的一种 （面向对象 css） ，BEM 实际上是 block、element、modifier 的缩写，分别为块层、元素层、修饰符层，element UI 也使用的是这种架构</p><p>BEM 命名约定的模式是：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">.</span>block <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token punctuation">.</span>block__element <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token punctuation">.</span>block<span class="token operator">--</span>modifier <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 使用sass 最小单元复刻一个bem 架构</span>

$block<span class="token operator">-</span>sel<span class="token operator">:</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
$element<span class="token operator">-</span>sel<span class="token operator">:</span> <span class="token string">&quot;__&quot;</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
$modifier<span class="token operator">-</span>sel<span class="token operator">:</span> <span class="token string">&quot;--&quot;</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
$namespace<span class="token operator">:</span><span class="token string">&#39;xl&#39;</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">mixin</span></span> bfc <span class="token punctuation">{</span>
    height<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    overflow<span class="token operator">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//混入</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">mixin</span></span> <span class="token function">b</span><span class="token punctuation">(</span>$block<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   $<span class="token constant">B</span><span class="token operator">:</span> $namespace <span class="token operator">+</span> $block<span class="token operator">-</span>sel <span class="token operator">+</span> $block<span class="token punctuation">;</span> <span class="token comment">//变量</span>
   <span class="token punctuation">.</span>#<span class="token punctuation">{</span>$<span class="token constant">B</span><span class="token punctuation">}</span><span class="token punctuation">{</span> <span class="token comment">//插值语法#{}</span>
     <span class="token decorator"><span class="token at operator">@</span><span class="token function">content</span></span><span class="token punctuation">;</span> <span class="token comment">//内容替换</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">mixin</span></span> flex <span class="token punctuation">{</span>
    display<span class="token operator">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">mixin</span></span> <span class="token function">e</span><span class="token punctuation">(</span>$element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    $selector<span class="token operator">:</span><span class="token operator">&amp;</span><span class="token punctuation">;</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">at</span></span><span class="token operator">-</span>root <span class="token punctuation">{</span>
        #<span class="token punctuation">{</span>$selector <span class="token operator">+</span> $element<span class="token operator">-</span>sel <span class="token operator">+</span> $element<span class="token punctuation">}</span> <span class="token punctuation">{</span>
            <span class="token decorator"><span class="token at operator">@</span><span class="token function">content</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">mixin</span></span> <span class="token function">m</span><span class="token punctuation">(</span>$modifier<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    $selector<span class="token operator">:</span><span class="token operator">&amp;</span><span class="token punctuation">;</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">at</span></span><span class="token operator">-</span>root <span class="token punctuation">{</span>
        #<span class="token punctuation">{</span>$selector <span class="token operator">+</span> $modifier<span class="token operator">-</span>sel <span class="token operator">+</span> $modifier<span class="token punctuation">}</span> <span class="token punctuation">{</span>
            <span class="token decorator"><span class="token at operator">@</span><span class="token function">content</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局扩充 sass</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        additionalData<span class="token operator">:</span> <span class="token string">&quot;@import &#39;./src/bem.scss&#39;;&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue 组件用法</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xl-wraps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xl-wraps__right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Header</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Content</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Menu <span class="token keyword">from</span> <span class="token string">&#39;./Menu/index.vue&#39;</span>
<span class="token keyword">import</span> Content <span class="token keyword">from</span> <span class="token string">&#39;./Content/index.vue&#39;</span>
<span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">&#39;./Header/index.vue&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@include</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token string">&#39;wraps&#39;</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@include</span> bfc<span class="token punctuation">;</span></span>
  <span class="token atrule"><span class="token rule">@include</span> flex<span class="token punctuation">;</span></span>
  <span class="token atrule"><span class="token rule">@include</span> <span class="token function">e</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,21),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","BEM介绍与使用.html.vue"]]);export{d as default};
