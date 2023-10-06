import"./vue-126afe2a.js";import{o as u,c as i,S as t,a as e,a3 as n}from"./@vue-268a4df7.js";const _={},v=`<p>After we import and use <code>speed-measure-webpack-plugin</code> plugin, we build</p>
<pre><code class="language-js">const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
module.exports = smp.wrap(webpackConfig);
</code></pre>
<p>an error occurred
<img src="https://i.ibb.co/Db9vC61/speed-measure-webpack-plugin.png" alt="error img">
See it lost plugins!!!</p>
<p>After searching issues in <code>speed-measure-webpack-plugin</code>, i found that
https://github.com/stephencookdev/speed-measure-webpack-plugin/issues/167#issuecomment-1461139945</p>
<p>OK,here is our webpack-plugin list</p>
<pre><code class="language-js">plugins: [
	new webpack.ProgressPlugin(),
	new CleanWebpackPlugin(),
	...multiplePages.htmlWebpackPlugin,
	new MiniCssExtractPlugin({
		filename: '[name].[contenthash:8].css',
		chunkFilename: '[id].[contenthash:8].css'
	}),
	new VueLoaderPlugin()
]
</code></pre>
<p>we can get config origin plugin object previously.</p>
<pre><code class="language-js">const cssPluginIndex = webpackConfig.plugins.findIndex(e =&gt; e.constructor.name === 'MiniCssExtractPlugin');
const cssPlugin = webpackConfig.plugins[cssPluginIndex];
// const {VueLoaderPlugin} = require('vue-loader');
// VueLoaderPlugin's contructor is Plugin(maybe it'll be change?)
const vueLoaderPluginIndex = webpackConfig.plugins.findIndex(e =&gt; e.constructor.name === 'Plugin'); 
const vueLoaderPlugin = webpackConfig.plugins[vueLoaderPluginIndex];
</code></pre>
<p>then got the object return by <code>speed-measure-webpack-plugin</code>.
Replace with origin object finally.</p>
<pre><code class="language-js">const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const configToExport = smp.wrap(webpackConfig);
configToExport.plugins[cssPluginIndex] = cssPlugin;
configToExport.plugins[vueLoaderPluginIndex] = vueLoaderPlugin;
module.exports = configToExport;
</code></pre>
<p>try agin <code>npm run build</code>. It works now.</p>
`,c=e("p",null,[n("After we import and use "),e("code",null,"speed-measure-webpack-plugin"),n(" plugin, we build")],-1),p=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
module.exports = smp.wrap(webpackConfig);
`)],-1),l=e("p",null,[n("an error occurred "),e("img",{src:"https://i.ibb.co/Db9vC61/speed-measure-webpack-plugin.png",alt:"error img"}),n(" See it lost plugins!!!")],-1),r=e("p",null,[n("After searching issues in "),e("code",null,"speed-measure-webpack-plugin"),n(", i found that https://github.com/stephencookdev/speed-measure-webpack-plugin/issues/167#issuecomment-1461139945")],-1),a=e("p",null,"OK,here is our webpack-plugin list",-1),g=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`plugins: [
	new webpack.ProgressPlugin(),
	new CleanWebpackPlugin(),
	...multiplePages.htmlWebpackPlugin,
	new MiniCssExtractPlugin({
		filename: '[name].[contenthash:8].css',
		chunkFilename: '[id].[contenthash:8].css'
	}),
	new VueLoaderPlugin()
]
`)],-1),d=e("p",null,"we can get config origin plugin object previously.",-1),m=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`const cssPluginIndex = webpackConfig.plugins.findIndex(e => e.constructor.name === 'MiniCssExtractPlugin');
const cssPlugin = webpackConfig.plugins[cssPluginIndex];
// const {VueLoaderPlugin} = require('vue-loader');
// VueLoaderPlugin's contructor is Plugin(maybe it'll be change?)
const vueLoaderPluginIndex = webpackConfig.plugins.findIndex(e => e.constructor.name === 'Plugin'); 
const vueLoaderPlugin = webpackConfig.plugins[vueLoaderPluginIndex];
`)],-1),b=e("p",null,[n("then got the object return by "),e("code",null,"speed-measure-webpack-plugin"),n(". Replace with origin object finally.")],-1),w=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const configToExport = smp.wrap(webpackConfig);
configToExport.plugins[cssPluginIndex] = cssPlugin;
configToExport.plugins[vueLoaderPluginIndex] = vueLoaderPlugin;
module.exports = configToExport;
`)],-1),P=e("p",null,[n("try agin "),e("code",null,"npm run build"),n(". It works now.")],-1);function o(s,k){return u(),i(t,null,[c,p,l,r,a,g,d,m,b,w,P],64)}const h={render:o};h.__hmrId="/Users/xianchenxy/Documents/Blog/posts/post/speed_measure_webpack_plugin.md";const C=s=>({components:s,render:o});export{h as VueComponent,C as VueComponentWith,_ as attributes,v as html};
