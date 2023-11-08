import"./vue-c0bdf325.js";import{o as a,c as l,Q as c,b as t,a as e,a5 as n}from"./@vue-505977f7.js";const se={},ie=`<h2>TypeScript \u7C7B\u578B</h2>
<ol>
<li>top type \u9876\u7EA7\u7C7B\u578B any\u3001unknown</li>
<li>Object</li>
<li>Number\u3001String\u3001Boolean</li>
<li>number\u3001string\u3001boolean</li>
<li>123\u3001&quot;&quot;\u3001false</li>
<li>never</li>
</ol>
<blockquote>
<p>unknown \u53EA\u80FD\u8D4B\u503C\u7ED9\u81EA\u8EAB\uFF0C\u6216\u8005\u662F any \u7C7B\u578B</p>
<p>unknown \u65E0\u6CD5\u8BFB\u53D6\u4EFB\u4F55\u5C5E\u6027\uFF0C\u65B9\u6CD5\u4E5F\u4E0D\u53EF\u4EE5\u8C03\u7528</p>
<p>unknown \u6BD4 any \u5B89\u5168</p>
<p>*\u56E0\u6B64\u4E0D\u77E5\u9053\u662F\u4EC0\u4E48\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u4F18\u5148\u4F7F\u7528 unknown\uFF0C\u4ECE\u547D\u540D\u4E0A\u4E5F\u53EF\u4EE5\u77E5\u9053\u3002</p>
</blockquote>
<p>any\u7684\u95EE\u9898</p>
<ul>
<li>any \u7C7B\u578B\u8868\u793A\u653E\u5F03\u7C7B\u578B\u68C0\u67E5\uFF0C\u5B83\u5141\u8BB8\u4F60\u5728\u7F16\u5199\u4EE3\u7801\u65F6\u4F7F\u7528\u4EFB\u4F55\u503C\uFF0C\u800C\u4E0D\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\u3002</li>
<li>\u4F7F\u7528 any \u7C7B\u578B\u65F6\uFF0CTypeScript \u5C06\u4E0D\u4F1A\u63D0\u4F9B\u7C7B\u578B\u5B89\u5168\u68C0\u67E5\uFF0C\u56E0\u6B64\u4F60\u53EF\u4EE5\u5BF9\u8BE5\u53D8\u91CF\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u800C\u4E0D\u4F1A\u5F97\u5230\u7C7B\u578B\u9519\u8BEF\u3002</li>
</ul>
<p>any\u7684\u4F7F\u7528\u573A\u666F</p>
<ul>
<li>\u5728\u8FC1\u79FB\u73B0\u6709 JavaScript \u4EE3\u7801\u5230 TypeScript \u65F6\uFF0C\u4E34\u65F6\u4F7F\u7528 any \u53EF\u80FD\u4F1A\u51CF\u8F7B\u7C7B\u578B\u68C0\u67E5\u7684\u8D1F\u62C5\u3002</li>
<li>\u5904\u7406\u6765\u81EA\u52A8\u6001\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u4F8B\u5982\u901A\u8FC7\u7B2C\u4E09\u65B9\u5E93\u6216\u7528\u6237\u8F93\u5165\u3002</li>
<li>\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5F53\u4F60\u786E\u5B9E\u9700\u8981\u7ED5\u8FC7 TypeScript \u7684\u7C7B\u578B\u68C0\u67E5\u6765\u5B9E\u73B0\u67D0\u4E9B\u7279\u5B9A\u64CD\u4F5C\u65F6\u3002</li>
</ul>
<pre><code class="language-typescript">let a: unknown = 1;
let b: number = 2;

a = b;
b = a; // error: TS2322: Type unknown is not assignable to type number
</code></pre>
<h4>Object\u3001object\u3001{}\u7684\u533A\u522B</h4>
<p>1.Object \u5B9A\u4E49\u4E86 Object.prototype \u539F\u578B\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\uFF0C\u5176\u7C7B\u578B\u4E5F\u5305\u62EC\u539F\u59CB\u503C</p>
<pre><code class="language-typescript">let a1: Object = 1;
let a2: Object = '1';
let a3: Object = {a: 1, b: 2};
let a4: Object = [];
let a5: Object = Symbol();
let a6: Object = function () {};
let a7: Object = 1n; // TS2737: BigInt literals are not available when targeting lower than ES2020.
let a8: Object = null; // error
let a9: Object = undefined; // error
// *\u4F7F\u7528 Object \u7C7B\u578B\u65F6\uFF0C\u65E0\u6CD5\u8BBF\u95EE\u5BF9\u8C61\u7684\u5177\u4F53\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u56E0\u4E3A Object \u7C7B\u578B\u4EC5\u8868\u793A\u5BF9\u8C61\u7684\u62BD\u8C61\u7C7B\u578B\u3002
</code></pre>
<p>2.object \u8868\u793A\u975E\u539F\u59CB\u7C7B\u578B\u7684\u503C</p>
<pre><code class="language-typescript">let a1: object = 1; // error
let a2: object = '1'; // error
let a3: object = {};
let a4: object = [];
let a5: object = Symbol(); // error
let a6: object = function () {};
let a7: object = 1n; // error
let a8: object = null; // error
let a9: object = undefined; // error
</code></pre>
<h2>\u51FD\u6570\u91CD\u8F7D</h2>
<p>\u6E05\u6670\u8F93\u5165\u8F93\u51FA\uFF0C\u4FBF\u4E8E\u5FEB\u901F\u4E86\u89E3\u4E00\u4E2A\u51FD\u6570/\u65B9\u6CD5/\u6784\u9020\u5668\u3002</p>
<h2>\u7C7B\u578B\u65AD\u8A00</h2>
<p>\u672C\u8D28\u662F\u6B3A\u9A97ts\u7F16\u8BD1\u5668\uFF0C\u4F7F\u4EE3\u7801\u901A\u8FC7\u68C0\u67E5\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u9690\u60A3\u3002</p>
<h2>\u679A\u4E3E</h2>
<p>Q\uFF1A\u5B9A\u4E49\u679A\u4E3E\u65F6\uFF0C\u52A0 <code>const</code>\u548C\u4E0D\u52A0\u7684\u533A\u522B</p>
<p>A\uFF1A\u52A0 <code>const</code> \u4F1A\u76F4\u63A5\u7F16\u8BD1\u6210\u5E38\u91CF\uFF0C\u4E0D\u52A0\u662F\u7F16\u8BD1\u6210\u5BF9\u8C61\u3002</p>
<h2>type \u548C interface</h2>
<ol>
<li>type\u4E0D\u652F\u6301extends\uFF0C\u53EA\u80FD\u4F7F\u7528 <code>&amp;</code> \u8FDB\u884C\u4EA4\u53C9\u7C7B\u578B</li>
<li>type\u652F\u6301 <code>|</code> \u8054\u5408\u7C7B\u578B\uFF0Cinterface\u4E0D\u652F\u6301</li>
<li>interface\u7533\u660E\u65F6\u91CD\u540D\uFF0C\u4F1A\u8FDB\u884C\u5408\u5E76\uFF0Ctype\u4E0D\u4F1A</li>
</ol>
<h4>extends \u542B\u4E49</h4>
<p>ts\u4E2D\u662F\u5305\u542B\u7684\u610F\u601D\uFF0C\u8868\u793A\u4E3A:\u5DE6\u8FB9\u7684\u503C\u662F\u53F3\u8FB9\u7C7B\u578B\u7684\u5B50\u7C7B\u578B
\u4F8B\u5982 <code>type num = 1 extends Object ? 2 : 0</code></p>
<h2>never\u7C7B\u578B</h2>
<p>\u6700\u5E95\u5C42\u7C7B\u578B\uFF0C\u4E0D\u5305\u542B\u4EFB\u4F55\u7C7B\u578B</p>
<pre><code class="language-typescript">type Value = '\u5531' | '\u8DF3' | 'rap';

function Kun(value: Value) {
    switch (value) {
        case '\u5531':
            break;
        case '\u8DF3':
            break;
        case 'rap':
            break;
        default: // \u505A\u515C\u5E95
            const error:never = value;
            break;
    }
}
</code></pre>
<p>\u540E\u6765 Value\u65B0\u589E\u4E86<code>\u7BEE\u7403</code>\u7C7B\u578B</p>
<pre><code class="language-typescript">type Value = '\u5531' | '\u8DF3' | 'rap';

function Kun(value: Value) {
    switch (value) {
        case '\u5531':
            break;
        case '\u8DF3':
            break;
        case 'rap':
            break;
        default:
            const error:never = value; // TS2322: Type string is not assignable to type never
            break;
    }
}
</code></pre>
<p>\u8FD9\u6837\u5C31\u4F7F\u5F97\u8D70\u5165\u515C\u5E95\u7684\u903B\u8F91\u62A5\u9519\uFF0C\u53EF\u4EE5\u63D0\u524D\u53D1\u89C9\u3002</p>
<h2>\u6CDB\u578B\uFF08\u52A8\u6001\u7C7B\u578B\uFF09</h2>
<p>\u5B9A\u4E49\u65F6\u6682\u4E0D\u660E\u786E\u53EF\u80FD\u4F20\u9012\u4F55\u79CD\u7C7B\u578B\uFF0C\u5F53\u5F00\u53D1\u8005\u7F16\u7801\u624D\u786E\u5B9A\u7C7B\u578B\u3002
\u56E0\u6B64\u53EF\u4EE5\u79F0\u4E4B\u4E3A\u52A8\u6001\u7C7B\u578B\u3002
\u{1F330}</p>
<pre><code class="language-typescript">function add&lt;T = number, K = number&gt;(a: T, b: K): Array&lt;T | K&gt; {
    return [a, b]
}

add(1, false)
/* function add&lt;number, boolean&gt;(a: number, b: boolean): (number | boolean)[] */
</code></pre>
<p>\u{1F330}2</p>
<pre><code class="language-typescript">async function fetchData&lt;T&gt; (type: string, url: string): Promise&lt;T&gt; {
    return fetch(url, { method: type }).then(res =&gt; {
        return res.json()
    })
}

interface Data {
    message: string,
    code: number
}
fetchData&lt;Data&gt;('get', 'www.baidu.com').then(data =&gt; {
    console.log(data.code);
})
</code></pre>
<h4>\u6CDB\u578B\u7EA6\u675F</h4>
<p>\u63A7\u5236\u7C7B\u578B\u8303\u56F4\uFF0C\u4F7F\u7528 <code>extends</code> \u7EA6\u675F
\u{1F330}</p>
<pre><code class="language-typescript">function add&lt;T&gt;(a: T, b: T) {
    return a + b;
}

add(undefined, undefined) // \u4E0D\u62A5\u9519\uFF0C\u4F46\u662F\u8FD9\u79CD\u52A0\u6CD5\u51FD\u6570\u7684\u7C7B\u578B\u6807\u6CE8\u663E\u7136\u4E0D\u5408\u7406
</code></pre>
<p>\u4F7F\u7528\u7EA6\u675F\uFF0C\u6765\u907F\u514D\u8FC7\u4E8E\u7075\u6D3B</p>
<pre><code class="language-typescript">function add&lt;T extends number&gt;(a: T, b: T) {
    return a + b;
}

add(undefined, undefined)
</code></pre>
<p>\u{1F330}2</p>
<pre><code class="language-typescript">interface OBJ {
    length: number;
}
function getLen&lt;T extends OBJ&gt;(obj: T) {
    return obj.length
}

getLen('111'); // ok
getLen([1, 2, 3]); // ok
getLen(11); // error
getLen(false); // error
</code></pre>
<h2>Partial</h2>
<p>\u521B\u5EFA\u53EF\u9009\u7248\u672C\u7684\u7C7B\u578B\u3002\u5B83\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7C7B\u578B\uFF0C\u8BE5\u7C7B\u578B\u4E0E\u539F\u59CB\u7C7B\u578B\u76F8\u540C\uFF0C\u4F46\u6240\u6709\u5C5E\u6027\u90FD\u53D8\u4E3A\u53EF\u9009\u7684\u3002</p>
<pre><code class="language-typescript">type Partial&lt;T&gt; = {
    [K in keyof T]?: T[K]
}
</code></pre>
<h2>Readonly</h2>
<p>\u8981\u521B\u5EFA\u53EA\u8BFB\u7248\u672C\u7684\u7C7B\u578B\u3002\u5B83\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7C7B\u578B\uFF0C\u8BE5\u7C7B\u578B\u4E0E\u539F\u59CB\u7C7B\u578B\u76F8\u540C\uFF0C\u4F46\u6240\u6709\u5C5E\u6027\u90FD\u662F\u53EA\u8BFB\u7684\u3002</p>
<pre><code class="language-typescript">type Readonly&lt;T&gt; = {
    readonly [K in keyof T]: T[K]
}
</code></pre>
<h2>Pick</h2>
<p>\u4ECE\u7ED9\u5B9A\u7C7B\u578B\u4E2D\u9009\u62E9\u6307\u5B9A\u5C5E\u6027\u7684\u5B50\u96C6\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B\u3002</p>
<pre><code class="language-typescript">type Pick&lt;T, K extends keyof T&gt; = {
    [P in K]: T[P]
}
</code></pre>
<h2>Record</h2>
<p>\u521B\u5EFA\u4E00\u4E2A\u5177\u6709\u6307\u5B9A\u952E\u548C\u503C\u7C7B\u578B\u7684\u5BF9\u8C61\u3002</p>
<pre><code class="language-typescript">type Record&lt;T extends keyof any, K&gt; = {
    [p in T]: K
}

type Person = {
    name: string;
    age: number;
}
type U = 'A' | 'B' | 'C';
type p = Record&lt;U, Person&gt;;
let obj: p = {} // obj is: {A: Person, B: Person, C: Person}
</code></pre>
<h4>keyof any\u662F\u4EC0\u4E48</h4>
<p>\u4EE3\u8868\u4E86\u4EFB\u4F55\u53EF\u80FD\u7684\u5C5E\u6027\u540D\u6216\u952E\u7684\u7C7B\u578B\u3002\u5B9E\u9645\u4E0A\uFF0C\u5B83\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u8054\u5408\u7C7B\u578B\uFF0C\u5305\u62EC\u4E86\u4EFB\u4F55\u53EF\u80FD\u7684\u5B57\u7B26\u4E32\u952E\uFF0C
\u56E0\u4E3A\u5728 JavaScript \u4E2D\uFF0C\u5BF9\u8C61\u7684\u5C5E\u6027\u540D\u90FD\u662F<code>\u5B57\u7B26\u4E32</code>\u3002
<code>keyof any</code>\u7684\u7C7B\u578B\u662F <code>string</code>\u3001<code>number</code>\u3001<code>symbol</code></p>
<h2>infer</h2>
<p>\u7528\u4E8E\u5728\u6761\u4EF6\u7C7B\u578B\u4E2D\u63A8\u65AD\u7C7B\u578B\u53D8\u91CF\u3002\u5B83\u901A\u5E38\u4E0E\u6761\u4EF6\u7C7B\u578B\u3001\u6620\u5C04\u7C7B\u578B\u7B49\u4E00\u8D77\u4F7F\u7528\uFF0C\u4EE5\u5B9E\u73B0\u66F4\u7075\u6D3B\u7684\u7C7B\u578B\u63A8\u65AD\u548C\u8F6C\u6362\u3002</p>
<p>\u8FD9\u6837\u7684\u9700\u6C42\uFF1A\u5B9A\u4E49\u4E00\u4E2A\u7C7B\u578B\uFF0C\u5982\u679C\u662F\u6570\u7EC4\u7C7B\u578B\u5C31\u8FD4\u56DE\u6570\u7EC4\u5143\u7D20\u7684\u7C7B\u578B\uFF0C\u5426\u5219\u5C31\u662F\u4F20\u5165\u4EC0\u4E48\u7C7B\u578B\u5C31\u8FD4\u56DE\u4EC0\u4E48\u7C7B\u578B</p>
<p>\u672A\u4F7F\u7528 <code>infer</code> \u65F6</p>
<pre><code class="language-typescript">type TYPE&lt;T&gt; = T extends Array&lt;any&gt; ? T[number] : T;
type A = TYPE&lt;(string | number)[]&gt;
type B = TYPE&lt;boolean&gt;
</code></pre>
<h4>T[number] \u662F\u4EC0\u4E48\u610F\u601D</h4>
<p>\u7528\u4E8E\u83B7\u53D6\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u7C7B\u578B</p>
<pre><code class="language-typescript">const C = ['1', true]; // (string | boolean)[]
type D = typeof C[number]; // string | boolean
</code></pre>
<p>\u4F7F\u7528<code>infer</code></p>
<pre><code class="language-typescript">type TYPE&lt;T&gt; = T extends Array&lt;infer U&gt; ? U : T;
type A = TYPE&lt;(string | number)[]&gt;
type B = TYPE&lt;boolean&gt;
</code></pre>
<p>\u573A\u666F\uFF1A\u5178\u578B\u7684\u63D0\u53D6\u6570\u7EC4\u5143\u7D20\u7C7B\u578B\u4E3A\u8054\u5408\u7C7B\u578B</p>
<pre><code class="language-typescript">import {generateKeyPair} from 'crypto';

type ArrayType = [string, number];
type getArrayItemTypeUnion&lt;T&gt; = T extends Array&lt;infer U&gt; ? U : never;
type a = getArrayItemTypeUnion&lt;ArrayType&gt; // string | number
type b = getArrayItemTypeUnion&lt;boolean&gt; // never
</code></pre>
<h4>infer \u8FDB\u9636 - \u914D\u5408\u5EF6\u5C55\u64CD\u4F5C\u7B26</h4>
<p>\u63D0\u53D6\u6570\u7EC4\u7684\u6700\u540E\u4E00\u9879</p>
<pre><code class="language-typescript">type arr = ['a', 'b', 'c'];
type last&lt;T extends any[]&gt; = T extends [...any[], infer K] ? K : [];
type a = last&lt;arr&gt; // 'c'
</code></pre>
<h4>infer \u8FDB\u96362 - \u914D\u5408\u9012\u5F52</h4>
<p>\u5B9E\u73B0\u7FFB\u8F6C\u6570\u7EC4\u3002</p>
<pre><code class="language-typescript">type arr = [1, 2, 3, 4];
type ReversArr&lt;T extends any[]&gt; = T extends [infer First, ...infer Rest] ? [...ReversArr&lt;Rest&gt;, First] : T
type rArr = ReversArr&lt;arr&gt;; // [4, 3, 2, 1]
</code></pre>
`,p=t("<h2>TypeScript \u7C7B\u578B</h2><ol><li>top type \u9876\u7EA7\u7C7B\u578B any\u3001unknown</li><li>Object</li><li>Number\u3001String\u3001Boolean</li><li>number\u3001string\u3001boolean</li><li>123\u3001&quot;&quot;\u3001false</li><li>never</li></ol><blockquote><p>unknown \u53EA\u80FD\u8D4B\u503C\u7ED9\u81EA\u8EAB\uFF0C\u6216\u8005\u662F any \u7C7B\u578B</p><p>unknown \u65E0\u6CD5\u8BFB\u53D6\u4EFB\u4F55\u5C5E\u6027\uFF0C\u65B9\u6CD5\u4E5F\u4E0D\u53EF\u4EE5\u8C03\u7528</p><p>unknown \u6BD4 any \u5B89\u5168</p><p>*\u56E0\u6B64\u4E0D\u77E5\u9053\u662F\u4EC0\u4E48\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u4F18\u5148\u4F7F\u7528 unknown\uFF0C\u4ECE\u547D\u540D\u4E0A\u4E5F\u53EF\u4EE5\u77E5\u9053\u3002</p></blockquote><p>any\u7684\u95EE\u9898</p><ul><li>any \u7C7B\u578B\u8868\u793A\u653E\u5F03\u7C7B\u578B\u68C0\u67E5\uFF0C\u5B83\u5141\u8BB8\u4F60\u5728\u7F16\u5199\u4EE3\u7801\u65F6\u4F7F\u7528\u4EFB\u4F55\u503C\uFF0C\u800C\u4E0D\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\u3002</li><li>\u4F7F\u7528 any \u7C7B\u578B\u65F6\uFF0CTypeScript \u5C06\u4E0D\u4F1A\u63D0\u4F9B\u7C7B\u578B\u5B89\u5168\u68C0\u67E5\uFF0C\u56E0\u6B64\u4F60\u53EF\u4EE5\u5BF9\u8BE5\u53D8\u91CF\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u800C\u4E0D\u4F1A\u5F97\u5230\u7C7B\u578B\u9519\u8BEF\u3002</li></ul><p>any\u7684\u4F7F\u7528\u573A\u666F</p><ul><li>\u5728\u8FC1\u79FB\u73B0\u6709 JavaScript \u4EE3\u7801\u5230 TypeScript \u65F6\uFF0C\u4E34\u65F6\u4F7F\u7528 any \u53EF\u80FD\u4F1A\u51CF\u8F7B\u7C7B\u578B\u68C0\u67E5\u7684\u8D1F\u62C5\u3002</li><li>\u5904\u7406\u6765\u81EA\u52A8\u6001\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u4F8B\u5982\u901A\u8FC7\u7B2C\u4E09\u65B9\u5E93\u6216\u7528\u6237\u8F93\u5165\u3002</li><li>\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5F53\u4F60\u786E\u5B9E\u9700\u8981\u7ED5\u8FC7 TypeScript \u7684\u7C7B\u578B\u68C0\u67E5\u6765\u5B9E\u73B0\u67D0\u4E9B\u7279\u5B9A\u64CD\u4F5C\u65F6\u3002</li></ul>",7),s=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`let a: unknown = 1;
let b: number = 2;

a = b;
b = a; // error: TS2322: Type unknown is not assignable to type number
`)],-1),i=e("h4",null,"Object\u3001object\u3001{}\u7684\u533A\u522B",-1),d=e("p",null,"1.Object \u5B9A\u4E49\u4E86 Object.prototype \u539F\u578B\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\uFF0C\u5176\u7C7B\u578B\u4E5F\u5305\u62EC\u539F\u59CB\u503C",-1),u=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`let a1: Object = 1;
let a2: Object = '1';
let a3: Object = {a: 1, b: 2};
let a4: Object = [];
let a5: Object = Symbol();
let a6: Object = function () {};
let a7: Object = 1n; // TS2737: BigInt literals are not available when targeting lower than ES2020.
let a8: Object = null; // error
let a9: Object = undefined; // error
// *\u4F7F\u7528 Object \u7C7B\u578B\u65F6\uFF0C\u65E0\u6CD5\u8BBF\u95EE\u5BF9\u8C61\u7684\u5177\u4F53\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u56E0\u4E3A Object \u7C7B\u578B\u4EC5\u8868\u793A\u5BF9\u8C61\u7684\u62BD\u8C61\u7C7B\u578B\u3002
`)],-1),y=e("p",null,"2.object \u8868\u793A\u975E\u539F\u59CB\u7C7B\u578B\u7684\u503C",-1),b=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`let a1: object = 1; // error
let a2: object = '1'; // error
let a3: object = {};
let a4: object = [];
let a5: object = Symbol(); // error
let a6: object = function () {};
let a7: object = 1n; // error
let a8: object = null; // error
let a9: object = undefined; // error
`)],-1),g=t("<h2>\u51FD\u6570\u91CD\u8F7D</h2><p>\u6E05\u6670\u8F93\u5165\u8F93\u51FA\uFF0C\u4FBF\u4E8E\u5FEB\u901F\u4E86\u89E3\u4E00\u4E2A\u51FD\u6570/\u65B9\u6CD5/\u6784\u9020\u5668\u3002</p><h2>\u7C7B\u578B\u65AD\u8A00</h2><p>\u672C\u8D28\u662F\u6B3A\u9A97ts\u7F16\u8BD1\u5668\uFF0C\u4F7F\u4EE3\u7801\u901A\u8FC7\u68C0\u67E5\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u9690\u60A3\u3002</p><h2>\u679A\u4E3E</h2><p>Q\uFF1A\u5B9A\u4E49\u679A\u4E3E\u65F6\uFF0C\u52A0 <code>const</code>\u548C\u4E0D\u52A0\u7684\u533A\u522B</p><p>A\uFF1A\u52A0 <code>const</code> \u4F1A\u76F4\u63A5\u7F16\u8BD1\u6210\u5E38\u91CF\uFF0C\u4E0D\u52A0\u662F\u7F16\u8BD1\u6210\u5BF9\u8C61\u3002</p><h2>type \u548C interface</h2><ol><li>type\u4E0D\u652F\u6301extends\uFF0C\u53EA\u80FD\u4F7F\u7528 <code>&amp;</code> \u8FDB\u884C\u4EA4\u53C9\u7C7B\u578B</li><li>type\u652F\u6301 <code>|</code> \u8054\u5408\u7C7B\u578B\uFF0Cinterface\u4E0D\u652F\u6301</li><li>interface\u7533\u660E\u65F6\u91CD\u540D\uFF0C\u4F1A\u8FDB\u884C\u5408\u5E76\uFF0Ctype\u4E0D\u4F1A</li></ol><h4>extends \u542B\u4E49</h4><p>ts\u4E2D\u662F\u5305\u542B\u7684\u610F\u601D\uFF0C\u8868\u793A\u4E3A:\u5DE6\u8FB9\u7684\u503C\u662F\u53F3\u8FB9\u7C7B\u578B\u7684\u5B50\u7C7B\u578B \u4F8B\u5982 <code>type num = 1 extends Object ? 2 : 0</code></p><h2>never\u7C7B\u578B</h2><p>\u6700\u5E95\u5C42\u7C7B\u578B\uFF0C\u4E0D\u5305\u542B\u4EFB\u4F55\u7C7B\u578B</p>",13),h=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`type Value = '\u5531' | '\u8DF3' | 'rap';

function Kun(value: Value) {
    switch (value) {
        case '\u5531':
            break;
        case '\u8DF3':
            break;
        case 'rap':
            break;
        default: // \u505A\u515C\u5E95
            const error:never = value;
            break;
    }
}
`)],-1),T=e("p",null,[n("\u540E\u6765 Value\u65B0\u589E\u4E86"),e("code",null,"\u7BEE\u7403"),n("\u7C7B\u578B")],-1),_=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`type Value = '\u5531' | '\u8DF3' | 'rap';

function Kun(value: Value) {
    switch (value) {
        case '\u5531':
            break;
        case '\u8DF3':
            break;
        case 'rap':
            break;
        default:
            const error:never = value; // TS2322: Type string is not assignable to type never
            break;
    }
}
`)],-1),f=e("p",null,"\u8FD9\u6837\u5C31\u4F7F\u5F97\u8D70\u5165\u515C\u5E95\u7684\u903B\u8F91\u62A5\u9519\uFF0C\u53EF\u4EE5\u63D0\u524D\u53D1\u89C9\u3002",-1),m=e("h2",null,"\u6CDB\u578B\uFF08\u52A8\u6001\u7C7B\u578B\uFF09",-1),j=e("p",null,"\u5B9A\u4E49\u65F6\u6682\u4E0D\u660E\u786E\u53EF\u80FD\u4F20\u9012\u4F55\u79CD\u7C7B\u578B\uFF0C\u5F53\u5F00\u53D1\u8005\u7F16\u7801\u624D\u786E\u5B9A\u7C7B\u578B\u3002 \u56E0\u6B64\u53EF\u4EE5\u79F0\u4E4B\u4E3A\u52A8\u6001\u7C7B\u578B\u3002 \u{1F330}",-1),v=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`function add<T = number, K = number>(a: T, b: K): Array<T | K> {
    return [a, b]
}

add(1, false)
/* function add<number, boolean>(a: number, b: boolean): (number | boolean)[] */
`)],-1),k=e("p",null,"\u{1F330}2",-1),P=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`async function fetchData<T> (type: string, url: string): Promise<T> {
    return fetch(url, { method: type }).then(res => {
        return res.json()
    })
}

interface Data {
    message: string,
    code: number
}
fetchData<Data>('get', 'www.baidu.com').then(data => {
    console.log(data.code);
})
`)],-1),A=e("h4",null,"\u6CDB\u578B\u7EA6\u675F",-1),O=e("p",null,[n("\u63A7\u5236\u7C7B\u578B\u8303\u56F4\uFF0C\u4F7F\u7528 "),e("code",null,"extends"),n(" \u7EA6\u675F \u{1F330}")],-1),x=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`function add<T>(a: T, b: T) {
    return a + b;
}

add(undefined, undefined) // \u4E0D\u62A5\u9519\uFF0C\u4F46\u662F\u8FD9\u79CD\u52A0\u6CD5\u51FD\u6570\u7684\u7C7B\u578B\u6807\u6CE8\u663E\u7136\u4E0D\u5408\u7406
`)],-1),K=e("p",null,"\u4F7F\u7528\u7EA6\u675F\uFF0C\u6765\u907F\u514D\u8FC7\u4E8E\u7075\u6D3B",-1),w=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`function add<T extends number>(a: T, b: T) {
    return a + b;
}

add(undefined, undefined)
`)],-1),S=e("p",null,"\u{1F330}2",-1),R=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`interface OBJ {
    length: number;
}
function getLen<T extends OBJ>(obj: T) {
    return obj.length
}

getLen('111'); // ok
getLen([1, 2, 3]); // ok
getLen(11); // error
getLen(false); // error
`)],-1),B=e("h2",null,"Partial",-1),U=e("p",null,"\u521B\u5EFA\u53EF\u9009\u7248\u672C\u7684\u7C7B\u578B\u3002\u5B83\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7C7B\u578B\uFF0C\u8BE5\u7C7B\u578B\u4E0E\u539F\u59CB\u7C7B\u578B\u76F8\u540C\uFF0C\u4F46\u6240\u6709\u5C5E\u6027\u90FD\u53D8\u4E3A\u53EF\u9009\u7684\u3002",-1),E=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`type Partial<T> = {
    [K in keyof T]?: T[K]
}
`)],-1),V=e("h2",null,"Readonly",-1),Y=e("p",null,"\u8981\u521B\u5EFA\u53EA\u8BFB\u7248\u672C\u7684\u7C7B\u578B\u3002\u5B83\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7C7B\u578B\uFF0C\u8BE5\u7C7B\u578B\u4E0E\u539F\u59CB\u7C7B\u578B\u76F8\u540C\uFF0C\u4F46\u6240\u6709\u5C5E\u6027\u90FD\u662F\u53EA\u8BFB\u7684\u3002",-1),D=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`type Readonly<T> = {
    readonly [K in keyof T]: T[K]
}
`)],-1),C=e("h2",null,"Pick",-1),L=e("p",null,"\u4ECE\u7ED9\u5B9A\u7C7B\u578B\u4E2D\u9009\u62E9\u6307\u5B9A\u5C5E\u6027\u7684\u5B50\u96C6\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B\u3002",-1),I=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
}
`)],-1),q=e("h2",null,"Record",-1),J=e("p",null,"\u521B\u5EFA\u4E00\u4E2A\u5177\u6709\u6307\u5B9A\u952E\u548C\u503C\u7C7B\u578B\u7684\u5BF9\u8C61\u3002",-1),F=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`type Record<T extends keyof any, K> = {
    [p in T]: K
}

type Person = {
    name: string;
    age: number;
}
type U = 'A' | 'B' | 'C';
type p = Record<U, Person>;
let obj: p = {} // obj is: {A: Person, B: Person, C: Person}
`)],-1),N=t("<h4>keyof any\u662F\u4EC0\u4E48</h4><p>\u4EE3\u8868\u4E86\u4EFB\u4F55\u53EF\u80FD\u7684\u5C5E\u6027\u540D\u6216\u952E\u7684\u7C7B\u578B\u3002\u5B9E\u9645\u4E0A\uFF0C\u5B83\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u8054\u5408\u7C7B\u578B\uFF0C\u5305\u62EC\u4E86\u4EFB\u4F55\u53EF\u80FD\u7684\u5B57\u7B26\u4E32\u952E\uFF0C \u56E0\u4E3A\u5728 JavaScript \u4E2D\uFF0C\u5BF9\u8C61\u7684\u5C5E\u6027\u540D\u90FD\u662F<code>\u5B57\u7B26\u4E32</code>\u3002 <code>keyof any</code>\u7684\u7C7B\u578B\u662F <code>string</code>\u3001<code>number</code>\u3001<code>symbol</code></p><h2>infer</h2><p>\u7528\u4E8E\u5728\u6761\u4EF6\u7C7B\u578B\u4E2D\u63A8\u65AD\u7C7B\u578B\u53D8\u91CF\u3002\u5B83\u901A\u5E38\u4E0E\u6761\u4EF6\u7C7B\u578B\u3001\u6620\u5C04\u7C7B\u578B\u7B49\u4E00\u8D77\u4F7F\u7528\uFF0C\u4EE5\u5B9E\u73B0\u66F4\u7075\u6D3B\u7684\u7C7B\u578B\u63A8\u65AD\u548C\u8F6C\u6362\u3002</p><p>\u8FD9\u6837\u7684\u9700\u6C42\uFF1A\u5B9A\u4E49\u4E00\u4E2A\u7C7B\u578B\uFF0C\u5982\u679C\u662F\u6570\u7EC4\u7C7B\u578B\u5C31\u8FD4\u56DE\u6570\u7EC4\u5143\u7D20\u7684\u7C7B\u578B\uFF0C\u5426\u5219\u5C31\u662F\u4F20\u5165\u4EC0\u4E48\u7C7B\u578B\u5C31\u8FD4\u56DE\u4EC0\u4E48\u7C7B\u578B</p><p>\u672A\u4F7F\u7528 <code>infer</code> \u65F6</p>",6),Q=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`type TYPE<T> = T extends Array<any> ? T[number] : T;
type A = TYPE<(string | number)[]>
type B = TYPE<boolean>
`)],-1),W=e("h4",null,"T[number] \u662F\u4EC0\u4E48\u610F\u601D",-1),z=e("p",null,"\u7528\u4E8E\u83B7\u53D6\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u7C7B\u578B",-1),G=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`const C = ['1', true]; // (string | boolean)[]
type D = typeof C[number]; // string | boolean
`)],-1),H=e("p",null,[n("\u4F7F\u7528"),e("code",null,"infer")],-1),M=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`type TYPE<T> = T extends Array<infer U> ? U : T;
type A = TYPE<(string | number)[]>
type B = TYPE<boolean>
`)],-1),X=e("p",null,"\u573A\u666F\uFF1A\u5178\u578B\u7684\u63D0\u53D6\u6570\u7EC4\u5143\u7D20\u7C7B\u578B\u4E3A\u8054\u5408\u7C7B\u578B",-1),Z=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`import {generateKeyPair} from 'crypto';

type ArrayType = [string, number];
type getArrayItemTypeUnion<T> = T extends Array<infer U> ? U : never;
type a = getArrayItemTypeUnion<ArrayType> // string | number
type b = getArrayItemTypeUnion<boolean> // never
`)],-1),$=e("h4",null,"infer \u8FDB\u9636 - \u914D\u5408\u5EF6\u5C55\u64CD\u4F5C\u7B26",-1),ee=e("p",null,"\u63D0\u53D6\u6570\u7EC4\u7684\u6700\u540E\u4E00\u9879",-1),ne=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`type arr = ['a', 'b', 'c'];
type last<T extends any[]> = T extends [...any[], infer K] ? K : [];
type a = last<arr> // 'c'
`)],-1),te=e("h4",null,"infer \u8FDB\u96362 - \u914D\u5408\u9012\u5F52",-1),re=e("p",null,"\u5B9E\u73B0\u7FFB\u8F6C\u6570\u7EC4\u3002",-1),oe=e("pre",null,[e("code",{class:"language-typescript","v-pre":"true"},`type arr = [1, 2, 3, 4];
type ReversArr<T extends any[]> = T extends [infer First, ...infer Rest] ? [...ReversArr<Rest>, First] : T
type rArr = ReversArr<arr>; // [4, 3, 2, 1]
`)],-1);function o(r,le){return a(),l(c,null,[p,s,i,d,u,y,b,g,h,T,_,f,m,j,v,k,P,A,O,x,K,w,S,R,B,U,E,V,Y,D,C,L,I,q,J,F,N,Q,W,z,G,H,M,X,Z,$,ee,ne,te,re,oe],64)}const ae={render:o};ae.__hmrId="/Users/xianchenxy/Documents/Blog/posts/post/core_typescript.md";const de=r=>({components:r,render:o});export{ae as VueComponent,de as VueComponentWith,se as attributes,ie as html};
