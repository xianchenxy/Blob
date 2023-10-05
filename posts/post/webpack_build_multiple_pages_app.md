# 实现多页应用打包配置
这是我们的目录结构
```text
|-genTree
  |-App.vue
  |-index.html  <= 页面模板html
  |-index.js    <= 主入口文件
  |-package.json
  |-pages       <= 视图目录
  |  |-search
  |  |  |-index.js
  |  |  |-search.vue
  |-pnpm-lock.yaml
  |-webpack.dev.config.js
  |-webpack.prod.config.js
```
多页应用打包关键的配置点是2个，一个是入口`entry`，另一个是`plugin`。
<br />先看单页应用时的配置
```js
module.exports = {
	//...
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: 'body',
			minify: { // 自定义要压缩的内容
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
```
不难发现，只需给`entry`字段增加多个入口，`plugin`处多增加个`html-webpack-plugin`插件即可
```js
module.exports = {
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
			chunks: 'index', // + 确定哪些 chunks要包含在这个 html文件中
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
			chunks: 'search', // + 确定哪些 chunks要包含在这个 html文件中
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
```
至此已实现了多页应用的打包配置。
但是我们很快会发现，如果页面过多，比如这样的目录结构
```text
|-genTree
  |-App.vue
  |-index.html
  |-index.js
  |-package.json
  |-pages
  |  |-list     <= 多个入口
  |  |  |-index.js
  |  |  |-list.vue
  |  |-search   <= 多个入口
  |  |  |-index.js
  |  |  |-search.vue
  |-pnpm-lock.yaml
  |-webpack.dev.config.js
  |-webpack.prod.config.js
```
这样每次新增页面都需要手动新增一次配置，这个操作就过于繁琐重复了。
那有没有什么简便的方式呢？答案自然是有的。
借助[`glob`](https://www.npmjs.com/package/glob)库，我们可以动态导入多页应用目录下的入口文件，组织生成`entry`和`plugin`即可。
```js
const {globSync} = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let files = ['index'];
// 拼接，获取到所有的视图入口
files = files.concat(globSync(path.join(__dirname, './src/pages/*/index.js'), {withFileTypes: true})
    .map(file => file.parent.name));
const multiplePages = {entry: {}, htmlWebpackPlugin: []};
files.reduce((obj, name) => {
	obj.entry[name] = name === 'index' ? './src/index.js' : `./src/pages/${name}/index.js`;
	obj.htmlWebpackPlugin.push(new HtmlWebpackPlugin({
		template: './index.html',  // 这里共用一个模板
		filename: `${name}.html`, // 生成的 html名字
		inject: 'body',
		chunks: [name], // 生成的 html页面包含哪些 chunks
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
```
至此结束。