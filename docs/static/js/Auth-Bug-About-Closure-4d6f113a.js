import"./vue-126afe2a.js";import{o as c,c as r,S as s,a as t,a3 as e}from"./@vue-268a4df7.js";const f={},g=`<p>// Q: How to modify the <code>obj</code> without modifying the source code?</p>
<pre><code class="language-js">const o = (function () {
	const obj = {
		a: 1,
		b: 2
	};

	return function (k) {
		return obj[k];
	};
})();
</code></pre>
<p>// A: Using the <code>prototype</code> and <code>Object.defineProperty</code>, See</p>
<pre><code class="language-js">
Object.defineProperty(Object.prototype, 'abc', {
	get: function() {
		return this;
	}
});
</code></pre>
`,u=t("p",null,[e("// Q: How to modify the "),t("code",null,"obj"),e(" without modifying the source code?")],-1),d=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`const o = (function () {
	const obj = {
		a: 1,
		b: 2
	};

	return function (k) {
		return obj[k];
	};
})();
`)],-1),p=t("p",null,[e("// A: Using the "),t("code",null,"prototype"),e(" and "),t("code",null,"Object.defineProperty"),e(", See")],-1),a=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`
Object.defineProperty(Object.prototype, 'abc', {
	get: function() {
		return this;
	}
});
`)],-1);function o(n,l){return c(),r(s,null,[u,d,p,a],64)}const i={render:o};i.__hmrId="/Users/xianchenxy/Documents/Blob/posts/post/Auth-Bug-About-Closure.md";const j=n=>({components:n,render:o});export{i as VueComponent,j as VueComponentWith,f as attributes,g as html};
