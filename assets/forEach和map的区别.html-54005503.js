import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as a}from"./app-4c526e8b.js";const d={},l=a(`<blockquote><p><code>map</code>会返回一个新的数组，而<code>forEach</code>不会</p></blockquote><p>forEach 和 map 都是 JavaScript 中用于遍历数组的函数，但它们的用法和返回值有所不同。</p><h3 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> forEach</h3><ol><li>forEach 没有返回值，总是返回 <code>undefined</code>。</li><li>除非抛出异常，否则没有办法停止或中断 <code>forEach()</code> 循环。如果有这样的需求，则不应该使用 <code>forEach()</code> 方法。</li></ol><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const arr = [1, 2, 3, 4, 5];
let sum = 0
arr.forEach((element) =&gt; {
	console.log(element * 2);
});

// 输出：2, 4, 6, 8, 10

arr.forEach((element) =&gt; {
	if(element === 3) {
		return  // 跳出当次循环3不在累加
	}
	sum += element
});
console.log(sum); // 12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3><p>map 是 JavaScript 数组的一个内置方法，它接受一个回调函数作为参数，并返回一个新数组。回调函数会在数组的每个元素上调用，并将元素的值作为参数传递给回调函数，然后将回调函数的返回值作为新数组的对应元素。map 不会修改原始数组，而是创建一个新数组。</p><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(function(element) {
return element * 2;
});
console.log(newArr);
// 输出：[2, 4, 6, 8, 10]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),r=[l];function c(s,t){return n(),i("div",null,r)}const v=e(d,[["render",c],["__file","forEach和map的区别.html.vue"]]);export{v as default};
