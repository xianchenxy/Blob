import"./vue-126afe2a.js";import{o,c as s,S as c,a as n}from"./@vue-268a4df7.js";const f={},R=`<h1>1.\u57FA\u7840\u8BA4\u8BC6</h1>
<p>Reflect\uFF08\u53CD\u5C04\uFF09\uFF1A\u672C\u8D28\u662F\u8C03\u7528\u5BF9\u8C61\u7684\u57FA\u672C\u65B9\u6CD5\u3002
\u57FA\u672C\u65B9\u6CD5\uFF1Amdn link
ES6\u65B0\u589E\u7684\uFF0C\u5F00\u653E\u4E86\u5BF9\u5916\u66B4\u9732\u7684\uFF0C\u5BF9\u8C61\u4E0A\u7684\u57FA\u672C\u65B9\u6CD5\u3002
ES6\u4E4B\u524D\u4E0D\u80FD\u76F4\u63A5\u8C03\u7528\uFF0C\u53EA\u80FD\u4ECE\u5176\u4ED6\u65B9\u5F0F\uFF0C\u5982</p>
<pre><code class="language-js">// \u8BBE\u7F6E\u5C5E\u6027\u503C
const obj = {};
obj.a = 3;
</code></pre>
<p>\u4E0A\u9762\u{1F446}\u{1F3FB}\u5BF9\u5E94\u4E8E\u89E6\u53D1[[Set]]\u57FA\u672C\u65B9\u6CD5</p>
<pre><code class="language-js">Reflect.set(obj, 'a', 3);
</code></pre>
<h1>2.Reflect\u610F\u4E49\u4F55\u5728</h1>
<blockquote>
<p>\u5F53\u6211\u4EEC\u5199\u4E00\u6BB5\u8BED\u6CD5\u65F6\uFF0C\u5E76\u975E\u76F4\u63A5\u8C03\u7528\uFF0C\u800C\u662F\u53BB\u6267\u884C\u4E00\u4E2A\u88AB\u5C01\u88C5\u8FC7\u540E\u7684\u65B9\u6CD5\uFF0C\u5728\u8FD9\u4E2A\u88AB\u5C01\u88C5\u8FC7\u540E\u7684\u65B9\u6CD5\u91CC\uFF0C\u8C03\u7528\u4E86\u57FA\u672C\u65B9\u6CD5\u3002
\u56E0\u6B64\u6211\u4EEC\u5728\u4F7F\u7528\u8BED\u6CD5\u7684\u65F6\u5019\uFF0C\u5B83\u8FD8\u505A\u4E86\u4E9B\u989D\u5916\u7684\u4E8B\u60C5</p>
</blockquote>
<pre><code class="language-js">const obj = {
	a: 1,
    b: 2,
    get c() {
		return this.a + this.b;
    }
};

console.log(obj.c); // 3
</code></pre>
<p>\u7565...\u89C1\u6296\u97F3TC\u76EE\u5F55</p>
`,l=n("h1",null,"1.\u57FA\u7840\u8BA4\u8BC6",-1),a=n("p",null,"Reflect\uFF08\u53CD\u5C04\uFF09\uFF1A\u672C\u8D28\u662F\u8C03\u7528\u5BF9\u8C61\u7684\u57FA\u672C\u65B9\u6CD5\u3002 \u57FA\u672C\u65B9\u6CD5\uFF1Amdn link ES6\u65B0\u589E\u7684\uFF0C\u5F00\u653E\u4E86\u5BF9\u5916\u66B4\u9732\u7684\uFF0C\u5BF9\u8C61\u4E0A\u7684\u57FA\u672C\u65B9\u6CD5\u3002 ES6\u4E4B\u524D\u4E0D\u80FD\u76F4\u63A5\u8C03\u7528\uFF0C\u53EA\u80FD\u4ECE\u5176\u4ED6\u65B9\u5F0F\uFF0C\u5982",-1),r=n("pre",null,[n("code",{class:"language-js","v-pre":"true"},`// \u8BBE\u7F6E\u5C5E\u6027\u503C
const obj = {};
obj.a = 3;
`)],-1),p=n("p",null,"\u4E0A\u9762\u{1F446}\u{1F3FB}\u5BF9\u5E94\u4E8E\u89E6\u53D1[[Set]]\u57FA\u672C\u65B9\u6CD5",-1),u=n("pre",null,[n("code",{class:"language-js","v-pre":"true"},`Reflect.set(obj, 'a', 3);
`)],-1),d=n("h1",null,"2.Reflect\u610F\u4E49\u4F55\u5728",-1),h=n("blockquote",null,[n("p",null,"\u5F53\u6211\u4EEC\u5199\u4E00\u6BB5\u8BED\u6CD5\u65F6\uFF0C\u5E76\u975E\u76F4\u63A5\u8C03\u7528\uFF0C\u800C\u662F\u53BB\u6267\u884C\u4E00\u4E2A\u88AB\u5C01\u88C5\u8FC7\u540E\u7684\u65B9\u6CD5\uFF0C\u5728\u8FD9\u4E2A\u88AB\u5C01\u88C5\u8FC7\u540E\u7684\u65B9\u6CD5\u91CC\uFF0C\u8C03\u7528\u4E86\u57FA\u672C\u65B9\u6CD5\u3002 \u56E0\u6B64\u6211\u4EEC\u5728\u4F7F\u7528\u8BED\u6CD5\u7684\u65F6\u5019\uFF0C\u5B83\u8FD8\u505A\u4E86\u4E9B\u989D\u5916\u7684\u4E8B\u60C5")],-1),_=n("pre",null,[n("code",{class:"language-js","v-pre":"true"},`const obj = {
	a: 1,
    b: 2,
    get c() {
		return this.a + this.b;
    }
};

console.log(obj.c); // 3
`)],-1),i=n("p",null,"\u7565...\u89C1\u6296\u97F3TC\u76EE\u5F55",-1);function t(e,g){return o(),s(c,null,[l,a,r,p,u,d,h,_,i],64)}const b={render:t};b.__hmrId="/Users/xianchenxy/Documents/Blog/posts/post/What's_Reflect/What's_Reflect.md";const k=e=>({components:e,render:t});export{b as VueComponent,k as VueComponentWith,f as attributes,R as html};
