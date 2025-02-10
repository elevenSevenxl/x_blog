import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as e}from"./app-de73a03b.js";const t={},p=e(`<hr><h1 id="vue3-definemodel-双向绑定-告别繁琐代码" tabindex="-1"><a class="header-anchor" href="#vue3-definemodel-双向绑定-告别繁琐代码" aria-hidden="true">#</a> Vue3 defineModel 双向绑定：告别繁琐代码！</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>随着<code>vue3.4</code>版本的发布，<code>defineModel</code>也正式转正了。它可以简化父子组件之间的双向绑定，是目前官方推荐的双向绑定实现方式。</p><h2 id="vue3-4以前如何实现双向绑定" tabindex="-1"><a class="header-anchor" href="#vue3-4以前如何实现双向绑定" aria-hidden="true">#</a> <code>vue3.4</code>以前如何实现双向绑定</h2><p>大家应该都知道<code>v-model</code>只是一个语法糖，实际就是给组件定义了<code>modelValue</code>属性和监听<code>update:modelValue</code>事件，所以我们以前要实现数据双向绑定需要给子组件定义一个<code>modelValue</code>属性，并且在子组件内要更新<code>modelValue</code>值时需要<code>emit</code>出去一个<code>update:modelValue</code>事件，将新的值作为第二个字段传出去。</p><p>我们来看一个简单的例子，父组件的代码如下：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CommonInput</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputValue<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> inputValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件的代码如下：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>props.modelValue<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>emit(&#39;update:modelValue&#39;, $event.target.value)<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;modelValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子大家应该很熟悉，以前都是这样去实现<code>v-model</code>双向绑定的。但是存在一个问题就是<code>input</code>输入框其实支持直接使用<code>v-model</code>的，我们这里却没有使用<code>v-model</code>而是在<code>input</code>输入框上面添加<code>value</code>属性和<code>input</code>事件。</p><p>原因是因为从<code>vue2</code>开始就已经是单向数据流，在子组件中是不能直接修改<code>props</code>中的值。而是应该由子组件中抛出一个事件，由父组件去监听这个事件，然后去修改父组件中传递给<code>props</code>的变量。如果这里我们给<code>input</code>输入框直接加一个<code>v-model=&quot;props.modelValue&quot;</code>，那么其实是在子组件内直接修改<code>props</code>中的<code>modelValue</code>。由于单向数据流的原因，<code>vue</code>是不支持直接修改<code>props</code>的，所以我们才需要将代码写成上面的样子。</p><h2 id="使用definemodel实现数据双向绑定" tabindex="-1"><a class="header-anchor" href="#使用definemodel实现数据双向绑定" aria-hidden="true">#</a> 使用<code>defineModel</code>实现数据双向绑定</h2><p><code>defineModel</code>是一个宏，所以不需要从 vue 中<code>import</code>导入，直接使用就可以了。这个宏可以用来声明一个双向绑定 prop，通过父组件的 <code>v-model</code> 来使用。</p><h3 id="基础-demo" tabindex="-1"><a class="header-anchor" href="#基础-demo" aria-hidden="true">#</a> 基础 demo</h3><p>父组件的代码和前面是一样的，如下：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CommonInput</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputValue<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> inputValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件的代码如下：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>model<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token function">defineModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
model<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;xxx&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中我们直接将<code>defineModel</code>的返回值使用<code>v-model</code>绑定到 input 输入框上面，无需定义 <code>modelValue</code> 属性和监听 <code>update:modelValue</code> 事件，代码更加简洁。<code>defineModel</code>的返回值是一个<code>ref</code>，我们可以在子组件中修改<code>model</code>变量的值，并且父组件中的<code>inputValue</code>变量的值也会同步更新，这样就可以实现双向绑定。</p><p>那么问题来了，从<code>vue2</code>开始就变成了单向数据流。这里修改子组件的值后，父组件的变量值也被修改了，那这不就变回了<code>vue1</code>的双向数据流了吗？其实并不是这样的，这里还是单向数据流，我们接下来会简单讲一下<code>defineModel</code>的实现原理。</p><h3 id="实现原理" tabindex="-1"><a class="header-anchor" href="#实现原理" aria-hidden="true">#</a> 实现原理</h3><p><code>defineModel</code>其实就是在子组件内定义了一个叫<code>model</code>的 ref 变量和<code>modelValue</code>的 props，并且<code>watch</code>了 props 中的<code>modelValue</code>。当<code>props</code>中的<code>modelValue</code>的值改变后会同步更新<code>model</code>变量的值。并且当在子组件内改变<code>model</code>变量的值后会抛出<code>update:modelValue</code>事件，父组件收到这个事件后就会更新父组件中对应的变量值。</p><p>实现原理代码如下：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>model<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;modelValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>modelValue<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    model<span class="token punctuation">.</span>value <span class="token operator">=</span> props<span class="token punctuation">.</span>modelValue
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>model<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">,</span> model<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看了上面的代码后你应该了解到了为什么可以在子组件内直接修改<code>defineModel</code>的返回值后父组件对应的变量也会同步更新了吧。我们修改的其实是<code>defineModel</code>返回的<code>ref</code>变量，而不是直接修改 props 中的<code>modelValue</code>。实现方式还是和<code>vue3.4</code>以前实现双向绑定一样的，只是<code>defineModel</code>这个宏帮我们将以前的那些繁琐的代码给封装到内部实现了。</p><p>其实<code>defineModel</code>的源码中是使用 customRef 和 watchSyncEffect 去实现的，我这里是为了让大家能够更容易的明白<code>defineModel</code>的实现原理才举的<code>ref</code>和<code>watch</code>的例子。如果大家对<code>defineModel</code>的源码感兴趣，请在评论区留言，如果感兴趣的小伙伴比较多，我会在下一期出一篇<code>defineModel</code>源码的文章。</p><h2 id="definemodel如何定义type、default等" tabindex="-1"><a class="header-anchor" href="#definemodel如何定义type、default等" aria-hidden="true">#</a> <code>defineModel</code>如何定义<code>type</code>、<code>default</code>等</h2><p>既然<code>defineModel</code>是声明了一个 prop，那同样也可以定义 prop 的<code>type</code>、<code>default</code>。具体代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token function">defineModel</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;20&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>除了支持<code>type</code>和<code>default</code>，也支持<code>required</code>和<code>validator</code>，用法和定义<code>prop</code>时一样。</p><h2 id="definemodel如何实现多个-v-model-绑定" tabindex="-1"><a class="header-anchor" href="#definemodel如何实现多个-v-model-绑定" aria-hidden="true">#</a> <code>defineModel</code>如何实现多个 <code>v-model</code> 绑定</h2><p>同样也支持在父组件上面实现多个 <code>v-model</code> 绑定，这时我们给<code>defineModel</code>传的第一个参数就不是对象了，而是一个字符串。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> model1 <span class="token operator">=</span> <span class="token function">defineModel</span><span class="token punctuation">(</span><span class="token string">&#39;count1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> model2 <span class="token operator">=</span> <span class="token function">defineModel</span><span class="token punctuation">(</span><span class="token string">&#39;count2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在父组件中使用<code>v-model</code>时代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>CommonInput v<span class="token operator">-</span>model<span class="token operator">:</span>count1<span class="token operator">=</span><span class="token string">&quot;inputValue1&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>CommonInput v<span class="token operator">-</span>model<span class="token operator">:</span>count2<span class="token operator">=</span><span class="token string">&quot;inputValue2&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也可以在多个<code>v-model</code>中定义<code>type</code>、<code>default</code>等</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> model1 <span class="token operator">=</span> <span class="token function">defineModel</span><span class="token punctuation">(</span><span class="token string">&#39;count1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;aaa&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="definemodel如何使用内置修饰符和自定义修饰符" tabindex="-1"><a class="header-anchor" href="#definemodel如何使用内置修饰符和自定义修饰符" aria-hidden="true">#</a> <code>defineModel</code>如何使用内置修饰符和自定义修饰符</h2><p>如果要使用系统内置的修饰符比如<code>trim</code>，父组件的写法还是和之前是一样的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>CommonInput v<span class="token operator">-</span>model<span class="token punctuation">.</span>trim<span class="token operator">=</span><span class="token string">&quot;inputValue&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>子组件也无需做任何修改，和上面其他的<code>defineModel</code>例子是一样的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token function">defineModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>defineModel</code>也支持自定义修饰符，比如我们要实现一个将输入框的字母全部变成大写的<code>uppercase</code>自定义修饰符，同时也需要使用内置的<code>trim</code>修饰符。</p><p>我们的父组件代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>CommonInput v<span class="token operator">-</span>model<span class="token punctuation">.</span>trim<span class="token punctuation">.</span>uppercase<span class="token operator">=</span><span class="token string">&quot;inputValue&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们的子组件需要写成下面这样的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;modelValue&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>modelValue<span class="token punctuation">,</span> modelModifiers<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">defineModel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// get我们这里不需要</span>
  <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>modelModifiers<span class="token punctuation">.</span>uppercase<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> value<span class="token operator">?.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时我们给<code>defineModel</code>传进去的第一个参数就是包含<code>get</code> 和 <code>set</code> 方法的对象，当对<code>modelValue</code>变量进行读操作时会走到<code>get</code>方法里面去，当对<code>modelValue</code>变量进行写操作时会走到<code>set</code>方法里面去。如果只需要对写操作进行拦截，那么可以不用写<code>get</code>。</p><p><code>defineModel</code>的返回值也可以解构成两个变量，第一个变量就是我们前面几个例子的<code>ref</code>对象，用于给<code>v-model</code>绑定。第二个变量是一个对象，里面包含了有哪些修饰符，在这里我们有<code>trim</code>和<code>uppercase</code>两个修饰符，所以<code>modelModifiers</code>的值为：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">trim</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">uppercase</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在输入框进行输入时，就会走到<code>set</code>方法里面，然后调用<code>value?.toUpperCase()</code>就可以实现将输入的字母变成大写字母。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>这篇文章介绍了如何使用<code>defineModel</code>宏实现双向绑定以及<code>defineModel</code>的实现原理。</p><ul><li>在子组件内调用<code>defineModel</code>宏会返回一个<code>ref</code>对象，在子组件内可以直接对这个<code>ref</code>对象进行赋值，父组件内的相应变量也会同步修改。</li><li><code>defineModel</code>其实就是在子组件内定义了一个 ref 变量和对应的 prop，然后监听了对应的 prop 保持 ref 变量的值始终和对应的 prop 是一样的。在子组件内当修改 ref 变量值时会抛出一个事件给父组件，让父组件更新对应的变量值，从而实现双向绑定。</li><li>使用<code>defineModel({ type: String, default: &quot;20&quot; })</code>就可以定义 prop 的<code>type</code>和<code>default</code>等选项。</li><li>使用<code>defineModel(&quot;count&quot;)</code>就可以实现多个<code>v-model</code>绑定。</li><li>通过解构 <code>defineModel()</code> 的返回值拿到<code>modelModifiers</code>修饰符对象，配合 <code>get</code> 和 <code>set</code> 转换器选项实现自定义修饰符。</li></ul>`,55),o=[p];function c(l,d){return a(),s("div",null,o)}const r=n(t,[["render",c],["__file","vue3 defineModel的使用.html.vue"]]);export{r as default};
