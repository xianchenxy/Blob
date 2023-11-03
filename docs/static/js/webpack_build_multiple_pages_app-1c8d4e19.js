import"./vue-c0bdf325.js";import{o as s,c as i,Q as c,a as t,a5 as n}from"./@vue-505977f7.js";const _={},w=`<h1>\u5B9E\u73B0\u591A\u9875\u5E94\u7528\u6253\u5305\u914D\u7F6E</h1>
<p>\u8FD9\u662F\u6211\u4EEC\u7684\u76EE\u5F55\u7ED3\u6784</p>
<pre><code class="language-text">|-genTree
  |-App.vue
  |-index.html  &lt;= \u9875\u9762\u6A21\u677Fhtml
  |-index.js    &lt;= \u4E3B\u5165\u53E3\u6587\u4EF6
  |-package.json
  |-pages       &lt;= \u89C6\u56FE\u76EE\u5F55
  |  |-search
  |  |  |-index.js
  |  |  |-search.vue
  |-pnpm-lock.yaml
  |-webpack.dev.config.js
  |-webpack.prod.config.js
</code></pre>
<p>\u591A\u9875\u5E94\u7528\u6253\u5305\u5173\u952E\u7684\u914D\u7F6E\u70B9\u662F2\u4E2A\uFF0C\u4E00\u4E2A\u662F\u5165\u53E3<code>entry</code>\uFF0C\u53E6\u4E00\u4E2A\u662F<code>plugin</code>\u3002
<br />\u5148\u770B\u5355\u9875\u5E94\u7528\u65F6\u7684\u914D\u7F6E</p>
<pre><code class="language-js">module.exports = {
	//...
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: 'body',
			minify: { // \u81EA\u5B9A\u4E49\u8981\u538B\u7F29\u7684\u5185\u5BB9
				html5: true,
				collapseWhitespace: true,
				preserveLineBreaks: false,
				removeComments: false,
				minifyCSS: true,
				minifyJS: true
			},
			scriptLoading: 'module'
		})
        // ...
	]
};
</code></pre>
<p>\u4E0D\u96BE\u53D1\u73B0\uFF0C\u53EA\u9700\u7ED9<code>entry</code>\u5B57\u6BB5\u589E\u52A0\u591A\u4E2A\u5165\u53E3\uFF0C<code>plugin</code>\u5904\u591A\u589E\u52A0\u4E2A<code>html-webpack-plugin</code>\u63D2\u4EF6\u5373\u53EF</p>
<pre><code class="language-js">module.exports = {
	//...
	entry: {
        index: './src/index.js',
        search: './src/pages/search/index.js' // +
    },
	plugins: [
		// ...
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: 'body',
			filename: 'index',
			chunks: 'index', // + \u786E\u5B9A\u54EA\u4E9B chunks\u8981\u5305\u542B\u5728\u8FD9\u4E2A html\u6587\u4EF6\u4E2D
			minify: {
				html5: true,
				collapseWhitespace: true,
				preserveLineBreaks: false,
				removeComments: false,
				minifyCSS: true,
				minifyJS: true
			},
			scriptLoading: 'module'
		}), 
		// +++
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: 'body',
			filename: 'serch',
			chunks: 'search', // + \u786E\u5B9A\u54EA\u4E9B chunks\u8981\u5305\u542B\u5728\u8FD9\u4E2A html\u6587\u4EF6\u4E2D
			minify: {
				html5: true,
				collapseWhitespace: true,
				preserveLineBreaks: false,
				removeComments: false,
				minifyCSS: true,
				minifyJS: true
			},
			scriptLoading: 'module'
		})
		// +++
	]
}
</code></pre>
<p>\u81F3\u6B64\u5DF2\u5B9E\u73B0\u4E86\u591A\u9875\u5E94\u7528\u7684\u6253\u5305\u914D\u7F6E\u3002
\u4F46\u662F\u6211\u4EEC\u5F88\u5FEB\u4F1A\u53D1\u73B0\uFF0C\u5982\u679C\u9875\u9762\u8FC7\u591A\uFF0C\u6BD4\u5982\u8FD9\u6837\u7684\u76EE\u5F55\u7ED3\u6784</p>
<pre><code class="language-text">|-genTree
  |-App.vue
  |-index.html
  |-index.js
  |-package.json
  |-pages
  |  |-list     &lt;= \u591A\u4E2A\u5165\u53E3
  |  |  |-index.js
  |  |  |-list.vue
  |  |-search   &lt;= \u591A\u4E2A\u5165\u53E3
  |  |  |-index.js
  |  |  |-search.vue
  |-pnpm-lock.yaml
  |-webpack.dev.config.js
  |-webpack.prod.config.js
</code></pre>
<p>\u8FD9\u6837\u6BCF\u6B21\u65B0\u589E\u9875\u9762\u90FD\u9700\u8981\u624B\u52A8\u65B0\u589E\u4E00\u6B21\u914D\u7F6E\uFF0C\u8FD9\u4E2A\u64CD\u4F5C\u5C31\u8FC7\u4E8E\u7E41\u7410\u91CD\u590D\u4E86\u3002
\u90A3\u6709\u6CA1\u6709\u4EC0\u4E48\u7B80\u4FBF\u7684\u65B9\u5F0F\u5462\uFF1F\u7B54\u6848\u81EA\u7136\u662F\u6709\u7684\u3002
\u501F\u52A9<a href="https://www.npmjs.com/package/glob"><code>glob</code></a>\u5E93\uFF0C\u6211\u4EEC\u53EF\u4EE5\u52A8\u6001\u5BFC\u5165\u591A\u9875\u5E94\u7528\u76EE\u5F55\u4E0B\u7684\u5165\u53E3\u6587\u4EF6\uFF0C\u7EC4\u7EC7\u751F\u6210<code>entry</code>\u548C<code>plugin</code>\u5373\u53EF\u3002</p>
<pre><code class="language-js">const {globSync} = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let files = ['index'];
// \u62FC\u63A5\uFF0C\u83B7\u53D6\u5230\u6240\u6709\u7684\u89C6\u56FE\u5165\u53E3
files = files.concat(globSync(path.join(__dirname, './src/pages/*/index.js'), {withFileTypes: true})
    .map(file =&gt; file.parent.name));
const multiplePages = {entry: {}, htmlWebpackPlugin: []};
files.reduce((obj, name) =&gt; {
	obj.entry[name] = name === 'index' ? './src/index.js' : \`./src/pages/\${name}/index.js\`;
	obj.htmlWebpackPlugin.push(new HtmlWebpackPlugin({
		template: './index.html',  // \u8FD9\u91CC\u5171\u7528\u4E00\u4E2A\u6A21\u677F
		filename: \`\${name}.html\`, // \u751F\u6210\u7684 html\u540D\u5B57
		inject: 'body',
		chunks: [name], // \u751F\u6210\u7684 html\u9875\u9762\u5305\u542B\u54EA\u4E9B chunks
		minify: {
			html5: true,
			collapseWhitespace: true,
			preserveLineBreaks: false,
			removeComments: false,
			minifyCSS: true,
			minifyJS: true
		},
		scriptLoading: 'module'
	}));
	return obj;
}, multiplePages);

module.exports = {
	//...
	entry: multiplePages.entry,
	plugins: [
		// ...
		multiplePages.htmlWebpackPlugin
	]
};
</code></pre>
<p>\u81F3\u6B64\u7ED3\u675F\u3002</p>
`,a=t("h1",null,"\u5B9E\u73B0\u591A\u9875\u5E94\u7528\u6253\u5305\u914D\u7F6E",-1),p=t("p",null,"\u8FD9\u662F\u6211\u4EEC\u7684\u76EE\u5F55\u7ED3\u6784",-1),r=t("pre",null,[t("code",{class:"language-text","v-pre":"true"},`|-genTree
  |-App.vue
  |-index.html  <= \u9875\u9762\u6A21\u677Fhtml
  |-index.js    <= \u4E3B\u5165\u53E3\u6587\u4EF6
  |-package.json
  |-pages       <= \u89C6\u56FE\u76EE\u5F55
  |  |-search
  |  |  |-index.js
  |  |  |-search.vue
  |-pnpm-lock.yaml
  |-webpack.dev.config.js
  |-webpack.prod.config.js
`)],-1),o=t("p",null,[n("\u591A\u9875\u5E94\u7528\u6253\u5305\u5173\u952E\u7684\u914D\u7F6E\u70B9\u662F2\u4E2A\uFF0C\u4E00\u4E2A\u662F\u5165\u53E3"),t("code",null,"entry"),n("\uFF0C\u53E6\u4E00\u4E2A\u662F"),t("code",null,"plugin"),n("\u3002 "),t("br"),n("\u5148\u770B\u5355\u9875\u5E94\u7528\u65F6\u7684\u914D\u7F6E")],-1),m=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`module.exports = {
	//...
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: 'body',
			minify: { // \u81EA\u5B9A\u4E49\u8981\u538B\u7F29\u7684\u5185\u5BB9
				html5: true,
				collapseWhitespace: true,
				preserveLineBreaks: false,
				removeComments: false,
				minifyCSS: true,
				minifyJS: true
			},
			scriptLoading: 'module'
		})
        // ...
	]
};
`)],-1),u=t("p",null,[n("\u4E0D\u96BE\u53D1\u73B0\uFF0C\u53EA\u9700\u7ED9"),t("code",null,"entry"),n("\u5B57\u6BB5\u589E\u52A0\u591A\u4E2A\u5165\u53E3\uFF0C"),t("code",null,"plugin"),n("\u5904\u591A\u589E\u52A0\u4E2A"),t("code",null,"html-webpack-plugin"),n("\u63D2\u4EF6\u5373\u53EF")],-1),d=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`module.exports = {
	//...
	entry: {
        index: './src/index.js',
        search: './src/pages/search/index.js' // +
    },
	plugins: [
		// ...
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: 'body',
			filename: 'index',
			chunks: 'index', // + \u786E\u5B9A\u54EA\u4E9B chunks\u8981\u5305\u542B\u5728\u8FD9\u4E2A html\u6587\u4EF6\u4E2D
			minify: {
				html5: true,
				collapseWhitespace: true,
				preserveLineBreaks: false,
				removeComments: false,
				minifyCSS: true,
				minifyJS: true
			},
			scriptLoading: 'module'
		}), 
		// +++
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: 'body',
			filename: 'serch',
			chunks: 'search', // + \u786E\u5B9A\u54EA\u4E9B chunks\u8981\u5305\u542B\u5728\u8FD9\u4E2A html\u6587\u4EF6\u4E2D
			minify: {
				html5: true,
				collapseWhitespace: true,
				preserveLineBreaks: false,
				removeComments: false,
				minifyCSS: true,
				minifyJS: true
			},
			scriptLoading: 'module'
		})
		// +++
	]
}
`)],-1),g=t("p",null,"\u81F3\u6B64\u5DF2\u5B9E\u73B0\u4E86\u591A\u9875\u5E94\u7528\u7684\u6253\u5305\u914D\u7F6E\u3002 \u4F46\u662F\u6211\u4EEC\u5F88\u5FEB\u4F1A\u53D1\u73B0\uFF0C\u5982\u679C\u9875\u9762\u8FC7\u591A\uFF0C\u6BD4\u5982\u8FD9\u6837\u7684\u76EE\u5F55\u7ED3\u6784",-1),h=t("pre",null,[t("code",{class:"language-text","v-pre":"true"},`|-genTree
  |-App.vue
  |-index.html
  |-index.js
  |-package.json
  |-pages
  |  |-list     <= \u591A\u4E2A\u5165\u53E3
  |  |  |-index.js
  |  |  |-list.vue
  |  |-search   <= \u591A\u4E2A\u5165\u53E3
  |  |  |-index.js
  |  |  |-search.vue
  |-pnpm-lock.yaml
  |-webpack.dev.config.js
  |-webpack.prod.config.js
`)],-1),f=t("p",null,[n("\u8FD9\u6837\u6BCF\u6B21\u65B0\u589E\u9875\u9762\u90FD\u9700\u8981\u624B\u52A8\u65B0\u589E\u4E00\u6B21\u914D\u7F6E\uFF0C\u8FD9\u4E2A\u64CD\u4F5C\u5C31\u8FC7\u4E8E\u7E41\u7410\u91CD\u590D\u4E86\u3002 \u90A3\u6709\u6CA1\u6709\u4EC0\u4E48\u7B80\u4FBF\u7684\u65B9\u5F0F\u5462\uFF1F\u7B54\u6848\u81EA\u7136\u662F\u6709\u7684\u3002 \u501F\u52A9"),t("a",{href:"https://www.npmjs.com/package/glob"},[t("code",null,"glob")]),n("\u5E93\uFF0C\u6211\u4EEC\u53EF\u4EE5\u52A8\u6001\u5BFC\u5165\u591A\u9875\u5E94\u7528\u76EE\u5F55\u4E0B\u7684\u5165\u53E3\u6587\u4EF6\uFF0C\u7EC4\u7EC7\u751F\u6210"),t("code",null,"entry"),n("\u548C"),t("code",null,"plugin"),n("\u5373\u53EF\u3002")],-1),k=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`const {globSync} = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let files = ['index'];
// \u62FC\u63A5\uFF0C\u83B7\u53D6\u5230\u6240\u6709\u7684\u89C6\u56FE\u5165\u53E3
files = files.concat(globSync(path.join(__dirname, './src/pages/*/index.js'), {withFileTypes: true})
    .map(file => file.parent.name));
const multiplePages = {entry: {}, htmlWebpackPlugin: []};
files.reduce((obj, name) => {
	obj.entry[name] = name === 'index' ? './src/index.js' : \`./src/pages/\${name}/index.js\`;
	obj.htmlWebpackPlugin.push(new HtmlWebpackPlugin({
		template: './index.html',  // \u8FD9\u91CC\u5171\u7528\u4E00\u4E2A\u6A21\u677F
		filename: \`\${name}.html\`, // \u751F\u6210\u7684 html\u540D\u5B57
		inject: 'body',
		chunks: [name], // \u751F\u6210\u7684 html\u9875\u9762\u5305\u542B\u54EA\u4E9B chunks
		minify: {
			html5: true,
			collapseWhitespace: true,
			preserveLineBreaks: false,
			removeComments: false,
			minifyCSS: true,
			minifyJS: true
		},
		scriptLoading: 'module'
	}));
	return obj;
}, multiplePages);

module.exports = {
	//...
	entry: multiplePages.entry,
	plugins: [
		// ...
		multiplePages.htmlWebpackPlugin
	]
};
`)],-1),y=t("p",null,"\u81F3\u6B64\u7ED3\u675F\u3002",-1);function l(e,b){return s(),i(c,null,[a,p,r,o,m,u,d,g,h,f,k,y],64)}const j={render:l};j.__hmrId="/Users/xianchenxy/Documents/Blog/posts/post/webpack_build_multiple_pages_app.md";const S=e=>({components:e,render:l});export{j as VueComponent,S as VueComponentWith,_ as attributes,w as html};
