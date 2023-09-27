import"./vue-126afe2a.js";import{o as i,c as o,S as r,b as l,a as n,a3 as c}from"./@vue-268a4df7.js";const A={},y=`<h2>1. \u5355\u4F8B\u6A21\u5F0F\u662F\u4EC0\u4E48</h2>
<p>\u4EC5\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5E76\u4E14\u80FD\u591F\u5168\u5C40\u8BBF\u95EE\u3002</p>
<h2>2. \u5982\u4F55\u53BB\u7406\u89E3</h2>
<ul>
<li>\u5168\u5C40\u53D8\u91CF\u5982 window\u4E5F\u662F\u5355\u4F8B\u7684\u4E00\u79CD\u5B9E\u73B0\u3002</li>
<li>\u53EA\u8981\u6EE1\u8DB3\u4E86\u4EC5\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u4E14\u80FD\u5168\u5C40\u8BBF\u95EE\u5373\u662F\u3002</li>
<li>\u5355\u4F8B\u5206\u4E3A\u4E09\u79CD\uFF1A\u666E\u901A\u5355\u4F8B\u3001\u61D2\u6C49\u5F0F\u5355\u4F8B\uFF08\u60F0\u6027\uFF09\u3001\u997F\u6C49\u5F0F\u5355\u4F8B\u3002</li>
</ul>
<blockquote>
<p>\uFF08\u997F\u6C49\u5F0F\u5355\u4F8B\u7684\u6982\u5FF5\u6765\u81EA\u540E\u7AEF\uFF0C\u524D\u7AEF\u9886\u57DF\u997F\u6C49\u5F0F\u5355\u4F8B\u548C\u666E\u901A\u5355\u4F8B\u57FA\u672C\u4E00\u81F4\uFF09</p>
</blockquote>
<br>
<h2>3. \u5982\u4F55\u53BB\u4F7F\u7528</h2>
<p>\u5168\u56FD\u53EA\u6709\u4E00\u4E2A\u7687\u5E1D\u3002
\u4E3B\u8981\u5728\u4E8E\u63A7\u5236\u5B9E\u4F8B\u7684\u4EA7\u751F\uFF0C\u4F7F\u5F97\u4E0D\u4F1A\u51FA\u73B0\u590D\u6570\u53CA\u4EE5\u4E0A\u4E2A\uFF0C\u7136\u540E\u63D0\u4F9B\u4E00\u4E2A\u65B9\u6CD5\u53BB\u8BBF\u95EE\u8BE5\u5B9E\u4F8B\u3002
\u7531\u4E8E JS\u7684\u5168\u5C40\u53D8\u91CF\uFF08\u5982 window\uFF09\u5B58\u5728\u5F88\u591A\u95EE\u9898\uFF0C\u5F88\u5BB9\u6613\u9020\u6210\u547D\u540D\u7A7A\u95F4\u6C61\u67D3\uFF0C\u56E0\u6B64\u4E00\u822C\u4E0D\u4F7F\u7528 JS\u7684\u5168\u5C40\u53D8\u91CF\u6765\u5B58\u653E\u5355\u4F8B\u3002</p>
<h2>4. \u4E3E\u4E2A\u6817\u5B50</h2>
<p>\u9488\u5BF9\u5168\u5C40\u53D8\u91CF\uFF1A</p>
<ul>
<li>
<p>\u91C7\u7528\u547D\u540D\u7A7A\u95F4\uFF1A</p>
<pre><code class="language-javascript">window.MyApp = {};
window.MyApp.namespace = function (name) {
    const parts = name.split('.');
    let current = MyApp;
    for(let i in parts) {
        if (!current[parts[i]]) {
            current[parts[i]] = {};
        }
        console.log(JSON.stringify(current));
        current = current[parts[i]];
    }
};
window.MyApp.namespace('event');
window.MyApp.namespace('dom.style');
// \u7B49\u4EF7\u4E8E
window.MyApp = {
	event: {},
	dom: {
		style: {}
    }
};
</code></pre>
</li>
<li>
<p>\u91C7\u7528\u95ED\u5305\u5C01\u88C5\u79C1\u6709\u53D8\u91CF</p>
<pre><code class="language-javascript">const user = (function () {
    const _name = 'xianchenxy',
          _age = '18'

    return {
        getUserInfo: function () {
            return _name + '-' + _age
        }
    }
})()
</code></pre>
</li>
</ul>
<h2>5. \u5F00\u53D1\u5B9E\u8DF5</h2>
<pre><code class="language-javascript">// \u61D2\u6C49\u5F0F(\u61D2\u60F0\u578B\uFF0C\u7B49\u5230\u9700\u8981\u7684\u65F6\u5019\u624D\u521B\u5EFA\u5B9E\u4F8B)
AAA.getInstance = (function () {
	let instance = null
	return function () {
		if (instance) {
			instance = new Singleton()
		}
		return instance
	}
})()

// \u997F\u6C49\u5F0F\uFF08\u9965\u997F\u578B\uFF0C\u4E3B\u52A8\u53BB\u521B\u5EFA\u5B9E\u4F8B\uFF09
AAA.getInstance = (function () {
	let instance = new Singleton()
	return function () {
		return instance
	}
})()
</code></pre>
<p><strong>\u7F3A\u70B9\uFF1A</strong>
\u5982\u679C\u521B\u5EFA\u5B9E\u4F8B\u7684\u65F6\u5019\u9700\u8981\u4F20\u9012\u53C2\u6570\uFF0C\u997F\u6C49\u5F0F\u5199\u6CD5\u5C31\u65E0\u6CD5\u505A\u5230\u4E86
&lt;br /</p>
<h2>6. \u8BC4\u4EF7</h2>
<ul>
<li>\u8282\u7701\u4E86\u7CFB\u7EDF\u8D44\u6E90\u3002</li>
<li>\u82E5\u5BF9\u8C61\u8F83\u4E3A\u590D\u6742\uFF0C\u521B\u5EFA\u7684\u8FC7\u7A0B\u8017\u65F6\u53EF\u80FD\u8F83\u957F\u3002</li>
<li>\u4E0E\u5355\u4E00\u804C\u8D23\u539F\u5219\u51B2\u7A81\uFF0C\u4E00\u4E2A\u7C7B\u5E94\u8BE5\u53EA\u5173\u5FC3\u5185\u90E8\u903B\u8F91\uFF0C\u800C\u4E0D\u5173\u5FC3\u5916\u9762\u600E\u4E48\u6837\u6765\u5B9E\u4F8B\u5316\u3002</li>
</ul>
<h2>7. \u5173\u952E\u8BCD</h2>
<p>\u5355\u4F8B\u3001\u5168\u5C40\u8BBF\u95EE</p>
`,s=l(`<h2>1. \u5355\u4F8B\u6A21\u5F0F\u662F\u4EC0\u4E48</h2><p>\u4EC5\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5E76\u4E14\u80FD\u591F\u5168\u5C40\u8BBF\u95EE\u3002</p><h2>2. \u5982\u4F55\u53BB\u7406\u89E3</h2><ul><li>\u5168\u5C40\u53D8\u91CF\u5982 window\u4E5F\u662F\u5355\u4F8B\u7684\u4E00\u79CD\u5B9E\u73B0\u3002</li><li>\u53EA\u8981\u6EE1\u8DB3\u4E86\u4EC5\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u4E14\u80FD\u5168\u5C40\u8BBF\u95EE\u5373\u662F\u3002</li><li>\u5355\u4F8B\u5206\u4E3A\u4E09\u79CD\uFF1A\u666E\u901A\u5355\u4F8B\u3001\u61D2\u6C49\u5F0F\u5355\u4F8B\uFF08\u60F0\u6027\uFF09\u3001\u997F\u6C49\u5F0F\u5355\u4F8B\u3002</li></ul><blockquote><p>\uFF08\u997F\u6C49\u5F0F\u5355\u4F8B\u7684\u6982\u5FF5\u6765\u81EA\u540E\u7AEF\uFF0C\u524D\u7AEF\u9886\u57DF\u997F\u6C49\u5F0F\u5355\u4F8B\u548C\u666E\u901A\u5355\u4F8B\u57FA\u672C\u4E00\u81F4\uFF09</p></blockquote><br><h2>3. \u5982\u4F55\u53BB\u4F7F\u7528</h2><p>\u5168\u56FD\u53EA\u6709\u4E00\u4E2A\u7687\u5E1D\u3002 \u4E3B\u8981\u5728\u4E8E\u63A7\u5236\u5B9E\u4F8B\u7684\u4EA7\u751F\uFF0C\u4F7F\u5F97\u4E0D\u4F1A\u51FA\u73B0\u590D\u6570\u53CA\u4EE5\u4E0A\u4E2A\uFF0C\u7136\u540E\u63D0\u4F9B\u4E00\u4E2A\u65B9\u6CD5\u53BB\u8BBF\u95EE\u8BE5\u5B9E\u4F8B\u3002 \u7531\u4E8E JS\u7684\u5168\u5C40\u53D8\u91CF\uFF08\u5982 window\uFF09\u5B58\u5728\u5F88\u591A\u95EE\u9898\uFF0C\u5F88\u5BB9\u6613\u9020\u6210\u547D\u540D\u7A7A\u95F4\u6C61\u67D3\uFF0C\u56E0\u6B64\u4E00\u822C\u4E0D\u4F7F\u7528 JS\u7684\u5168\u5C40\u53D8\u91CF\u6765\u5B58\u653E\u5355\u4F8B\u3002</p><h2>4. \u4E3E\u4E2A\u6817\u5B50</h2><p>\u9488\u5BF9\u5168\u5C40\u53D8\u91CF\uFF1A</p><ul><li><p>\u91C7\u7528\u547D\u540D\u7A7A\u95F4\uFF1A</p><pre><code class="language-javascript">window.MyApp = {};
window.MyApp.namespace = function (name) {
    const parts = name.split(&#39;.&#39;);
    let current = MyApp;
    for(let i in parts) {
        if (!current[parts[i]]) {
            current[parts[i]] = {};
        }
        console.log(JSON.stringify(current));
        current = current[parts[i]];
    }
};
window.MyApp.namespace(&#39;event&#39;);
window.MyApp.namespace(&#39;dom.style&#39;);
// \u7B49\u4EF7\u4E8E
window.MyApp = {
	event: {},
	dom: {
		style: {}
    }
};
</code></pre></li><li><p>\u91C7\u7528\u95ED\u5305\u5C01\u88C5\u79C1\u6709\u53D8\u91CF</p><pre><code class="language-javascript">const user = (function () {
    const _name = &#39;xianchenxy&#39;,
          _age = &#39;18&#39;

    return {
        getUserInfo: function () {
            return _name + &#39;-&#39; + _age
        }
    }
})()
</code></pre></li></ul><h2>5. \u5F00\u53D1\u5B9E\u8DF5</h2>`,12),a=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`// \u61D2\u6C49\u5F0F(\u61D2\u60F0\u578B\uFF0C\u7B49\u5230\u9700\u8981\u7684\u65F6\u5019\u624D\u521B\u5EFA\u5B9E\u4F8B)
AAA.getInstance = (function () {
	let instance = null
	return function () {
		if (instance) {
			instance = new Singleton()
		}
		return instance
	}
})()

// \u997F\u6C49\u5F0F\uFF08\u9965\u997F\u578B\uFF0C\u4E3B\u52A8\u53BB\u521B\u5EFA\u5B9E\u4F8B\uFF09
AAA.getInstance = (function () {
	let instance = new Singleton()
	return function () {
		return instance
	}
})()
`)],-1),p=n("p",null,[n("strong",null,"\u7F3A\u70B9\uFF1A"),c(" \u5982\u679C\u521B\u5EFA\u5B9E\u4F8B\u7684\u65F6\u5019\u9700\u8981\u4F20\u9012\u53C2\u6570\uFF0C\u997F\u6C49\u5F0F\u5199\u6CD5\u5C31\u65E0\u6CD5\u505A\u5230\u4E86 <br /")],-1),u=n("h2",null,"6. \u8BC4\u4EF7",-1),d=n("ul",null,[n("li",null,"\u8282\u7701\u4E86\u7CFB\u7EDF\u8D44\u6E90\u3002"),n("li",null,"\u82E5\u5BF9\u8C61\u8F83\u4E3A\u590D\u6742\uFF0C\u521B\u5EFA\u7684\u8FC7\u7A0B\u8017\u65F6\u53EF\u80FD\u8F83\u957F\u3002"),n("li",null,"\u4E0E\u5355\u4E00\u804C\u8D23\u539F\u5219\u51B2\u7A81\uFF0C\u4E00\u4E2A\u7C7B\u5E94\u8BE5\u53EA\u5173\u5FC3\u5185\u90E8\u903B\u8F91\uFF0C\u800C\u4E0D\u5173\u5FC3\u5916\u9762\u600E\u4E48\u6837\u6765\u5B9E\u4F8B\u5316\u3002")],-1),h=n("h2",null,"7. \u5173\u952E\u8BCD",-1),g=n("p",null,"\u5355\u4F8B\u3001\u5168\u5C40\u8BBF\u95EE",-1);function e(t,m){return i(),o(r,null,[s,a,p,u,d,h,g],64)}const w={render:e};w.__hmrId="/Users/xianchenxy/Documents/Blog/posts/post/design_patterns/singleton_pattern.md";const v=t=>({components:t,render:e});export{w as VueComponent,v as VueComponentWith,A as attributes,y as html};
