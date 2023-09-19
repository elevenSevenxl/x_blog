import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-972eeff6.js";const e={},p=t(`<hr><h2 id="根据文件结构自动生成-router-js" tabindex="-1"><a class="header-anchor" href="#根据文件结构自动生成-router-js" aria-hidden="true">#</a> 根据文件结构自动生成 router.js</h2><h3 id="读取-views-目录下的-vue-文件动态生成路由" tabindex="-1"><a class="header-anchor" href="#读取-views-目录下的-vue-文件动态生成路由" aria-hidden="true">#</a> 读取 views 目录下的.vue 文件动态生成路由</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> readline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;readline&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> os <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;os&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vueDir <span class="token operator">=</span> <span class="token string">&#39;./src/views/&#39;</span>

fs<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span>vueDir<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> files</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> routers <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>index<span class="token punctuation">,</span> fileName<span class="token punctuation">]</span> <span class="token keyword">of</span> files<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;zzzzzzzzz&#39;</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fileName<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> ext<span class="token punctuation">]</span> <span class="token operator">=</span> fileName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ext <span class="token operator">!==</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// let routerName = null</span>
    <span class="token comment">// const contentFull = fs.readFileSync(\`\${vueDir}\${fileName}\`, &#39;utf-8&#39;)</span>
    <span class="token comment">// - Windows 使用 \\r\\n</span>
    <span class="token comment">// - Linux/Unix 使用 \\n</span>
    <span class="token comment">// - Mac OS 使用 \\r</span>
    <span class="token comment">// os.EOL 将会根据当前的操作系统,返回对应行结束符的表示</span>
    <span class="token comment">// var match = /\\&lt;\\!\\-\\-\\s*(.*)\\s*\\-\\-\\&gt;/g.exec(contentFull.split(os.EOL)[0])</span>
    <span class="token comment">// console.log(&#39;ccc&#39;, match)</span>
    <span class="token comment">// if (match) {</span>
    <span class="token comment">//   routerName = match[1].trim()</span>
    <span class="token comment">// }</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;qqqqqqq&#39;</span><span class="token punctuation">,</span> os<span class="token punctuation">)</span>
    routers <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">  { \\n\\t\\t</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name <span class="token operator">?</span> <span class="token string">&quot;name: &#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;&#39;,\\n\\t\\t&quot;</span><span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">path: &#39;/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name <span class="token operator">===</span> <span class="token string">&#39;root&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;&#39;</span> <span class="token operator">:</span> name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;,\\n\\t\\tcomponent: () =&gt; import(/* webpackChunkName: &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39; */ &#39;@/views/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fileName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;)\\n\\t}</span><span class="token template-punctuation string">\`</span></span>
    <span class="token comment">// 如果不是最后一个路由添加则添加换行和，</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!==</span> files<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      routers <span class="token operator">+=</span> <span class="token string">&#39;,\\n&#39;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;------------&#39;</span><span class="token punctuation">,</span> routers<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">// 该文件由gen-router.js自动生成，请勿手动修改
import VueRouter from &#39;vue-router&#39;
import Vue from &#39;vue&#39;

Vue.use(VueRouter)
const routes = [
</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>routers<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
];

const router = new VueRouter({
  mode: &#39;hash&#39;,
  routes
})
export default router

</span><span class="token template-punctuation string">\`</span></span>
  <span class="token comment">// console.log(result);</span>
  fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&#39;./src/router.js&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err
    <span class="token comment">// 如果没有错误</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;./src/router.js 生成成功！&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建一个-vue2-项目的-demo-在-package-json-文件中配置" tabindex="-1"><a class="header-anchor" href="#新建一个-vue2-项目的-demo-在-package-json-文件中配置" aria-hidden="true">#</a> 新建一个 vue2 项目的 demo，在 package.json 文件中配置</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node gen-router.js &amp;&amp; vue-cli-service serve&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node gen-router.js &amp;&amp; vue-cli-service build&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;genmenu&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node gen-router.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;svgo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;svgo -f src/assets/icons/svg --config=src/assets/icons/svgo.config.js&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行-npm-run-dev-生成文件如下" tabindex="-1"><a class="header-anchor" href="#执行-npm-run-dev-生成文件如下" aria-hidden="true">#</a> 执行 <code>npm run dev</code> ，生成文件如下</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 该文件由gen-router.js自动生成，请勿手动修改</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;AboutView&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/AboutView&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;AboutView&#39; */</span> <span class="token string">&#39;@/views/AboutView.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;HomeView&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/HomeView&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;HomeView&#39; */</span> <span class="token string">&#39;@/views/HomeView.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;hash&#39;</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,9),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","根据文件结构自动生成router.html.vue"]]);export{k as default};
