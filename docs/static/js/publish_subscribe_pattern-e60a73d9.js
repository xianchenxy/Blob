import"./vue-c0bdf325.js";import{o as a,c as l,Q as c,b as t,a as n}from"./@vue-505977f7.js";const Q={},R=`<h2>1. \u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u662F\u4EC0\u4E48</h2>
<blockquote>
<p>\u4E00\u4E2A\u5BF9\u8C61\u7684\u72B6\u6001\u53D1\u751F\u6539\u53D8\uFF0C\u53D1\u5E03\u8005\u901A\u77E5\u8C03\u5EA6\u4E2D\u5FC3\uFF0C\u518D\u7531\u8C03\u5EA6\u4E2D\u5FC3\u8C03\u5EA6\u6240\u6709\u8BA2\u9605\u8BE5\u901A\u77E5\u7684\u5BF9\u8C61\u3002</p>
</blockquote>
<h2>2. \u5982\u4F55\u53BB\u7406\u89E3</h2>
<blockquote>
<p>\u5C0F\u660E\u6700\u8FD1\u770B\u4E0A\u4E86\u4E00\u5957\u623F\u5B50\uFF0C\u5230\u4E86\u552E\u697C\u5904\u88AB\u544A\u77E5\u8BE5\u697C\u76D8\u7684\u623F\u5B50\u5DF2\u552E\u7F44\uFF0C\u4E8E\u662F\u628A\u7535\u8BDD\u53F7\u7801\u7559\u5728\u552E\u697C\u5904\u3002</p>
<p>\u552E\u697C\u7ECF\u7406\u7B54\u5E94\u4ED6\u65B0\u697C\u76D8\u4E00\u63A8\u51FA\uFF0C\u5C31\u7ACB\u523B\u53D1\u4FE1\u606F\u901A\u77E5\u4ED6\u3002</p>
<p>\u5C0F\u7EA2\uFF0C\u5C0F\u5F3A\u548C\u5C0F\u9F99\u4E5F\u662F\u548C\u5C0F\u660E\u4E00\u6837\u7684\u505A\u6CD5\u3002</p>
<p>\u65B0\u697C\u76D8\u63A8\u51FA\u53BB\u7684\u65F6\u5019\uFF0C\u552E\u697C\u7ECF\u7406\u904D\u5386\u82B1\u540D\u518C\u4E0A\u9762\u7684\u7535\u8BDD\u53F7\u7801\uFF0C\u4F9D\u6B21\u53D1\u4FE1\u606F\u901A\u77E5\u4ED6\u4EEC\u3002</p>
</blockquote>
<blockquote>
<img src="#design_patterns#publish_subscribe1.png" height="400" alt="\u697C\u76D8\u53D1\u5E03\u8BA2\u9605\u793A\u610F\u6A21\u5F0F\u56FE">
</blockquote>
<h2>3. \u5982\u4F55\u53BB\u4F7F\u7528</h2>
<ul>
<li>\u79FB\u52A8\u5361\u589E\u503C\u4E1A\u52A1\u7684\u5929\u6C14\u9884\u62A5\u77ED\u4FE1\u3002</li>
</ul>
<img src="#design_patterns#publish_subscribe2.png" height="200" alt="\u5929\u6C14\u9884\u62A5\u77ED\u4FE1">
<ul>
<li>DOM\u4E8B\u4EF6</li>
</ul>
<pre><code class="language-javascript">document.body.addEventListener('click', function() {
    alert('you click')
}, false)
document.body.click()
</code></pre>
<p>\u8BA2\u9605\u8005\u8BA2\u9605\u901A\u77E5\uFF0C\u8C03\u5EA6\u4E2D\u5FC3\u7EF4\u62A4\u8BA2\u9605\u4E86\u8BE5\u901A\u77E5\u7684\u8BA2\u9605\u8005\u5217\u8868\u3002</p>
<p>\u53D1\u5E03\u8005\u53D1\u5E03\u901A\u77E5\uFF0C\u8C03\u5EA6\u4E2D\u5FC3\u904D\u5386\u8BE5\u901A\u77E5\u4E0A\u7684\u540D\u5355\uFF0C\u786E\u5B9A\u5E76\u901A\u77E5\u8BA2\u9605\u8005\u3002</p>
<h2>4. \u4E3E\u4E2A\u6817\u5B50</h2>
<blockquote>
<p>\u5B9E\u73B0\u552E\u697C\u5904\u7684\u8BA2\u9605\u4E0E\u901A\u77E5\u3002</p>
</blockquote>
<pre><code class="language-javascript">// \u5B9A\u4E49\u552E\u697C\u5904\uFF08\u8C03\u5EA6\u4E2D\u5FC3\uFF09\uFF1A
const salesOffices = {
    clientList: {}
}

// \u5B9E\u73B0\u8BA2\u9605\u8005\uFF1A
salesOffices.listen = function (key, fn) {
    this.clientList[key] ? this.clientList[key].push(fn) : this.clientList[key] = []
}

// \u5B9E\u73B0\u53D1\u5E03\u8005\uFF1A
salesOffices.trigger = function () {
    const key = Array.prototype.shift.call(arguments),
          fns = this.clientList[key]

    if (!fns || !fns.length) {
        return false
    }

    for(let i = 0, fn; fn = fns[i++];) {
        fn.apply(this, arguments)
    }
}

/* \u6D4B\u8BD5\u7528\u4F8B */
salesOffices.listen('squareMeter88', function (price) {
    console.log(\`88\u5E73\u7C73\u623F\u5B50\u4EF7\u683C\u4E3A\${price}\`)
})
salesOffices.listen('squareMeter110', function (price) {
    console.log(\`110\u5E73\u7C73\u623F\u5B50\u4EF7\u683C\u4E3A\${price}\`)
})

salesOffices.trigger('squareMeter88', 2000000)
salesOffices.trigger('squareMeter110', 3000000)
</code></pre>
<p>\u901A\u7528\u5B9E\u73B0\uFF1A</p>
<pre><code class="language-javascript">const Event = (function () {
	const clientList = {}
    let listen, trigger, remove

    listen = function (key, fn) {
        clientList[key] ? clientList[key].push(fn) : clientList[key] = []
    }

    trigger = function () {
        const key = Array.prototype.shift.call(arguments),
              fns = clientList[key]
        if (!fns || !fns.length) {
            return false
        }
        for(let i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments)
        }
    }

    remove = function (key, fn) {
        const fns = clientList[key]
        if (!fns) {
            return false
        }
        if (!fn) {
           fns.length = 0
        } else {
            for(let len = fns.length - 1; len &gt;= 0; len--) {
                fns[len] === fn &amp;&amp; fns.splice(len, 1)
            }
        }
    }

    return {
        listen,
        trigger,
        remove
    }
})()
</code></pre>
<h2>5. \u5F00\u53D1\u5B9E\u8DF5</h2>
<blockquote>
<p>\u5B9E\u73B0\u5546\u57CE\u7F51\u7AD9\u767B\u5F55</p>
</blockquote>
<p>\u5546\u57CE\u9879\u76EE\u901A\u5E38\u5305\u542B\u7684\u6A21\u5757\u6709\uFF1Aheader\u5934\u90E8\u3001nav\u5BFC\u822A\u3001\u6D88\u606F\u5217\u8868\u3001\u8D2D\u7269\u8F66\u7B49\u6A21\u5757\u3002</p>
<p>\u5728\u767B\u9646\u540E\uFF0C\u9700\u8981\u5237\u65B0\u5404\u6A21\u5757\u3002</p>
<p>\u5F88\u5BB9\u6613\u5C31\u5B9E\u73B0\u4E3A\uFF1A</p>
<pre><code class="language-javascript">login.success(function (data) {
    header.setAvatar(data.avatar)
    nav.setAvatar(data.avatar)
    message.refresh()
    cart.refresh()
})
</code></pre>
<p>\u540E\u6765\u65B0\u589E\u9700\u6C42\uFF0C\u7528\u6237\u767B\u5F55\u540E\u9488\u5BF9\u6240\u5728\u4F4D\u7F6E\u5237\u65B0\u5546\u54C1\u3002</p>
<pre><code class="language-javascript">login.success(function (data) {
    header.setAvatar(data.avatar)
    nav.setAvatar(data.avatar)
    message.refresh()
    cart.refresh()
    address.refresh() // \u65B0\u589E
})
</code></pre>
<p>\u4ECE\u4F8B\u5B50\u4E2D\u4E5F\u770B\u51FA\uFF0C\u8FD9\u6837\u9762\u5411\u8FC7\u7A0B\u7684\u7F16\u7A0B\u662F\u6709\u95EE\u9898\u7684\uFF0C\u6BCF\u6B21\u9700\u6C42\u53D8\u66F4\u90FD\u8981\u6539\u52A8\u65E7\u4EE3\u7801\uFF0C\u4E5F\u4E0D\u7B26\u5408\u5F00\u653E-\u5C01\u95ED\u539F\u5219\u3002</p>
<p>\u91C7\u7528\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u8FDB\u884C\u6539\u9020\uFF1A</p>
<p>\u8C03\u5EA6\u4E2D\u5FC3\uFF1A</p>
<pre><code class="language-javascript">// \u53C2\u8003\u4E0A\u9762\u901A\u7528\u5B9E\u73B0\u5373\u53EF
</code></pre>
<p>\u53D1\u5E03\u8005\uFF1A</p>
<pre><code class="language-javascript">this.$api.get('https://xxx.com/login').then(d =&gt; {
    login.trigger('loginSuccess', data)
})
</code></pre>
<p>\u8BA2\u9605\u8005\uFF1A</p>
<pre><code class="language-javascript">const header = (function () {
    login.listen('loginSuccess', function (data) {
        header.setAvatar(data.avatar)
    })
    
    return {
        setAvatar(avatar) {
            console.log('\u8BBE\u7F6E header\u6A21\u5757\u7684\u7528\u6237\u5934\u50CF')
    	}
    }    
})();

const nav = (function () {
    login.listen('loginSuccess', function (data) {
        nav.setAvatar(data.avatar)
    })
    
    return {
        setAvatar(avatar) {
            console.log('\u8BBE\u7F6E nav\u6A21\u5757\u7684\u7528\u6237\u5934\u50CF')
        }
    }
})()
// ...\u7565
</code></pre>
<p>\u540C\u7406\uFF0C\u65B0\u589E\u7684\u5237\u65B0\u4F4D\u7F6E\u9700\u6C42\uFF0C\u53EA\u9700</p>
<pre><code class="language-javascript">const address = (function () {
    login.listen('loginSuccess', function(data) {
      address.refresh(data)  
    })
    
    return {
        refresh(data) {
            console.log('\u5237\u65B0\u7528\u6237\u767B\u5F55\u7684\u4F4D\u7F6E\u4FE1\u606F')
        }
    }
})()
</code></pre>
<h2>6. \u8BC4\u4EF7</h2>
<blockquote>
<p>\u8BA9\u4E24\u4E2A\u5BF9\u8C61\u677E\u8026\u5408\u5730\u8054\u7CFB\u5728\u4E00\u8D77\uFF0C\u4E92\u76F8\u4E0D\u9700\u8981\u5404\u81EA\u7684\u60C5\u51B5\uFF0C\u53EA\u8981\u4E4B\u524D\u7EA6\u5B9A\u7684\u201C\u901A\u4FE1\u534F\u8BAE\u201D\uFF08\u4E8B\u4EF6\u540D\uFF09\u6CA1\u6709\u53D8\u5316\u3002</p>
<p>\u4F46\u9700\u8981\u6CE8\u610F\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u592A\u591A\u53D1\u5E03\u8BA2\u9605\u6765\u901A\u4FE1\uFF0C\u4F1A\u4F7F\u5F97\u5BF9\u8C61/\u6A21\u5757\u4E4B\u95F4\u7684\u5173\u8054\u6027\u88AB\u9690\u85CF\u3002</p>
<p>\u6700\u7EC8\u4E0D\u77E5\u9053\u8FD9\u4E2A\u4E8B\u4EF6\u662F\u6765\u81EA\u54EA\u91CC\uFF0C\u4E3A\u540E\u671F\u7684\u7EF4\u62A4\u5E26\u6765\u9EBB\u70E6\u3002</p>
</blockquote>
<h2>7. \u5173\u952E\u8BCD</h2>
<ul>
<li>\u53D1\u5E03\u8BA2\u9605</li>
<li>\u9690\u85CF\u5173\u8054\u6027</li>
</ul>
<h2>8. \u601D\u8003</h2>
<p>\u5FC5\u987B\u5148\u8BA2\u9605\u624D\u80FD\u53D1\u5E03\u5417\uFF1F
\u5982\u679C\u53D1\u5E03\u5728\u8BA2\u9605\u4E4B\u524D\uFF0C\u4F1A\u51FA\u73B0\u4EC0\u4E48\u95EE\u9898\uFF0C\u5E94\u8BE5\u600E\u4E48\u89E3\u51B3\uFF1F</p>
<p>\u540E\u679C\uFF1A</p>
<blockquote>
<p>\u8BA2\u9605\u8005\u8FD8\u672A\u521B\u5EFA\uFF0C\u53D1\u5E03\u7684\u6D88\u606F\u65E0\u4EBA\u63A5\u6536.</p>
</blockquote>
<p>\u6BD4\u5982\u4E4B\u524D\u7684\u5546\u57CE\u7F51\u7AD9\u4E2D\uFF0C\u83B7\u53D6\u5230\u7528\u6237\u4FE1\u606F\u4E4B\u540E\u624D\u80FD\u6E32\u67D3\u7528\u6237\u5BFC\u822A\u6A21\u5757\uFF0C\u800C\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u7684\u64CD\u4F5C\u662F\u4E00\u4E2A ajax\u8BF7\u6C42\u3002
\u5F53\u8BF7\u6C42\u6210\u529F\u540E\u4F1A\u53D1\u5E03\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u5728\u6B64\u4E4B\u524D\u8BA2\u9605\u4E86\u4E8B\u4EF6\u7684\u7528\u6237\u5BFC\u822A\u6A21\u5757\u5C31\u53EF\u4EE5\u63A5\u53D7\u5230\u8FD9\u4E9B\u7528\u6237\u4FE1\u606F\u3002
\u4F46\u8FD9\u53EA\u662F\u7406\u60F3\u7684\u72B6\u51B5\uFF0C\u56E0\u4E3A\u5F02\u6B65\u7684\u539F\u56E0\uFF0C\u6211\u4EEC\u4E0D\u80FD\u4FDD\u8BC1 ajax\u8BF7\u6C42\u8FD4\u56DE\u7684\u65F6\u95F4\uFF0C\u6709\u65F6\u5019\u5B83\u8FD4\u56DE\u5F97\u6BD4\u8F83\u5FEB\uFF0C\u800C\u6B64\u65F6\u7528\u6237\u5BFC\u822A\u6A21\u5757\u7684\u4EE3\u7801\u8FD8\u6CA1\u6709\u52A0\u8F7D\u597D\uFF08\u8FD8\u6CA1\u6709\u8BA2\u9605\u76F8\u5E94\u4E8B\u4EF6\uFF09\uFF0C\u7279\u522B\u662F\u5728\u7528\u4E86\u4E00\u4E9B\u6A21\u5757\u61D2\u52A0\u8F7D\u6280\u672F\u7684\u65F6\u5019\uFF0C\u8FD9\u662F\u5F88\u53EF\u80FD\u53D1\u751F\u7684\u4E8B\u60C5\u3002
\u89E3\u51B3\u65B9\u6CD5\u662F\uFF1A</p>
<blockquote>
<p>\u5EFA\u7ACB\u4E00\u4E2A\u5B58\u653E\u7684\u5806\u6808\uFF0C\u5C06\u53D1\u5E03\u7684\u4E8B\u4EF6\u5B58\u50A8\uFF08\u5982\u679C\u8FD8\u6CA1\u6709\u8BA2\u9605\u8005\uFF09\uFF0C\u7B49\u5230\u7EC8\u4E8E\u6709\u5BF9\u8C61\u6765\u8BA2\u9605\u8FD9\u4E9B\u4E8B\u4EF6\u65F6\uFF0C\u5C06\u5806\u6808\u904D\u5386\u5E76\u4F9D\u6B21\u6267\u884C\uFF0C\u91CD\u65B0\u53D1\u5E03\u3002</p>
</blockquote>
`,o=t('<h2>1. \u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u662F\u4EC0\u4E48</h2><blockquote><p>\u4E00\u4E2A\u5BF9\u8C61\u7684\u72B6\u6001\u53D1\u751F\u6539\u53D8\uFF0C\u53D1\u5E03\u8005\u901A\u77E5\u8C03\u5EA6\u4E2D\u5FC3\uFF0C\u518D\u7531\u8C03\u5EA6\u4E2D\u5FC3\u8C03\u5EA6\u6240\u6709\u8BA2\u9605\u8BE5\u901A\u77E5\u7684\u5BF9\u8C61\u3002</p></blockquote><h2>2. \u5982\u4F55\u53BB\u7406\u89E3</h2><blockquote><p>\u5C0F\u660E\u6700\u8FD1\u770B\u4E0A\u4E86\u4E00\u5957\u623F\u5B50\uFF0C\u5230\u4E86\u552E\u697C\u5904\u88AB\u544A\u77E5\u8BE5\u697C\u76D8\u7684\u623F\u5B50\u5DF2\u552E\u7F44\uFF0C\u4E8E\u662F\u628A\u7535\u8BDD\u53F7\u7801\u7559\u5728\u552E\u697C\u5904\u3002</p><p>\u552E\u697C\u7ECF\u7406\u7B54\u5E94\u4ED6\u65B0\u697C\u76D8\u4E00\u63A8\u51FA\uFF0C\u5C31\u7ACB\u523B\u53D1\u4FE1\u606F\u901A\u77E5\u4ED6\u3002</p><p>\u5C0F\u7EA2\uFF0C\u5C0F\u5F3A\u548C\u5C0F\u9F99\u4E5F\u662F\u548C\u5C0F\u660E\u4E00\u6837\u7684\u505A\u6CD5\u3002</p><p>\u65B0\u697C\u76D8\u63A8\u51FA\u53BB\u7684\u65F6\u5019\uFF0C\u552E\u697C\u7ECF\u7406\u904D\u5386\u82B1\u540D\u518C\u4E0A\u9762\u7684\u7535\u8BDD\u53F7\u7801\uFF0C\u4F9D\u6B21\u53D1\u4FE1\u606F\u901A\u77E5\u4ED6\u4EEC\u3002</p></blockquote><blockquote><img src="#design_patterns#publish_subscribe1.png" height="400" alt="\u697C\u76D8\u53D1\u5E03\u8BA2\u9605\u793A\u610F\u6A21\u5F0F\u56FE"></blockquote><h2>3. \u5982\u4F55\u53BB\u4F7F\u7528</h2><ul><li>\u79FB\u52A8\u5361\u589E\u503C\u4E1A\u52A1\u7684\u5929\u6C14\u9884\u62A5\u77ED\u4FE1\u3002</li></ul><img src="#design_patterns#publish_subscribe2.png" height="200" alt="\u5929\u6C14\u9884\u62A5\u77ED\u4FE1"><ul><li>DOM\u4E8B\u4EF6</li></ul>',9),r=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`document.body.addEventListener('click', function() {
    alert('you click')
}, false)
document.body.click()
`)],-1),i=n("p",null,"\u8BA2\u9605\u8005\u8BA2\u9605\u901A\u77E5\uFF0C\u8C03\u5EA6\u4E2D\u5FC3\u7EF4\u62A4\u8BA2\u9605\u4E86\u8BE5\u901A\u77E5\u7684\u8BA2\u9605\u8005\u5217\u8868\u3002",-1),p=n("p",null,"\u53D1\u5E03\u8005\u53D1\u5E03\u901A\u77E5\uFF0C\u8C03\u5EA6\u4E2D\u5FC3\u904D\u5386\u8BE5\u901A\u77E5\u4E0A\u7684\u540D\u5355\uFF0C\u786E\u5B9A\u5E76\u901A\u77E5\u8BA2\u9605\u8005\u3002",-1),u=n("h2",null,"4. \u4E3E\u4E2A\u6817\u5B50",-1),f=n("blockquote",null,[n("p",null,"\u5B9E\u73B0\u552E\u697C\u5904\u7684\u8BA2\u9605\u4E0E\u901A\u77E5\u3002")],-1),g=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`// \u5B9A\u4E49\u552E\u697C\u5904\uFF08\u8C03\u5EA6\u4E2D\u5FC3\uFF09\uFF1A
const salesOffices = {
    clientList: {}
}

// \u5B9E\u73B0\u8BA2\u9605\u8005\uFF1A
salesOffices.listen = function (key, fn) {
    this.clientList[key] ? this.clientList[key].push(fn) : this.clientList[key] = []
}

// \u5B9E\u73B0\u53D1\u5E03\u8005\uFF1A
salesOffices.trigger = function () {
    const key = Array.prototype.shift.call(arguments),
          fns = this.clientList[key]

    if (!fns || !fns.length) {
        return false
    }

    for(let i = 0, fn; fn = fns[i++];) {
        fn.apply(this, arguments)
    }
}

/* \u6D4B\u8BD5\u7528\u4F8B */
salesOffices.listen('squareMeter88', function (price) {
    console.log(\`88\u5E73\u7C73\u623F\u5B50\u4EF7\u683C\u4E3A\${price}\`)
})
salesOffices.listen('squareMeter110', function (price) {
    console.log(\`110\u5E73\u7C73\u623F\u5B50\u4EF7\u683C\u4E3A\${price}\`)
})

salesOffices.trigger('squareMeter88', 2000000)
salesOffices.trigger('squareMeter110', 3000000)
`)],-1),h=n("p",null,"\u901A\u7528\u5B9E\u73B0\uFF1A",-1),d=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`const Event = (function () {
	const clientList = {}
    let listen, trigger, remove

    listen = function (key, fn) {
        clientList[key] ? clientList[key].push(fn) : clientList[key] = []
    }

    trigger = function () {
        const key = Array.prototype.shift.call(arguments),
              fns = clientList[key]
        if (!fns || !fns.length) {
            return false
        }
        for(let i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments)
        }
    }

    remove = function (key, fn) {
        const fns = clientList[key]
        if (!fns) {
            return false
        }
        if (!fn) {
           fns.length = 0
        } else {
            for(let len = fns.length - 1; len >= 0; len--) {
                fns[len] === fn && fns.splice(len, 1)
            }
        }
    }

    return {
        listen,
        trigger,
        remove
    }
})()
`)],-1),v=n("h2",null,"5. \u5F00\u53D1\u5B9E\u8DF5",-1),_=n("blockquote",null,[n("p",null,"\u5B9E\u73B0\u5546\u57CE\u7F51\u7AD9\u767B\u5F55")],-1),k=n("p",null,"\u5546\u57CE\u9879\u76EE\u901A\u5E38\u5305\u542B\u7684\u6A21\u5757\u6709\uFF1Aheader\u5934\u90E8\u3001nav\u5BFC\u822A\u3001\u6D88\u606F\u5217\u8868\u3001\u8D2D\u7269\u8F66\u7B49\u6A21\u5757\u3002",-1),b=n("p",null,"\u5728\u767B\u9646\u540E\uFF0C\u9700\u8981\u5237\u65B0\u5404\u6A21\u5757\u3002",-1),y=n("p",null,"\u5F88\u5BB9\u6613\u5C31\u5B9E\u73B0\u4E3A\uFF1A",-1),m=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`login.success(function (data) {
    header.setAvatar(data.avatar)
    nav.setAvatar(data.avatar)
    message.refresh()
    cart.refresh()
})
`)],-1),q=n("p",null,"\u540E\u6765\u65B0\u589E\u9700\u6C42\uFF0C\u7528\u6237\u767B\u5F55\u540E\u9488\u5BF9\u6240\u5728\u4F4D\u7F6E\u5237\u65B0\u5546\u54C1\u3002",-1),L=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`login.success(function (data) {
    header.setAvatar(data.avatar)
    nav.setAvatar(data.avatar)
    message.refresh()
    cart.refresh()
    address.refresh() // \u65B0\u589E
})
`)],-1),j=n("p",null,"\u4ECE\u4F8B\u5B50\u4E2D\u4E5F\u770B\u51FA\uFF0C\u8FD9\u6837\u9762\u5411\u8FC7\u7A0B\u7684\u7F16\u7A0B\u662F\u6709\u95EE\u9898\u7684\uFF0C\u6BCF\u6B21\u9700\u6C42\u53D8\u66F4\u90FD\u8981\u6539\u52A8\u65E7\u4EE3\u7801\uFF0C\u4E5F\u4E0D\u7B26\u5408\u5F00\u653E-\u5C01\u95ED\u539F\u5219\u3002",-1),A=n("p",null,"\u91C7\u7528\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u8FDB\u884C\u6539\u9020\uFF1A",-1),O=n("p",null,"\u8C03\u5EA6\u4E2D\u5FC3\uFF1A",-1),x=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`// \u53C2\u8003\u4E0A\u9762\u901A\u7528\u5B9E\u73B0\u5373\u53EF
`)],-1),M=n("p",null,"\u53D1\u5E03\u8005\uFF1A",-1),S=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`this.$api.get('https://xxx.com/login').then(d => {
    login.trigger('loginSuccess', data)
})
`)],-1),$=n("p",null,"\u8BA2\u9605\u8005\uFF1A",-1),E=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`const header = (function () {
    login.listen('loginSuccess', function (data) {
        header.setAvatar(data.avatar)
    })
    
    return {
        setAvatar(avatar) {
            console.log('\u8BBE\u7F6E header\u6A21\u5757\u7684\u7528\u6237\u5934\u50CF')
    	}
    }    
})();

const nav = (function () {
    login.listen('loginSuccess', function (data) {
        nav.setAvatar(data.avatar)
    })
    
    return {
        setAvatar(avatar) {
            console.log('\u8BBE\u7F6E nav\u6A21\u5757\u7684\u7528\u6237\u5934\u50CF')
        }
    }
})()
// ...\u7565
`)],-1),B=n("p",null,"\u540C\u7406\uFF0C\u65B0\u589E\u7684\u5237\u65B0\u4F4D\u7F6E\u9700\u6C42\uFF0C\u53EA\u9700",-1),V=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`const address = (function () {
    login.listen('loginSuccess', function(data) {
      address.refresh(data)  
    })
    
    return {
        refresh(data) {
            console.log('\u5237\u65B0\u7528\u6237\u767B\u5F55\u7684\u4F4D\u7F6E\u4FE1\u606F')
        }
    }
})()
`)],-1),D=t("<h2>6. \u8BC4\u4EF7</h2><blockquote><p>\u8BA9\u4E24\u4E2A\u5BF9\u8C61\u677E\u8026\u5408\u5730\u8054\u7CFB\u5728\u4E00\u8D77\uFF0C\u4E92\u76F8\u4E0D\u9700\u8981\u5404\u81EA\u7684\u60C5\u51B5\uFF0C\u53EA\u8981\u4E4B\u524D\u7EA6\u5B9A\u7684\u201C\u901A\u4FE1\u534F\u8BAE\u201D\uFF08\u4E8B\u4EF6\u540D\uFF09\u6CA1\u6709\u53D8\u5316\u3002</p><p>\u4F46\u9700\u8981\u6CE8\u610F\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u592A\u591A\u53D1\u5E03\u8BA2\u9605\u6765\u901A\u4FE1\uFF0C\u4F1A\u4F7F\u5F97\u5BF9\u8C61/\u6A21\u5757\u4E4B\u95F4\u7684\u5173\u8054\u6027\u88AB\u9690\u85CF\u3002</p><p>\u6700\u7EC8\u4E0D\u77E5\u9053\u8FD9\u4E2A\u4E8B\u4EF6\u662F\u6765\u81EA\u54EA\u91CC\uFF0C\u4E3A\u540E\u671F\u7684\u7EF4\u62A4\u5E26\u6765\u9EBB\u70E6\u3002</p></blockquote><h2>7. \u5173\u952E\u8BCD</h2><ul><li>\u53D1\u5E03\u8BA2\u9605</li><li>\u9690\u85CF\u5173\u8054\u6027</li></ul><h2>8. \u601D\u8003</h2><p>\u5FC5\u987B\u5148\u8BA2\u9605\u624D\u80FD\u53D1\u5E03\u5417\uFF1F \u5982\u679C\u53D1\u5E03\u5728\u8BA2\u9605\u4E4B\u524D\uFF0C\u4F1A\u51FA\u73B0\u4EC0\u4E48\u95EE\u9898\uFF0C\u5E94\u8BE5\u600E\u4E48\u89E3\u51B3\uFF1F</p><p>\u540E\u679C\uFF1A</p><blockquote><p>\u8BA2\u9605\u8005\u8FD8\u672A\u521B\u5EFA\uFF0C\u53D1\u5E03\u7684\u6D88\u606F\u65E0\u4EBA\u63A5\u6536.</p></blockquote><p>\u6BD4\u5982\u4E4B\u524D\u7684\u5546\u57CE\u7F51\u7AD9\u4E2D\uFF0C\u83B7\u53D6\u5230\u7528\u6237\u4FE1\u606F\u4E4B\u540E\u624D\u80FD\u6E32\u67D3\u7528\u6237\u5BFC\u822A\u6A21\u5757\uFF0C\u800C\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u7684\u64CD\u4F5C\u662F\u4E00\u4E2A ajax\u8BF7\u6C42\u3002 \u5F53\u8BF7\u6C42\u6210\u529F\u540E\u4F1A\u53D1\u5E03\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u5728\u6B64\u4E4B\u524D\u8BA2\u9605\u4E86\u4E8B\u4EF6\u7684\u7528\u6237\u5BFC\u822A\u6A21\u5757\u5C31\u53EF\u4EE5\u63A5\u53D7\u5230\u8FD9\u4E9B\u7528\u6237\u4FE1\u606F\u3002 \u4F46\u8FD9\u53EA\u662F\u7406\u60F3\u7684\u72B6\u51B5\uFF0C\u56E0\u4E3A\u5F02\u6B65\u7684\u539F\u56E0\uFF0C\u6211\u4EEC\u4E0D\u80FD\u4FDD\u8BC1 ajax\u8BF7\u6C42\u8FD4\u56DE\u7684\u65F6\u95F4\uFF0C\u6709\u65F6\u5019\u5B83\u8FD4\u56DE\u5F97\u6BD4\u8F83\u5FEB\uFF0C\u800C\u6B64\u65F6\u7528\u6237\u5BFC\u822A\u6A21\u5757\u7684\u4EE3\u7801\u8FD8\u6CA1\u6709\u52A0\u8F7D\u597D\uFF08\u8FD8\u6CA1\u6709\u8BA2\u9605\u76F8\u5E94\u4E8B\u4EF6\uFF09\uFF0C\u7279\u522B\u662F\u5728\u7528\u4E86\u4E00\u4E9B\u6A21\u5757\u61D2\u52A0\u8F7D\u6280\u672F\u7684\u65F6\u5019\uFF0C\u8FD9\u662F\u5F88\u53EF\u80FD\u53D1\u751F\u7684\u4E8B\u60C5\u3002 \u89E3\u51B3\u65B9\u6CD5\u662F\uFF1A</p><blockquote><p>\u5EFA\u7ACB\u4E00\u4E2A\u5B58\u653E\u7684\u5806\u6808\uFF0C\u5C06\u53D1\u5E03\u7684\u4E8B\u4EF6\u5B58\u50A8\uFF08\u5982\u679C\u8FD8\u6CA1\u6709\u8BA2\u9605\u8005\uFF09\uFF0C\u7B49\u5230\u7EC8\u4E8E\u6709\u5BF9\u8C61\u6765\u8BA2\u9605\u8FD9\u4E9B\u4E8B\u4EF6\u65F6\uFF0C\u5C06\u5806\u6808\u904D\u5386\u5E76\u4F9D\u6B21\u6267\u884C\uFF0C\u91CD\u65B0\u53D1\u5E03\u3002</p></blockquote>",10);function s(e,N){return a(),l(c,null,[o,r,i,p,u,f,g,h,d,v,_,k,b,y,m,q,L,j,A,O,x,M,S,$,E,B,V,D],64)}const C={render:s};C.__hmrId="/Users/xianchenxy/Documents/Blog/posts/post/design_patterns/publish_subscribe_pattern.md";const U=e=>({components:e,render:s});export{C as VueComponent,U as VueComponentWith,Q as attributes,R as html};
