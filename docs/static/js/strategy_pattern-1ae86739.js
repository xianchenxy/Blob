import"./vue-c0bdf325.js";import{o,c as l,Q as r,b as s,a as n,a5 as e}from"./@vue-505977f7.js";const R={},V=`<h2>1. \u7B56\u7565\u6A21\u5F0F\u662F\u4EC0\u4E48</h2>
<blockquote>
<p>\u5728\u591A\u79CD\u4E0D\u540C\u7684\u65B9\u5F0F\u4E2D\uFF0C\u6743\u8861\u5404\u5F71\u54CD\u56E0\u7D20\uFF0C\u9009\u62E9\u51FA\u4F18\u7684\u90A3\u4E2A\u3002</p>
</blockquote>
<h2>2. \u5982\u4F55\u53BB\u7406\u89E3</h2>
<blockquote>
<p>\u4ECE\u5E7F\u5DDE\u51FA\u53D1\u53BB\u53A6\u95E8\uFF0C\u53EF\u4EE5\u6709\u7684\u51FA\u884C\u65B9\u5F0F\u662F\u98DE\u673A\u3001\u9AD8\u94C1\u3001\u6C7D\u8F66\u7B49\uFF0C\u5B58\u5728\u7684\u5F71\u54CD\u56E0\u7D20\u6709\u8212\u9002\u5EA6\u3001\u4EF7\u683C\u3001\u65C5\u7A0B\u8017\u65F6\u3001\u5F53\u5929\u53EF\u4F9B\u51FA\u73B0\u7684\u65B9\u5F0F\u7B49\u3002</p>
<p>\u5177\u4F53\u91C7\u7528\u4F55\u79CD\u65B9\u5F0F\uFF0C\u7EFC\u5408\u5F71\u54CD\u56E0\u7D20\u5F97\u51FA\uFF0C\u4E0D\u540C\u7684\u4EBA\u6709\u4E0D\u540C\u7684\u4F18\u5148\u8003\u8651\u56E0\u7D20\u3002</p>
<p>\u5E38\u89C4\u7684\u505A\u6CD5\u662F\u6839\u636E\u4E0D\u540C\u7684\u5F71\u54CD\u56E0\u7D20\uFF0C\u5212\u5206\u4E0D\u540C\u51FA\u73B0\u65B9\u5F0F\u7684\u4F18\u5148\u7EA7\uFF0C\u6BD4\u5982\u4EE5\u65C5\u7A0B\u8017\u65F6\u5212\u5206\uFF0C\u4E3A\u98DE\u673A &gt; \u9AD8\u94C1 &gt; \u6C7D\u8F66\u3002</p>
<p>\u5B58\u5728\u7684\u7F3A\u70B9\u662F\u6709\u8BB8\u591A\u7684\u5224\u65AD\uFF0C\u5E76\u4E14\u5F53\u5F71\u54CD\u56E0\u7D20\u6709\u53D8\u5316\u65F6\uFF08\u968F\u7740\u65F6\u4EE3\u53D1\u5C55\uFF0C\u51FA\u73B0\u4E2A\u4EBA\u98DE\u884C\u5668\uFF09\uFF0C\u9700\u8981\u53BB\u7EF4\u62A4\u6BCF\u4E00\u5904\u7684\u5224\u65AD\u3002</p>
</blockquote>
<h2>3. \u5982\u4F55\u53BB\u4F7F\u7528</h2>
<blockquote>
<p>\u5C06\u201C\u5206\u5C01\u5236\u201D\u6539\u4E3A\u201C\u4E2D\u592E\u96C6\u6743\u5236\u201D</p>
<p>\u5F52\u62E2\u5404\u5F71\u54CD\u56E0\u7D20\u7684\u903B\u8F91\u5230\u4E00\u4E2A\u4E13\u95E8\u7684\u5904\u7406\u5BF9\u8C61\u4E2D\uFF0C\u8F93\u5165\u56E0\u7D20\uFF0C\u5F97\u51FA\u7ED3\u679C\u3002</p>
</blockquote>
<h2>4. \u4E3E\u4E2A\u6817\u5B50</h2>
<h3>\u8BA1\u7B97\u5458\u5DE5\u5F53\u6708\u5956\u91D1</h3>
<blockquote>
<p>\u5956\u91D1\u57FA\u65701000\uFF0C\u7EE9\u6548\u4E3AS\u7684\u5458\u5DE5\u5956\u91D14\u500D\uFF0C\u7EE9\u6548A\u7684\u5458\u5DE5\u5956\u91D13\u500D\uFF0C\u7EE9\u6548B\u7684\u5458\u5DE5\u5956\u91D12\u500D\u3002</p>
</blockquote>
<p>\u6211\u4EEC\u53EF\u4EE5\u5F88\u5FEB\u5C31\u5B9E\u73B0\u51FA\u8FD9\u6837\u7684\u7A0B\u5E8F\uFF1A</p>
<pre><code class="language-javascript">const bonusS = (salary) =&gt; {
    return salary * 4
}
const bonusA = (salary) =&gt; {
    return salary * 3
}
const bonusB = (salary) =&gt; {
    return salary * 2
}

/**
 * \u4F9D\u636E\u7EE9\u6548\u7EA7\u522B\uFF0C\u8BA1\u7B97\u5458\u5DE5\u5F53\u6708\u5956\u91D1
 * @params {String} level - \u5458\u5DE5\u7EE9\u6548\u7EA7\u522B
 * @params {Number} salary - \u5956\u91D1\u57FA\u6570
 */
const calcBonus = (level, salary) =&gt; {
    if (level === 'S') {
        return bonusS(salary)
    }
    if (level === 'A') {
        return bonusA(salary)
    }
    if (level === 'B') {
        return bonusB(salary)
    }
}

calcBonus('S', 1000)
</code></pre>
<p>\u7B80\u5355\u76F4\u767D\u7684\u5199\u6CD5\uFF0C\u529F\u80FD\u4E0A\u5B8C\u5168\u6CA1\u6709\u95EE\u9898\uFF0C\u4F46\u662F\u6211\u4EEC\u4ECE\u4EE3\u7801\u5C42\u9762\u4E0A\u6765\u8BF4\uFF0C\u4F1A\u5B58\u5728\u4E9B\u4EC0\u4E48\u95EE\u9898\uFF1F</p>
<p>\u5B58\u5728\u95EE\u9898\uFF1A
\uFF081\uFF09if\u5224\u65AD\u8BED\u53E5\u8FC7\u591A\uFF0C\u4E0D\u6613\u7EF4\u62A4\uFF1B
\uFF082\uFF09<code>calcBonus</code>\u8BA1\u7B97\u51FD\u6570\u968F\u7740\u9700\u6C42\u8FED\u4EE3\uFF0C\u53EF\u80FD\u4F1A\u8D8A\u6765\u8D8A\u5E9E\u5927\uFF0C\u4E14\u5F53\u9700\u6C42\u53D8\u66F4\u65F6\uFF08\u5982\u65B0\u589E\u4E00\u4E2A\u7EE9\u6548\u7EA7\u522B\uFF09\u7F3A\u4E4F\u5F39\u6027\u3002</p>
<br />
<p>\u91C7\u7528\u7B56\u7565\u6A21\u5F0F\u8FDB\u884C\u6539\u9020</p>
<pre><code class="language-javascript">const bonusCategories = {
	S: (salary) =&gt; {
        return salary * 4
    },
    A: (salary) =&gt; {
        return salary * 3
    },
    B: (salary) =&gt; {
        return salary * 2
    }
}

const calcBonus = (level, salary) =&gt; {
    return bonusCategories[level](salary)
}

calcBonus('S', 1000)
</code></pre>
<h2>5. \u5F00\u53D1\u5B9E\u8DF5</h2>
<h3>\u5C01\u88C5\u4E1A\u52A1\u8BF7\u6C42</h3>
<p>\u5F80\u5E38\u505A\u6CD5\uFF1A</p>
<pre><code class="language-javascript">const type = isAddMethod ? 'post' : 'put',
      url = '/table' + isAddMethod ? '' : '/ 123'

this.$api[type](url, {
    a: 1,
    b: 2
}, {
    headers: {
        'Content-type': 'application/x-www-form-urlencoded'
    }
}).then(d =&gt; {
    // do something...
})
</code></pre>
<p><strong>\u5B58\u5728\u95EE\u9898\uFF1A</strong>
\u4E0D\u6613\u7EF4\u62A4\uFF0C\u9875\u9762\u53EF\u80FD\u5B58\u5728\u591A\u4E2A\u5730\u65B9\u8C03\u7528\u540C\u4E00\u4E2A\u63A5\u53E3\uFF0C\u5F53\u63A5\u53E3\u6709\u53D8\u5316\u65F6\uFF0C\u9700\u8981\u6539\u52A8\u591A\u6B21</p>
<p>\u7B56\u7565\u6A21\u5F0F\u6539\u9020</p>
<p>\u7B56\u7565\u5BF9\u8C61\uFF1A</p>
<p>\u5199\u4E8E <code>vuex</code>\u4E2D</p>
<pre><code class="language-javascript">getData ({ rootState, dispatch }, payload) {
    const urlInfo = URL.table[payload.key],
          urlPlaceholder = payload.urlPlaceholder || {}
    // \u66FF\u6362 url\u5360\u4F4D\u7B26
    urlInfo.hasPlaceholder &amp;&amp; Object.keys(urlPlaceholder).forEach(key =&gt; {
        urlInfo.url = urlInfo.url.replace(new RegExp('\\\\' + key), urlPlaceholder[key])
    })
    
    return dispatch('sendAjaxByType', { info: Object.assign(urlInfo, payload) })
},
sendAjaxByType (content, { info }) {
	return Vue.api(info.type)(info.url, info.data, info.config)
}
</code></pre>
<p>\u8C03\u7528</p>
<pre><code class="language-javascript">this.$store.dispatch('getData', {
    key: isAddMethod ? 'add' : 'edit', // \u5305\u542B\u8BF7\u6C42 URL\u548C\u8BF7\u6C42\u7C7B\u578B
    urlPlaceholder: {
        '$id': '123'
    },
    data: {
        a: 1,
        b: 2
    },
    config: {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    }
}).then(d =&gt; {
    // do something...
})
</code></pre>
<h2>6. \u8BC4\u4EF7</h2>
<blockquote>
<p>\u91C7\u7528\u7B56\u7565\u6A21\u5F0F\u6210\u529F\u5B9E\u73B0\u4E86\u9AD8\u5185\u805A\u3001\u4F4E\u8026\u5408\uFF0C\u80FD\u591F\u6709\u6548\u5730\u907F\u514D\u591A\u91CD\u6761\u4EF6\u5224\u65AD\u8BED\u53E5\uFF0C\u8FD8\u652F\u6301\u5F00\u653E-\u5C01\u95ED\u539F\u5219\uFF0C\u4F46\u662F\u7531\u4E8E\u589E\u52A0\u4E86\u7B56\u7565\u5BF9\u8C61\uFF0C\u4F7F\u7528\u65F6\u5FC5\u987B\u4E86\u89E3\u5404\u7B56\u7565\u7684\u4E0D\u540C\u4E4B\u5904\uFF0C\u624D\u80FD\u9009\u62E9\u51FA\u5408\u9002\u7684\u7B56\u7565\uFF0C\u6240\u4EE5\u63D0\u9AD8\u4E86\u590D\u6742\u5EA6\uFF0C\u4E0D\u5982\u7B80\u5355\u7684\u5224\u65AD\u6765\u7684\u4E00\u773C\u660E\u4E86\u3002</p>
</blockquote>
`,c=s("<h2>1. \u7B56\u7565\u6A21\u5F0F\u662F\u4EC0\u4E48</h2><blockquote><p>\u5728\u591A\u79CD\u4E0D\u540C\u7684\u65B9\u5F0F\u4E2D\uFF0C\u6743\u8861\u5404\u5F71\u54CD\u56E0\u7D20\uFF0C\u9009\u62E9\u51FA\u4F18\u7684\u90A3\u4E2A\u3002</p></blockquote><h2>2. \u5982\u4F55\u53BB\u7406\u89E3</h2><blockquote><p>\u4ECE\u5E7F\u5DDE\u51FA\u53D1\u53BB\u53A6\u95E8\uFF0C\u53EF\u4EE5\u6709\u7684\u51FA\u884C\u65B9\u5F0F\u662F\u98DE\u673A\u3001\u9AD8\u94C1\u3001\u6C7D\u8F66\u7B49\uFF0C\u5B58\u5728\u7684\u5F71\u54CD\u56E0\u7D20\u6709\u8212\u9002\u5EA6\u3001\u4EF7\u683C\u3001\u65C5\u7A0B\u8017\u65F6\u3001\u5F53\u5929\u53EF\u4F9B\u51FA\u73B0\u7684\u65B9\u5F0F\u7B49\u3002</p><p>\u5177\u4F53\u91C7\u7528\u4F55\u79CD\u65B9\u5F0F\uFF0C\u7EFC\u5408\u5F71\u54CD\u56E0\u7D20\u5F97\u51FA\uFF0C\u4E0D\u540C\u7684\u4EBA\u6709\u4E0D\u540C\u7684\u4F18\u5148\u8003\u8651\u56E0\u7D20\u3002</p><p>\u5E38\u89C4\u7684\u505A\u6CD5\u662F\u6839\u636E\u4E0D\u540C\u7684\u5F71\u54CD\u56E0\u7D20\uFF0C\u5212\u5206\u4E0D\u540C\u51FA\u73B0\u65B9\u5F0F\u7684\u4F18\u5148\u7EA7\uFF0C\u6BD4\u5982\u4EE5\u65C5\u7A0B\u8017\u65F6\u5212\u5206\uFF0C\u4E3A\u98DE\u673A &gt; \u9AD8\u94C1 &gt; \u6C7D\u8F66\u3002</p><p>\u5B58\u5728\u7684\u7F3A\u70B9\u662F\u6709\u8BB8\u591A\u7684\u5224\u65AD\uFF0C\u5E76\u4E14\u5F53\u5F71\u54CD\u56E0\u7D20\u6709\u53D8\u5316\u65F6\uFF08\u968F\u7740\u65F6\u4EE3\u53D1\u5C55\uFF0C\u51FA\u73B0\u4E2A\u4EBA\u98DE\u884C\u5668\uFF09\uFF0C\u9700\u8981\u53BB\u7EF4\u62A4\u6BCF\u4E00\u5904\u7684\u5224\u65AD\u3002</p></blockquote><h2>3. \u5982\u4F55\u53BB\u4F7F\u7528</h2><blockquote><p>\u5C06\u201C\u5206\u5C01\u5236\u201D\u6539\u4E3A\u201C\u4E2D\u592E\u96C6\u6743\u5236\u201D</p><p>\u5F52\u62E2\u5404\u5F71\u54CD\u56E0\u7D20\u7684\u903B\u8F91\u5230\u4E00\u4E2A\u4E13\u95E8\u7684\u5904\u7406\u5BF9\u8C61\u4E2D\uFF0C\u8F93\u5165\u56E0\u7D20\uFF0C\u5F97\u51FA\u7ED3\u679C\u3002</p></blockquote><h2>4. \u4E3E\u4E2A\u6817\u5B50</h2><h3>\u8BA1\u7B97\u5458\u5DE5\u5F53\u6708\u5956\u91D1</h3><blockquote><p>\u5956\u91D1\u57FA\u65701000\uFF0C\u7EE9\u6548\u4E3AS\u7684\u5458\u5DE5\u5956\u91D14\u500D\uFF0C\u7EE9\u6548A\u7684\u5458\u5DE5\u5956\u91D13\u500D\uFF0C\u7EE9\u6548B\u7684\u5458\u5DE5\u5956\u91D12\u500D\u3002</p></blockquote><p>\u6211\u4EEC\u53EF\u4EE5\u5F88\u5FEB\u5C31\u5B9E\u73B0\u51FA\u8FD9\u6837\u7684\u7A0B\u5E8F\uFF1A</p>",10),p=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`const bonusS = (salary) => {
    return salary * 4
}
const bonusA = (salary) => {
    return salary * 3
}
const bonusB = (salary) => {
    return salary * 2
}

/**
 * \u4F9D\u636E\u7EE9\u6548\u7EA7\u522B\uFF0C\u8BA1\u7B97\u5458\u5DE5\u5F53\u6708\u5956\u91D1
 * @params {String} level - \u5458\u5DE5\u7EE9\u6548\u7EA7\u522B
 * @params {Number} salary - \u5956\u91D1\u57FA\u6570
 */
const calcBonus = (level, salary) => {
    if (level === 'S') {
        return bonusS(salary)
    }
    if (level === 'A') {
        return bonusA(salary)
    }
    if (level === 'B') {
        return bonusB(salary)
    }
}

calcBonus('S', 1000)
`)],-1),u=n("p",null,"\u7B80\u5355\u76F4\u767D\u7684\u5199\u6CD5\uFF0C\u529F\u80FD\u4E0A\u5B8C\u5168\u6CA1\u6709\u95EE\u9898\uFF0C\u4F46\u662F\u6211\u4EEC\u4ECE\u4EE3\u7801\u5C42\u9762\u4E0A\u6765\u8BF4\uFF0C\u4F1A\u5B58\u5728\u4E9B\u4EC0\u4E48\u95EE\u9898\uFF1F",-1),d=n("p",null,[e("\u5B58\u5728\u95EE\u9898\uFF1A \uFF081\uFF09if\u5224\u65AD\u8BED\u53E5\u8FC7\u591A\uFF0C\u4E0D\u6613\u7EF4\u62A4\uFF1B \uFF082\uFF09"),n("code",null,"calcBonus"),e("\u8BA1\u7B97\u51FD\u6570\u968F\u7740\u9700\u6C42\u8FED\u4EE3\uFF0C\u53EF\u80FD\u4F1A\u8D8A\u6765\u8D8A\u5E9E\u5927\uFF0C\u4E14\u5F53\u9700\u6C42\u53D8\u66F4\u65F6\uFF08\u5982\u65B0\u589E\u4E00\u4E2A\u7EE9\u6548\u7EA7\u522B\uFF09\u7F3A\u4E4F\u5F39\u6027\u3002")],-1),i=n("br",null,null,-1),h=n("p",null,"\u91C7\u7528\u7B56\u7565\u6A21\u5F0F\u8FDB\u884C\u6539\u9020",-1),y=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`const bonusCategories = {
	S: (salary) => {
        return salary * 4
    },
    A: (salary) => {
        return salary * 3
    },
    B: (salary) => {
        return salary * 2
    }
}

const calcBonus = (level, salary) => {
    return bonusCategories[level](salary)
}

calcBonus('S', 1000)
`)],-1),g=n("h2",null,"5. \u5F00\u53D1\u5B9E\u8DF5",-1),b=n("h3",null,"\u5C01\u88C5\u4E1A\u52A1\u8BF7\u6C42",-1),_=n("p",null,"\u5F80\u5E38\u505A\u6CD5\uFF1A",-1),f=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`const type = isAddMethod ? 'post' : 'put',
      url = '/table' + isAddMethod ? '' : '/ 123'

this.$api[type](url, {
    a: 1,
    b: 2
}, {
    headers: {
        'Content-type': 'application/x-www-form-urlencoded'
    }
}).then(d => {
    // do something...
})
`)],-1),k=n("p",null,[n("strong",null,"\u5B58\u5728\u95EE\u9898\uFF1A"),e(" \u4E0D\u6613\u7EF4\u62A4\uFF0C\u9875\u9762\u53EF\u80FD\u5B58\u5728\u591A\u4E2A\u5730\u65B9\u8C03\u7528\u540C\u4E00\u4E2A\u63A5\u53E3\uFF0C\u5F53\u63A5\u53E3\u6709\u53D8\u5316\u65F6\uFF0C\u9700\u8981\u6539\u52A8\u591A\u6B21")],-1),v=n("p",null,"\u7B56\u7565\u6A21\u5F0F\u6539\u9020",-1),B=n("p",null,"\u7B56\u7565\u5BF9\u8C61\uFF1A",-1),m=n("p",null,[e("\u5199\u4E8E "),n("code",null,"vuex"),e("\u4E2D")],-1),A=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`getData ({ rootState, dispatch }, payload) {
    const urlInfo = URL.table[payload.key],
          urlPlaceholder = payload.urlPlaceholder || {}
    // \u66FF\u6362 url\u5360\u4F4D\u7B26
    urlInfo.hasPlaceholder && Object.keys(urlPlaceholder).forEach(key => {
        urlInfo.url = urlInfo.url.replace(new RegExp('\\\\' + key), urlPlaceholder[key])
    })
    
    return dispatch('sendAjaxByType', { info: Object.assign(urlInfo, payload) })
},
sendAjaxByType (content, { info }) {
	return Vue.api(info.type)(info.url, info.data, info.config)
}
`)],-1),q=n("p",null,"\u8C03\u7528",-1),S=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`this.$store.dispatch('getData', {
    key: isAddMethod ? 'add' : 'edit', // \u5305\u542B\u8BF7\u6C42 URL\u548C\u8BF7\u6C42\u7C7B\u578B
    urlPlaceholder: {
        '$id': '123'
    },
    data: {
        a: 1,
        b: 2
    },
    config: {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    }
}).then(d => {
    // do something...
})
`)],-1),j=n("h2",null,"6. \u8BC4\u4EF7",-1),x=n("blockquote",null,[n("p",null,"\u91C7\u7528\u7B56\u7565\u6A21\u5F0F\u6210\u529F\u5B9E\u73B0\u4E86\u9AD8\u5185\u805A\u3001\u4F4E\u8026\u5408\uFF0C\u80FD\u591F\u6709\u6548\u5730\u907F\u514D\u591A\u91CD\u6761\u4EF6\u5224\u65AD\u8BED\u53E5\uFF0C\u8FD8\u652F\u6301\u5F00\u653E-\u5C01\u95ED\u539F\u5219\uFF0C\u4F46\u662F\u7531\u4E8E\u589E\u52A0\u4E86\u7B56\u7565\u5BF9\u8C61\uFF0C\u4F7F\u7528\u65F6\u5FC5\u987B\u4E86\u89E3\u5404\u7B56\u7565\u7684\u4E0D\u540C\u4E4B\u5904\uFF0C\u624D\u80FD\u9009\u62E9\u51FA\u5408\u9002\u7684\u7B56\u7565\uFF0C\u6240\u4EE5\u63D0\u9AD8\u4E86\u590D\u6742\u5EA6\uFF0C\u4E0D\u5982\u7B80\u5355\u7684\u5224\u65AD\u6765\u7684\u4E00\u773C\u660E\u4E86\u3002")],-1);function t(a,P){return o(),l(r,null,[c,p,u,d,i,h,y,g,b,_,f,k,v,B,m,A,q,S,j,x],64)}const w={render:t};w.__hmrId="/Users/xianchenxy/Documents/Blog/posts/post/design_patterns/strategy_pattern.md";const M=a=>({components:a,render:t});export{w as VueComponent,M as VueComponentWith,R as attributes,V as html};
