import"./vue-126afe2a.js";import{o as r,c as a,S as s,a as n,a3 as t}from"./@vue-268a4df7.js";const S={},w=`<h2>1. \u8FED\u4EE3\u5668\u6A21\u5F0F\u662F\u4EC0\u4E48</h2>
<p>\u672C\u8D28\u662F\u4E00\u4E2A\u5FAA\u73AF\u8BED\u53E5\uFF0C\u4F9D\u5E8F\u5730\u8BBF\u95EE\u805A\u5408\u5BF9\u8C61\u7684\u6BCF\u4E00\u5143\u7D20\u3002</p>
<h3>1.1 \u7C7B\u522B</h3>
<p>\u5206\u4E3A\u4E24\u79CD\uFF0C\u5185\u90E8\u8FED\u4EE3\u5668\u548C\u5916\u90E8\u8FED\u4EE3\u5668\u3002</p>
<p>\u5185\u90E8\u8FED\u4EE3\u5668: \u8FED\u4EE3\u89C4\u5219\u4E0D\u53EF\u53D8\uFF0C\u4E0D\u53EF\u4E2D\u6B62\uFF0C\u7075\u6D3B\u6027\u5F88\u4F4E\u3002
\u5916\u90E8\u8FED\u4EE3\u5668: \u589E\u5F3A\u4E86\u7075\u6D3B\u6027\uFF0C\u53EF\u4EE5\u624B\u52A8\u63A7\u5236\u8FED\u4EE3\u7684\u89C4\u5219\uFF08\u53EF\u4E2D\u6B62\uFF09\uFF0C\u589E\u52A0\u4E86\u8C03\u7528\u590D\u6742\u5EA6\u3002</p>
<h2>2. \u5982\u4F55\u53BB\u7406\u89E3</h2>
<p>\u5185\u90E8\u8FED\u4EE3\u5668:
\u5C01\u95ED\u4E86\u8FED\u4EE3\u8FC7\u7A0B
\u4EE3\u8868\u662F<code>for...of</code>\u548CJQuery\u7684<code>$.each</code></p>
<pre><code class="language-javascript">$.each(['Vue', 'React', 'Angular'], function(index, value) {
     console.log([index, value]);
});
// [0, Vue]  [1, React]  [2, Angular]
</code></pre>
<pre><code class="language-javascript">const arr = ['a', 'b', 'c']
for (let k of arr) {
    console.log(k)
}
  // 'a' 'b' 'c'
</code></pre>
<p>\u5916\u90E8\u8FED\u4EE3\u5668:</p>
<p>\u5FC5\u987B\u663E\u793A\u5730\u8FED\u4EE3\u4E0B\u4E00\u4E2A\u3002
\u4EE3\u8868\u662F ES6 \u7684<code>yield</code>\u3002</p>
<pre><code class="language-javascript">function* generatorEach(arr) {
   for (let [index, value] of arr.entries()) {
     yield console.log([index, value]);
   }
}

let each = generatorEach(['Angular', 'React', 'Vue']);
each.next(); // [0, 'Angular']
each.next(); // [1, 'React']
each.next(); // [2, 'Vue']  
</code></pre>
<h2>3. \u5982\u4F55\u53BB\u4F7F\u7528</h2>
<p>\u5C06\u7CFB\u5217\u6563\u70B9\u96C6\u5408\u6210\u53EF\u88AB\u8FED\u4EE3\u7684\u5BF9\u8C61/\u6570\u7EC4\uFF0C</p>
<h2>4. \u4E3E\u4E2A\u6817\u5B50</h2>
<p>\u8FED\u4EE3\u5668\u6A21\u5F0F\u7684\u6838\u5FC3\uFF0C\u5C31\u662F<strong>\u5B9E\u73B0\u7EDF\u4E00\u904D\u5386\u63A5\u53E3</strong>\u3002</p>
<p>\u9700\u6C42: \u6BD4\u5BF9\u4E24\u4E2A\u6570\u7EC4\u662F\u5426\u5B8C\u5168\u76F8\u7B49\u3002</p>
<pre><code class="language-javascript">// \u5B9E\u73B0\u4E00\u4E2A\u5916\u90E8\u8FED\u4EE3\u5668
const Iterator = function (arr) {
     let current = 0
     
     const next = function () {
         current += 1
     }
     
     const isDone = function () {
         return current = arr.length
     }
     
     const getCurrItem = function () {
         return arr[current]
     }
     
     return {
         next,
         isDone,
         getCurrItem,
         length: arr.length
     }
}

const compare = function (iterator1, iterator2) {
     if (iterator1.length !== iterator2.length) {
         return false
     }
     
     while(!iterator1.isDone() &amp;&amp; !iterator2.isDone()) {
         if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
             return false
         }
         iterator1.next()
         iterator2.next()
     }
     
     return true
}
const iterator1 = Iterator([2, 2, 3])
const iterator2 = Iterator([1, 2, 3])
compare(iterator1, iterator2) // false
</code></pre>
<h2>5. \u5F00\u53D1\u5B9E\u8DF5</h2>
<pre><code class="language-js">function noDataTip() {
    // -1\u8349\u7A3F 0\u5F85\u67E5\u8BE2 1\u67E5\u8BE2\u4E2D 2\u67E5\u8BE2\u6210\u529F 3\u67E5\u8BE2\u5931\u8D25 4\u67E5\u8BE2\u5DF2\u53D6\u6D88
    const tiplist = [
        {
            key: 'noAuth',
            condition: !this.hasAuth, // \u5C55\u793A\u6761\u4EF6
            tip: '\u4E8B\u4EF6\u6743\u9650\u53D8\u66F4\uFF0C\u6570\u636E\u5DF2\u88AB\u6E05\u7A7A\uFF01'
        },
        {
            key: 'noQuery',
            condition: [-1, 1, 0].some(status=status === this.status), // \u5C55\u793A\u6761\u4EF6
            tip: '\u9009\u62E9\u4E8B\u4EF6\u8FDB\u884C\u67E5\u8BE2\uFF5E'
        },
        {
            key: 'cancelQuery',
            condition: this.status === 4, // \u5C55\u793A\u6761\u4EF6
            tip: '\u67E5\u8BE2\u5DF2\u53D6\u6D88'
        },
        {
            key: 'noData',
            condition: this.status === 2,
            tip: '\u5F53\u524D\u67E5\u8BE2\u65E0\u6570\u636E'
        },
        {
            key: 'failure',
            condition: this.status === 3,
            tip: '\u67E5\u8BE2\u5931\u8D25'
        }
    ];

    return tiplist.find(item =&gt; item.condition);
}
</code></pre>
<p>\u8FED\u4EE3\u5668\u6A21\u5F0F\u4F18\u5316:</p>
<pre><code class="language-javascript">const AuthInfo = {
    true: {
        key: 'noAuth',
        tip: '\u4E8B\u4EF6\u6743\u9650\u53D8\u66F4\uFF0C\u6570\u636E\u5DF2\u88AB\u6E05\u7A7A\uFF01'
	},
    0: { // status === -1, 1, 0
        key: 'noQuery',
        tip: '\u9009\u62E9\u4E8B\u4EF6\u8FDB\u884C\u67E5\u8BE2~'
    },
    1: { // status === 4
        key: 'cancelQuery',
        tip: '\u67E5\u8BE2\u5DF2\u53D6\u6D88'
    },
    2: { // status === 2
        key: 'noData',
        tip: '\u5F53\u524D\u67E5\u8BE2\u65E0\u6570\u636E'
    },
    3: { // status === 3
        key: 'failure',
        tip: '\u67E5\u8BE2\u5931\u8D25'
    }
}

function noDataTip () {
    const noAuthInfo = AuthInfo[!this.hasAuth];
    if (noAuthInfo) return AuthInfo[noAuthInfo];

    // \u501F\u52A9\u4E8C\u7EF4\u6570\u7EC4\u7684\u7684\u65B9\u5F0F\u7EDF\u4E00\u904D\u5386\u6761\u4EF6
    const hasAuthIndex = [[-1, 1, 0], [4], [2], [3]].findIndex(v =&gt; v.includes(this.status)))
    return AuthInfo[hasAuthIndex];
}
</code></pre>
<h2>6. \u8BC4\u4EF7</h2>
<p>\u53EF\u4EE5\u6D88\u9664\u591A if\u8BED\u53E5\uFF0C\u4F46\u4EC5\u9002\u7528\u4E8E\u201C\u540C\u7C7B\u201D\u95EE\u9898\uFF0C\u6BCF\u4E2A\u5224\u65AD\u4E2D\u7684\u903B\u8F91\u76F8\u4F3C\u6216\u8005\u53EF\u4EE5\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u8FDB\u884C\u7EA6\u675F\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u5728\u8FED\u4EE3\u8FC7\u7A0B\u4E2D\u5305\u542B\u4E86\u989D\u5916\u7684\u6761\u4EF6\u5224\u65AD\u3002
\u9002\u7528\u8303\u56F4\uFF0C\u5982\u5728\u4E00\u4E32\u95E8\u94A5\u5319\u4E2D\u5BFB\u627E\u6B63\u786E\u7684\u94A5\u5319\u5F00\u95E8\u3002</p>
`,i=n("h2",null,"1. \u8FED\u4EE3\u5668\u6A21\u5F0F\u662F\u4EC0\u4E48",-1),c=n("p",null,"\u672C\u8D28\u662F\u4E00\u4E2A\u5FAA\u73AF\u8BED\u53E5\uFF0C\u4F9D\u5E8F\u5730\u8BBF\u95EE\u805A\u5408\u5BF9\u8C61\u7684\u6BCF\u4E00\u5143\u7D20\u3002",-1),u=n("h3",null,"1.1 \u7C7B\u522B",-1),l=n("p",null,"\u5206\u4E3A\u4E24\u79CD\uFF0C\u5185\u90E8\u8FED\u4EE3\u5668\u548C\u5916\u90E8\u8FED\u4EE3\u5668\u3002",-1),h=n("p",null,"\u5185\u90E8\u8FED\u4EE3\u5668: \u8FED\u4EE3\u89C4\u5219\u4E0D\u53EF\u53D8\uFF0C\u4E0D\u53EF\u4E2D\u6B62\uFF0C\u7075\u6D3B\u6027\u5F88\u4F4E\u3002 \u5916\u90E8\u8FED\u4EE3\u5668: \u589E\u5F3A\u4E86\u7075\u6D3B\u6027\uFF0C\u53EF\u4EE5\u624B\u52A8\u63A7\u5236\u8FED\u4EE3\u7684\u89C4\u5219\uFF08\u53EF\u4E2D\u6B62\uFF09\uFF0C\u589E\u52A0\u4E86\u8C03\u7528\u590D\u6742\u5EA6\u3002",-1),p=n("h2",null,"2. \u5982\u4F55\u53BB\u7406\u89E3",-1),d=n("p",null,[t("\u5185\u90E8\u8FED\u4EE3\u5668: \u5C01\u95ED\u4E86\u8FED\u4EE3\u8FC7\u7A0B \u4EE3\u8868\u662F"),n("code",null,"for...of"),t("\u548CJQuery\u7684"),n("code",null,"$.each")],-1),f=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`$.each(['Vue', 'React', 'Angular'], function(index, value) {
     console.log([index, value]);
});
// [0, Vue]  [1, React]  [2, Angular]
`)],-1),g=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`const arr = ['a', 'b', 'c']
for (let k of arr) {
    console.log(k)
}
  // 'a' 'b' 'c'
`)],-1),_=n("p",null,"\u5916\u90E8\u8FED\u4EE3\u5668:",-1),y=n("p",null,[t("\u5FC5\u987B\u663E\u793A\u5730\u8FED\u4EE3\u4E0B\u4E00\u4E2A\u3002 \u4EE3\u8868\u662F ES6 \u7684"),n("code",null,"yield"),t("\u3002")],-1),I=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`function* generatorEach(arr) {
   for (let [index, value] of arr.entries()) {
     yield console.log([index, value]);
   }
}

let each = generatorEach(['Angular', 'React', 'Vue']);
each.next(); // [0, 'Angular']
each.next(); // [1, 'React']
each.next(); // [2, 'Vue']  
`)],-1),A=n("h2",null,"3. \u5982\u4F55\u53BB\u4F7F\u7528",-1),x=n("p",null,"\u5C06\u7CFB\u5217\u6563\u70B9\u96C6\u5408\u6210\u53EF\u88AB\u8FED\u4EE3\u7684\u5BF9\u8C61/\u6570\u7EC4\uFF0C",-1),m=n("h2",null,"4. \u4E3E\u4E2A\u6817\u5B50",-1),v=n("p",null,[t("\u8FED\u4EE3\u5668\u6A21\u5F0F\u7684\u6838\u5FC3\uFF0C\u5C31\u662F"),n("strong",null,"\u5B9E\u73B0\u7EDF\u4E00\u904D\u5386\u63A5\u53E3"),t("\u3002")],-1),k=n("p",null,"\u9700\u6C42: \u6BD4\u5BF9\u4E24\u4E2A\u6570\u7EC4\u662F\u5426\u5B8C\u5168\u76F8\u7B49\u3002",-1),D=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`// \u5B9E\u73B0\u4E00\u4E2A\u5916\u90E8\u8FED\u4EE3\u5668
const Iterator = function (arr) {
     let current = 0
     
     const next = function () {
         current += 1
     }
     
     const isDone = function () {
         return current = arr.length
     }
     
     const getCurrItem = function () {
         return arr[current]
     }
     
     return {
         next,
         isDone,
         getCurrItem,
         length: arr.length
     }
}

const compare = function (iterator1, iterator2) {
     if (iterator1.length !== iterator2.length) {
         return false
     }
     
     while(!iterator1.isDone() && !iterator2.isDone()) {
         if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
             return false
         }
         iterator1.next()
         iterator2.next()
     }
     
     return true
}
const iterator1 = Iterator([2, 2, 3])
const iterator2 = Iterator([1, 2, 3])
compare(iterator1, iterator2) // false
`)],-1),j=n("h2",null,"5. \u5F00\u53D1\u5B9E\u8DF5",-1),V=n("pre",null,[n("code",{class:"language-js","v-pre":"true"},`function noDataTip() {
    // -1\u8349\u7A3F 0\u5F85\u67E5\u8BE2 1\u67E5\u8BE2\u4E2D 2\u67E5\u8BE2\u6210\u529F 3\u67E5\u8BE2\u5931\u8D25 4\u67E5\u8BE2\u5DF2\u53D6\u6D88
    const tiplist = [
        {
            key: 'noAuth',
            condition: !this.hasAuth, // \u5C55\u793A\u6761\u4EF6
            tip: '\u4E8B\u4EF6\u6743\u9650\u53D8\u66F4\uFF0C\u6570\u636E\u5DF2\u88AB\u6E05\u7A7A\uFF01'
        },
        {
            key: 'noQuery',
            condition: [-1, 1, 0].some(status=status === this.status), // \u5C55\u793A\u6761\u4EF6
            tip: '\u9009\u62E9\u4E8B\u4EF6\u8FDB\u884C\u67E5\u8BE2\uFF5E'
        },
        {
            key: 'cancelQuery',
            condition: this.status === 4, // \u5C55\u793A\u6761\u4EF6
            tip: '\u67E5\u8BE2\u5DF2\u53D6\u6D88'
        },
        {
            key: 'noData',
            condition: this.status === 2,
            tip: '\u5F53\u524D\u67E5\u8BE2\u65E0\u6570\u636E'
        },
        {
            key: 'failure',
            condition: this.status === 3,
            tip: '\u67E5\u8BE2\u5931\u8D25'
        }
    ];

    return tiplist.find(item => item.condition);
}
`)],-1),C=n("p",null,"\u8FED\u4EE3\u5668\u6A21\u5F0F\u4F18\u5316:",-1),Q=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`const AuthInfo = {
    true: {
        key: 'noAuth',
        tip: '\u4E8B\u4EF6\u6743\u9650\u53D8\u66F4\uFF0C\u6570\u636E\u5DF2\u88AB\u6E05\u7A7A\uFF01'
	},
    0: { // status === -1, 1, 0
        key: 'noQuery',
        tip: '\u9009\u62E9\u4E8B\u4EF6\u8FDB\u884C\u67E5\u8BE2~'
    },
    1: { // status === 4
        key: 'cancelQuery',
        tip: '\u67E5\u8BE2\u5DF2\u53D6\u6D88'
    },
    2: { // status === 2
        key: 'noData',
        tip: '\u5F53\u524D\u67E5\u8BE2\u65E0\u6570\u636E'
    },
    3: { // status === 3
        key: 'failure',
        tip: '\u67E5\u8BE2\u5931\u8D25'
    }
}

function noDataTip () {
    const noAuthInfo = AuthInfo[!this.hasAuth];
    if (noAuthInfo) return AuthInfo[noAuthInfo];

    // \u501F\u52A9\u4E8C\u7EF4\u6570\u7EC4\u7684\u7684\u65B9\u5F0F\u7EDF\u4E00\u904D\u5386\u6761\u4EF6
    const hasAuthIndex = [[-1, 1, 0], [4], [2], [3]].findIndex(v => v.includes(this.status)))
    return AuthInfo[hasAuthIndex];
}
`)],-1),R=n("h2",null,"6. \u8BC4\u4EF7",-1),E=n("p",null,"\u53EF\u4EE5\u6D88\u9664\u591A if\u8BED\u53E5\uFF0C\u4F46\u4EC5\u9002\u7528\u4E8E\u201C\u540C\u7C7B\u201D\u95EE\u9898\uFF0C\u6BCF\u4E2A\u5224\u65AD\u4E2D\u7684\u903B\u8F91\u76F8\u4F3C\u6216\u8005\u53EF\u4EE5\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u8FDB\u884C\u7EA6\u675F\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u5728\u8FED\u4EE3\u8FC7\u7A0B\u4E2D\u5305\u542B\u4E86\u989D\u5916\u7684\u6761\u4EF6\u5224\u65AD\u3002 \u9002\u7528\u8303\u56F4\uFF0C\u5982\u5728\u4E00\u4E32\u95E8\u94A5\u5319\u4E2D\u5BFB\u627E\u6B63\u786E\u7684\u94A5\u5319\u5F00\u95E8\u3002",-1);function o(e,T){return r(),a(s,null,[i,c,u,l,h,p,d,f,g,_,y,I,A,x,m,v,k,D,j,V,C,Q,R,E],64)}const b={render:o};b.__hmrId="/Users/xianchenxy/Documents/Blog/posts/post/design_patterns/iterator_pattern.md";const J=e=>({components:e,render:o});export{b as VueComponent,J as VueComponentWith,S as attributes,w as html};
