import"./vue-c0bdf325.js";import{b as n}from"./@vue-505977f7.js";const s={},c=`<h2>1. \u4EAB\u5143\u6A21\u5F0F\u662F\u4EC0\u4E48</h2>
<blockquote>
<p>\u8FD0\u7528\u5171\u4EAB\u6280\u672F\u6709\u6548\u5730\u652F\u6301\u5927\u91CF\u7EC6\u7C92\u5EA6\u7684\u5BF9\u8C61\u3002</p>
</blockquote>
<h2>2. \u5982\u4F55\u53BB\u7406\u89E3</h2>
<blockquote>
<p>\u8FD0\u7528\u5171\u4EAB\u6280\u672F\u51CF\u5C11\u521B\u5EFA\u5BF9\u8C61\u7684\u6570\u91CF\uFF0C\u4EE5\u51CF\u5C11\u5185\u5B58\u5360\u7528\u548C\u63D0\u9AD8\u6027\u80FD\u3002</p>
<p>\u5B83\u63D0\u4F9B\u4E86\u51CF\u5C11\u5BF9\u8C61\u6570\u91CF\u4ECE\u800C\u6539\u5584\u5E94\u7528\u6240\u9700\u7684\u5BF9\u8C61\u7ED3\u6784\u7684\u65B9\u5F0F\uFF0C\u56E0\u6B64\u5C5E\u4E8E\u7ED3\u6784\u578B\u6A21\u5F0F\u3002</p>
<p>\u5047\u8BBE\u6709\u4E00\u4E2A\u670D\u88C5\u5DE5\u5382\uFF0C\u76EE\u524D\u670950\u79CD\u7537\u5F0F\u670D\u88C5\u548C50\u79CD\u5973\u58EB\u670D\u88C5\uFF0C\u4E3A\u4E86\u63A8\u9500\u5546\u54C1\uFF0C\u5DE5\u5382\u51B3\u5B9A\u751F\u6210\u4E00\u4E9B\u5851\u6599\u6A21\u7279\u7A7F\u4E0A\u670D\u88C5\u62CD\u6210\u5E7F\u544A\u7167\u7247\u3002</p>
<p>\u6B63\u5E38\u60C5\u51B5\u4E0B\u9700\u898150\u4E2A\u7537\u6A21\u7279\u548C50\u4E2A\u5973\u6A21\u7279\uFF0C\u7136\u540E\u8BA9\u4ED6\u4EEC\u5206\u522B\u7A7F\u4E0A\u670D\u88C5\u6765\u62CD\u7167\u3002</p>
</blockquote>
<h2>3. \u5982\u4F55\u53BB\u4F7F\u7528</h2>
<blockquote>
<p>\u8FD0\u7528\u5171\u4EAB\u7684\u601D\u60F3\uFF0C\u5212\u5206\u51FA\u5185\u90E8\u72B6\u6001\u548C\u5916\u90E8\u72B6\u6001\u3002</p>
<p>1&gt; \u5185\u90E8\u72B6\u6001\uFF1A\u901A\u5E38\u5B58\u50A8\u4E8E\u5BF9\u8C61\u5185\u90E8\u3001\u53EF\u4EE5\u88AB\u5171\u4EAB\u3001\u72EC\u7ACB\u4E8E\u5177\u4F53\u573A\u666F\uFF0C\u4E00\u822C\u4E0D\u4F1A\u6539\u53D8\u3002</p>
<p>2&gt; \u5916\u90E8\u72B6\u6001\uFF1A\u53D6\u51B3\u4E8E\u5177\u4F53\u573A\u666F\uFF0C\u5E76\u6839\u636E\u573A\u666F\u800C\u53D8\u5316\uFF0C\u5916\u90E8\u72B6\u6001\u4E0D\u88AB\u5171\u4EAB\u3002</p>
<p>\u6839\u636E\u5185\u90E8\u72B6\u6001\u7684\u79CD\u7C7B\u6570\u76EE\uFF0C\u751F\u6210\u76F8\u5E94\u7684\u5BF9\u8C61\u4E2A\u6570\u3002</p>
<p>\u6839\u636E\u670D\u88C5\u7684\u6027\u522B\u6B3E\u5F0F\uFF0C\u5206\u4E3A\u7537\u58EB\u548C\u5973\u58EB\u670D\u88C5\uFF0C\u56E0\u6B64\u53EA\u9700\u8981\u751F\u4EA7\u4E00\u7537\u4E00\u5973\u6A21\u7279\uFF0C\u7136\u540E\u8BA9\u4ED6\u4EEC\u5206\u522B\u7A7F\u4E0A\u670D\u88C5\u6765\u62CD\u7167\u3002</p>
</blockquote>
<h2>4. \u4E3E\u4E2A\u6817\u5B50</h2>
<blockquote>
<p>\u6CBF\u7528\u4E0A\u9762\u7684\u5DE5\u5382\u9700\u8981\u6A21\u7279\u62CD\u7167\u7684\u9700\u6C42.</p>
<p>\u5B9E\u73B0\u4EE3\u7801\uFF1A</p>
<pre><code class="language-javascript">class Model {
    constructor (sex, clothes) {
        this.sex = sex
        this.clothes = clothes
    }

    takePhoto () {
        console.log(\`sex= \${this.sex} wear \${this.clothes}\`)
 }
}

for(let i = 1; i &lt;= 50; i++) {
    new Model('male', 'clothes' + i).takePhoto()
}
for(let j = 1; j &lt;= 50; j++) {
    new Model('female', 'clothes' + j).takePhoto()
}
</code></pre>
</blockquote>
<p>\u4EAB\u5143\u6A21\u5F0F\u6539\u9020\uFF1A</p>
<p>\u7531\u9700\u6C42\u53EF\u77E5\uFF0C\u670D\u88C5\u5206\u4E3A\u7537\u58EB\u548C\u5973\u58EB\u4E24\u79CD\u670D\u88C5\uFF0C\u6B64\u4F9D\u636E\u6027\u522B\u5212\u5206\uFF0C\u4E14\u4E0D\u968F\u7740\u573A\u666F\u53D8\u5316\u800C\u53D8\u5316\uFF08\u6362\u4E86\u6A21\u7279\u4E5F\u662F\u8981\u4E48\u7537\u8981\u4E48\u5973\uFF09\uFF0C\u800C\u670D\u88C5\u4F1A\u968F\u7740\u4E0D\u540C\u7684\u670D\u88C5\u800C\u53D8\u5316\u3002</p>
<p>\u56E0\u6B64\u5185\u90E8\u72B6\u6001\u4E3A\u6027\u522B sex\uFF0C\u5916\u90E8\u72B6\u6001\u4E3A\u670D\u88C5\u6B3E\u5F0F clothes\u3002</p>
<blockquote>
<pre><code class="language-javascript">class Model {
    constructor (sex, clothes) {
        this.sex = sex
    }

    takePhoto () {
        console.log(\`sex= \${this.sex} wear \${this.clothes}\`)
 }
}

const maleModel = new Model('male'),
      femaleModel = new Model('female')

for(let i = 1; i &lt;= 50; i++) {
    maleModel.clothes = 'clothes' + i
    maleModel.takePhoto()
}
for(let i = 1; i &lt;= 50; i++) {
    femaleModel.clothes = 'clothes' + j
    femaleModel.takePhoto()
}
</code></pre>
</blockquote>
<h2>5. \u5F00\u53D1\u5B9E\u8DF5</h2>
<blockquote>
<p>\u6587\u4EF6\u4E0A\u4F20\u9700\u6C42\uFF1A</p>
<pre><code class="language-html">&lt;section&gt;
 &lt;div&gt;
        &lt;input id=&quot;file&quot; type=&quot;file&quot; /&gt;
        &lt;el-button @click=&quot;fileUpload('flash')&quot;&gt;flash\u63D2\u4EF6\u4E0A\u4F20&lt;/el-button&gt;
 &lt;/div&gt;
 &lt;div&gt;
        &lt;input id=&quot;file2&quot; type=&quot;file&quot; /&gt;
        &lt;el-button @click=&quot;fileUpload('plugin')&quot;&gt;\u63D2\u4EF6\u4E0A\u4F20&lt;/el-button&gt;
 &lt;/div&gt;
&lt;/section&gt;
</code></pre>
<pre><code class="language-javascript">fileUpload (uploadType) {
    let fileList = document.getElementById('file').files
    fileList = [...fileList]
    if (fileList.length) {
        let params = {}
        fileList.forEach(file =&gt; {
            startUpload(uploadType, fileList);
        })
        this.$api.post('http://testdata.duoyioa.com/file_upload', { params })
    } else {
        console.log('\u8BF7\u9009\u62E9\u6587\u4EF6')
    }
}

created () {
    window.startUpload = function (uploadType, files) {
        let id = 0
        for(let i = 0, file, file = files[i++];) {
            const uploadObj = new Upload(uploadType, file, file.fileName, file.fileSize)
            uploadObj.init(id++) // \u552F\u4E00\u6027 id
    	}
	}
}
</code></pre>
<p>\u4EAB\u5143\u6A21\u5F0F\u91CD\u6784\uFF1A</p>
<p>\u7531\u9700\u6C42\u53EF\u77E5\uFF0C\u6587\u4EF6\u4E0A\u4F20\u7684\u65B9\u5F0F\u6709\u4E24\u79CD\uFF0C\u4E14\u4E0D\u968F\u7740\u6587\u4EF6\u7684\u4E0D\u540C\u800C\u53D8\u5316\uFF0C\u6587\u4EF6\u540D\u3001\u6587\u4EF6\u5927\u5C0F\u5728\u4E0D\u540C\u6587\u4EF6\u662F\u4E0D\u540C\u7684\u3002</p>
<p>\u56E0\u6B64\u5185\u90E8\u72B6\u6001\u4E3A\u6587\u4EF6\u4E0A\u4F20\u65B9\u5F0F uploadType\uFF0C\u5916\u90E8\u72B6\u6001\u4E3A fileName\u3001fileSize\u3002</p>
<pre><code class="language-javascript">class Upload {
    constructor (uploadType) {
        this.uploadType = uploadType
    }
}
</code></pre>
<p>\u5B9A\u4E49\u5DE5\u5382\u6765\u521B\u5EFA upload\u5BF9\u8C61</p>
<pre><code class="language-javascript">const UploadFactory = (function () {
 const createdFlyWeightObj = {}
    return {
        create (uploadType) {
         return createdFlyWeightObj[uploadType]
                ? createdFlyWeightObj[uploadType]
            : createdFlyWeightObj[uploadType] = new Upload(uploadType)
        }
    }
})()
</code></pre>
<p>\u5B9A\u4E49\u7BA1\u7406\u5668\u5C01\u88C5\u5916\u90E8\u72B6\u6001</p>
<pre><code class="language-javascript">const uploadManager = (function () {
 const uploadDatabase = {}
    return {
        add (id, uploadType, fileName, fileSize) {
            uploadDatabase[id] = {
                fileName,
             fileSize
            }
            return UploadFactory.craete(uploadType)
        },
        setExternalState (id, flyWeightObj) {
            const uploadData = uploadDatabase[id]
            for(let i in uploadData) {
                flyWeightObj[i] = uploadData[i]
            }
        }
    }
})()
</code></pre>
<p>\u5F00\u59CB\u89E6\u53D1\u4E0A\u4F20</p>
<pre><code class="language-javascript">let id = 0
window.startUpload = function (uploadType, files) {
    for(let i = 0, file; file = files[i++];) {
        const uploadObj = uploadManager.add(++id, uploadType, file.fileName, file.fileSize)
        uploadManager.setExternalState(id, uploadObj)
    }
}
</code></pre>
</blockquote>
<h2>6. \u8BC4\u4EF7</h2>
<blockquote>
<p>\u4EAB\u5143\u6A21\u5F0F\u662F\u4E00\u79CD\u5F88\u597D\u7684\u6027\u80FD\u4F18\u5316\u65B9\u6848\uFF0C\u53EF\u4EE5\u89E3\u51B3\u5B58\u5728\u5927\u91CF\u5BF9\u8C61\u5BFC\u81F4\u5185\u5B58\u5360\u7528\u9AD8\u7684\u95EE\u9898\uFF0C</p>
<p>\u4F46\u663E\u800C\u6613\u89C1\uFF0C\u7ED9\u6A21\u5757\u5E26\u6765\u4E86\u590D\u6742\u5EA6\uFF0C\u9700\u8981\u591A\u7EF4\u62A4\u4E00\u4E2A\u5DE5\u5382\u5BF9\u8C61\u548C\u7BA1\u7406\u5668\u3002</p>
</blockquote>
<h2>7. \u62D3\u5C55</h2>
<blockquote>
<p>\u5E76\u4E0D\u662F\u8FD0\u7528\u4E86\u5171\u4EAB\u7684\u601D\u60F3\u5C31\u662F\u4F7F\u7528\u4E86\u4EAB\u5143\u6A21\u5F0F\u3002</p>
<p>\u6BD4\u5982\u5BF9\u8C61\u6C60\u6280\u672F\uFF0C\u4E5F\u8FD0\u7528\u4E86\u5171\u4EAB\u7684\u601D\u60F3\uFF0C\u4F46\u5B83\u6CA1\u6709\u5206\u79BB\u5185\u90E8\u72B6\u6001\u548C\u5916\u90E8\u72B6\u6001\u3002</p>
</blockquote>
`,l=n(`<h2>1. \u4EAB\u5143\u6A21\u5F0F\u662F\u4EC0\u4E48</h2><blockquote><p>\u8FD0\u7528\u5171\u4EAB\u6280\u672F\u6709\u6548\u5730\u652F\u6301\u5927\u91CF\u7EC6\u7C92\u5EA6\u7684\u5BF9\u8C61\u3002</p></blockquote><h2>2. \u5982\u4F55\u53BB\u7406\u89E3</h2><blockquote><p>\u8FD0\u7528\u5171\u4EAB\u6280\u672F\u51CF\u5C11\u521B\u5EFA\u5BF9\u8C61\u7684\u6570\u91CF\uFF0C\u4EE5\u51CF\u5C11\u5185\u5B58\u5360\u7528\u548C\u63D0\u9AD8\u6027\u80FD\u3002</p><p>\u5B83\u63D0\u4F9B\u4E86\u51CF\u5C11\u5BF9\u8C61\u6570\u91CF\u4ECE\u800C\u6539\u5584\u5E94\u7528\u6240\u9700\u7684\u5BF9\u8C61\u7ED3\u6784\u7684\u65B9\u5F0F\uFF0C\u56E0\u6B64\u5C5E\u4E8E\u7ED3\u6784\u578B\u6A21\u5F0F\u3002</p><p>\u5047\u8BBE\u6709\u4E00\u4E2A\u670D\u88C5\u5DE5\u5382\uFF0C\u76EE\u524D\u670950\u79CD\u7537\u5F0F\u670D\u88C5\u548C50\u79CD\u5973\u58EB\u670D\u88C5\uFF0C\u4E3A\u4E86\u63A8\u9500\u5546\u54C1\uFF0C\u5DE5\u5382\u51B3\u5B9A\u751F\u6210\u4E00\u4E9B\u5851\u6599\u6A21\u7279\u7A7F\u4E0A\u670D\u88C5\u62CD\u6210\u5E7F\u544A\u7167\u7247\u3002</p><p>\u6B63\u5E38\u60C5\u51B5\u4E0B\u9700\u898150\u4E2A\u7537\u6A21\u7279\u548C50\u4E2A\u5973\u6A21\u7279\uFF0C\u7136\u540E\u8BA9\u4ED6\u4EEC\u5206\u522B\u7A7F\u4E0A\u670D\u88C5\u6765\u62CD\u7167\u3002</p></blockquote><h2>3. \u5982\u4F55\u53BB\u4F7F\u7528</h2><blockquote><p>\u8FD0\u7528\u5171\u4EAB\u7684\u601D\u60F3\uFF0C\u5212\u5206\u51FA\u5185\u90E8\u72B6\u6001\u548C\u5916\u90E8\u72B6\u6001\u3002</p><p>1&gt; \u5185\u90E8\u72B6\u6001\uFF1A\u901A\u5E38\u5B58\u50A8\u4E8E\u5BF9\u8C61\u5185\u90E8\u3001\u53EF\u4EE5\u88AB\u5171\u4EAB\u3001\u72EC\u7ACB\u4E8E\u5177\u4F53\u573A\u666F\uFF0C\u4E00\u822C\u4E0D\u4F1A\u6539\u53D8\u3002</p><p>2&gt; \u5916\u90E8\u72B6\u6001\uFF1A\u53D6\u51B3\u4E8E\u5177\u4F53\u573A\u666F\uFF0C\u5E76\u6839\u636E\u573A\u666F\u800C\u53D8\u5316\uFF0C\u5916\u90E8\u72B6\u6001\u4E0D\u88AB\u5171\u4EAB\u3002</p><p>\u6839\u636E\u5185\u90E8\u72B6\u6001\u7684\u79CD\u7C7B\u6570\u76EE\uFF0C\u751F\u6210\u76F8\u5E94\u7684\u5BF9\u8C61\u4E2A\u6570\u3002</p><p>\u6839\u636E\u670D\u88C5\u7684\u6027\u522B\u6B3E\u5F0F\uFF0C\u5206\u4E3A\u7537\u58EB\u548C\u5973\u58EB\u670D\u88C5\uFF0C\u56E0\u6B64\u53EA\u9700\u8981\u751F\u4EA7\u4E00\u7537\u4E00\u5973\u6A21\u7279\uFF0C\u7136\u540E\u8BA9\u4ED6\u4EEC\u5206\u522B\u7A7F\u4E0A\u670D\u88C5\u6765\u62CD\u7167\u3002</p></blockquote><h2>4. \u4E3E\u4E2A\u6817\u5B50</h2><blockquote><p>\u6CBF\u7528\u4E0A\u9762\u7684\u5DE5\u5382\u9700\u8981\u6A21\u7279\u62CD\u7167\u7684\u9700\u6C42.</p><p>\u5B9E\u73B0\u4EE3\u7801\uFF1A</p><pre><code class="language-javascript">class Model {
    constructor (sex, clothes) {
        this.sex = sex
        this.clothes = clothes
    }

    takePhoto () {
        console.log(\`sex= \${this.sex} wear \${this.clothes}\`)
 }
}

for(let i = 1; i &lt;= 50; i++) {
    new Model(&#39;male&#39;, &#39;clothes&#39; + i).takePhoto()
}
for(let j = 1; j &lt;= 50; j++) {
    new Model(&#39;female&#39;, &#39;clothes&#39; + j).takePhoto()
}
</code></pre></blockquote><p>\u4EAB\u5143\u6A21\u5F0F\u6539\u9020\uFF1A</p><p>\u7531\u9700\u6C42\u53EF\u77E5\uFF0C\u670D\u88C5\u5206\u4E3A\u7537\u58EB\u548C\u5973\u58EB\u4E24\u79CD\u670D\u88C5\uFF0C\u6B64\u4F9D\u636E\u6027\u522B\u5212\u5206\uFF0C\u4E14\u4E0D\u968F\u7740\u573A\u666F\u53D8\u5316\u800C\u53D8\u5316\uFF08\u6362\u4E86\u6A21\u7279\u4E5F\u662F\u8981\u4E48\u7537\u8981\u4E48\u5973\uFF09\uFF0C\u800C\u670D\u88C5\u4F1A\u968F\u7740\u4E0D\u540C\u7684\u670D\u88C5\u800C\u53D8\u5316\u3002</p><p>\u56E0\u6B64\u5185\u90E8\u72B6\u6001\u4E3A\u6027\u522B sex\uFF0C\u5916\u90E8\u72B6\u6001\u4E3A\u670D\u88C5\u6B3E\u5F0F clothes\u3002</p><blockquote><pre><code class="language-javascript">class Model {
    constructor (sex, clothes) {
        this.sex = sex
    }

    takePhoto () {
        console.log(\`sex= \${this.sex} wear \${this.clothes}\`)
 }
}

const maleModel = new Model(&#39;male&#39;),
      femaleModel = new Model(&#39;female&#39;)

for(let i = 1; i &lt;= 50; i++) {
    maleModel.clothes = &#39;clothes&#39; + i
    maleModel.takePhoto()
}
for(let i = 1; i &lt;= 50; i++) {
    femaleModel.clothes = &#39;clothes&#39; + j
    femaleModel.takePhoto()
}
</code></pre></blockquote><h2>5. \u5F00\u53D1\u5B9E\u8DF5</h2><blockquote><p>\u6587\u4EF6\u4E0A\u4F20\u9700\u6C42\uFF1A</p><pre><code class="language-html">&lt;section&gt;
 &lt;div&gt;
        &lt;input id=&quot;file&quot; type=&quot;file&quot; /&gt;
        &lt;el-button @click=&quot;fileUpload(&#39;flash&#39;)&quot;&gt;flash\u63D2\u4EF6\u4E0A\u4F20&lt;/el-button&gt;
 &lt;/div&gt;
 &lt;div&gt;
        &lt;input id=&quot;file2&quot; type=&quot;file&quot; /&gt;
        &lt;el-button @click=&quot;fileUpload(&#39;plugin&#39;)&quot;&gt;\u63D2\u4EF6\u4E0A\u4F20&lt;/el-button&gt;
 &lt;/div&gt;
&lt;/section&gt;
</code></pre><pre><code class="language-javascript">fileUpload (uploadType) {
    let fileList = document.getElementById(&#39;file&#39;).files
    fileList = [...fileList]
    if (fileList.length) {
        let params = {}
        fileList.forEach(file =&gt; {
            startUpload(uploadType, fileList);
        })
        this.$api.post(&#39;http://testdata.duoyioa.com/file_upload&#39;, { params })
    } else {
        console.log(&#39;\u8BF7\u9009\u62E9\u6587\u4EF6&#39;)
    }
}

created () {
    window.startUpload = function (uploadType, files) {
        let id = 0
        for(let i = 0, file, file = files[i++];) {
            const uploadObj = new Upload(uploadType, file, file.fileName, file.fileSize)
            uploadObj.init(id++) // \u552F\u4E00\u6027 id
    	}
	}
}
</code></pre><p>\u4EAB\u5143\u6A21\u5F0F\u91CD\u6784\uFF1A</p><p>\u7531\u9700\u6C42\u53EF\u77E5\uFF0C\u6587\u4EF6\u4E0A\u4F20\u7684\u65B9\u5F0F\u6709\u4E24\u79CD\uFF0C\u4E14\u4E0D\u968F\u7740\u6587\u4EF6\u7684\u4E0D\u540C\u800C\u53D8\u5316\uFF0C\u6587\u4EF6\u540D\u3001\u6587\u4EF6\u5927\u5C0F\u5728\u4E0D\u540C\u6587\u4EF6\u662F\u4E0D\u540C\u7684\u3002</p><p>\u56E0\u6B64\u5185\u90E8\u72B6\u6001\u4E3A\u6587\u4EF6\u4E0A\u4F20\u65B9\u5F0F uploadType\uFF0C\u5916\u90E8\u72B6\u6001\u4E3A fileName\u3001fileSize\u3002</p><pre><code class="language-javascript">class Upload {
    constructor (uploadType) {
        this.uploadType = uploadType
    }
}
</code></pre><p>\u5B9A\u4E49\u5DE5\u5382\u6765\u521B\u5EFA upload\u5BF9\u8C61</p><pre><code class="language-javascript">const UploadFactory = (function () {
 const createdFlyWeightObj = {}
    return {
        create (uploadType) {
         return createdFlyWeightObj[uploadType]
                ? createdFlyWeightObj[uploadType]
            : createdFlyWeightObj[uploadType] = new Upload(uploadType)
        }
    }
})()
</code></pre><p>\u5B9A\u4E49\u7BA1\u7406\u5668\u5C01\u88C5\u5916\u90E8\u72B6\u6001</p><pre><code class="language-javascript">const uploadManager = (function () {
 const uploadDatabase = {}
    return {
        add (id, uploadType, fileName, fileSize) {
            uploadDatabase[id] = {
                fileName,
             fileSize
            }
            return UploadFactory.craete(uploadType)
        },
        setExternalState (id, flyWeightObj) {
            const uploadData = uploadDatabase[id]
            for(let i in uploadData) {
                flyWeightObj[i] = uploadData[i]
            }
        }
    }
})()
</code></pre><p>\u5F00\u59CB\u89E6\u53D1\u4E0A\u4F20</p><pre><code class="language-javascript">let id = 0
window.startUpload = function (uploadType, files) {
    for(let i = 0, file; file = files[i++];) {
        const uploadObj = uploadManager.add(++id, uploadType, file.fileName, file.fileSize)
        uploadManager.setExternalState(id, uploadObj)
    }
}
</code></pre></blockquote><h2>6. \u8BC4\u4EF7</h2><blockquote><p>\u4EAB\u5143\u6A21\u5F0F\u662F\u4E00\u79CD\u5F88\u597D\u7684\u6027\u80FD\u4F18\u5316\u65B9\u6848\uFF0C\u53EF\u4EE5\u89E3\u51B3\u5B58\u5728\u5927\u91CF\u5BF9\u8C61\u5BFC\u81F4\u5185\u5B58\u5360\u7528\u9AD8\u7684\u95EE\u9898\uFF0C</p><p>\u4F46\u663E\u800C\u6613\u89C1\uFF0C\u7ED9\u6A21\u5757\u5E26\u6765\u4E86\u590D\u6742\u5EA6\uFF0C\u9700\u8981\u591A\u7EF4\u62A4\u4E00\u4E2A\u5DE5\u5382\u5BF9\u8C61\u548C\u7BA1\u7406\u5668\u3002</p></blockquote><h2>7. \u62D3\u5C55</h2><blockquote><p>\u5E76\u4E0D\u662F\u8FD0\u7528\u4E86\u5171\u4EAB\u7684\u601D\u60F3\u5C31\u662F\u4F7F\u7528\u4E86\u4EAB\u5143\u6A21\u5F0F\u3002</p><p>\u6BD4\u5982\u5BF9\u8C61\u6C60\u6280\u672F\uFF0C\u4E5F\u8FD0\u7528\u4E86\u5171\u4EAB\u7684\u601D\u60F3\uFF0C\u4F46\u5B83\u6CA1\u6709\u5206\u79BB\u5185\u90E8\u72B6\u6001\u548C\u5916\u90E8\u72B6\u6001\u3002</p></blockquote>`,18);function t(e,a){return l}const o={render:t};o.__hmrId="/Users/xianchenxy/Documents/Blog/posts/post/design_patterns/flyweight_pattern.md";const d=e=>({components:e,render:t});export{o as VueComponent,d as VueComponentWith,s as attributes,c as html};
