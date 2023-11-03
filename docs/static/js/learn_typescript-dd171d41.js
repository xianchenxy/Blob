import"./vue-c0bdf325.js";import{o,c as t,Q as r,a as n}from"./@vue-505977f7.js";const m={},y=`<ol>
<li>top type \u9876\u7EA7\u7C7B\u578B any\u3001unknown</li>
<li>Object</li>
<li>Number\u3001String\u3001Boolean</li>
<li>number\u3001string\u3001boolean</li>
<li>123\u3001''\u3001false</li>
<li>never</li>
</ol>
<blockquote>
<p>unknown\u53EA\u80FD\u8D4B\u503C\u7ED9\u81EA\u8EAB\uFF0C\u6216\u8005\u662Fany\u7C7B\u578B</p>
</blockquote>
<pre><code class="language-typescript">let a: unknown = 1;
let b: number = 2;

a = b;
b = a; // error: TS2322: Type unknown is not assignable to type number
</code></pre>
`,u=n("ol",null,[n("li",null,"top type \u9876\u7EA7\u7C7B\u578B any\u3001unknown"),n("li",null,"Object"),n("li",null,"Number\u3001String\u3001Boolean"),n("li",null,"number\u3001string\u3001boolean"),n("li",null,"123\u3001''\u3001false"),n("li",null,"never")],-1),a=n("blockquote",null,[n("p",null,"unknown\u53EA\u80FD\u8D4B\u503C\u7ED9\u81EA\u8EAB\uFF0C\u6216\u8005\u662Fany\u7C7B\u578B")],-1),s=n("pre",null,[n("code",{class:"language-typescript","v-pre":"true"},`let a: unknown = 1;
let b: number = 2;

a = b;
b = a; // error: TS2322: Type unknown is not assignable to type number
`)],-1);function l(e,c){return o(),t(r,null,[u,a,s],64)}const i={render:l};i.__hmrId="/Users/xianchenxy/Documents/Blog/posts/post/learn_typescript.md";const k=e=>({components:e,render:l});export{i as VueComponent,k as VueComponentWith,m as attributes,y as html};
