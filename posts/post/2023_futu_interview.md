
### 自我介绍
姓名，工作经历，在什么公司做了什么，什么亮点/业绩。
工作上的表现吧啦吧啦的。

### 项目做了哪些优化
吧啦吧啦。

### 简历上你提到了 CDN 的新方案，简单说一下
两类，一类是ajax请求的服务失败时的替换服务host并重试；
另一类是图片，css、js等静态资源的域名容灾。
1. 在`compiler.hooks.thisCompilation.tap`中定义钩子`compilation.hooks.processAssets.tapAsync`，在回调中，判断是否为js资源，如果是则在文件内容开头注入一段js代码，给设置一个当前文件加载成功的全局标记。
2. 然后`compiler.hooks.compilation.tap`中借助`html-webpack-plugin`的钩子，定义`hooks.alterAssetTags.tap`和`hooks.beforeEmit.tapAsync`,前者用来添加`link`和`script`的`crossorigin`属性，和绑定`link`的`onerror`回调，`script`不用，。后者用正则匹配到head标签，插入`cdn容错逻辑`和`全局异常handelError函数`，接着匹配所有不带`defer`和`async`标记的`script`标签，在结束标签末尾追加一段js，判定`script`标签是否有加载成功后设置的全局标记，如果没有，那么去执行一下**全局handleError**事件。
3. 对于图片资源，只需添加`document.addEventListener('onerror')`事件，照旧执行handleError事件即可，无需额外处理。

### http和https
没复习，不会。

### 前端缓存
分两类强缓存和协商缓存，强缓存是`cache-control`和`expired`，协商缓存则是那4个标记，`e-tag`/`if-none-match`、`last-modified`/`if-modified-sinece`

### 你提到了Promise，说一下什么是异步和使用异步的场景
无非就是对于无法立刻获知结果的操作进行异步。

早期是使用回调的方式，但是那样的层次嵌套太深，容易形成回调地狱。
后来有了`Promise`，我们可以采用扁平/同步的方式去书写代码，更符合人的思维习惯。

场景：
场景的话比如vue2里面修改了数据，要获取页面更新的数据需要通过`$nextTick`，里面就是使用的异步方式，还有就是前面项目里提到的项目优化，通过promise等待考生提交失败的答案再次提交。


### vue响应式原理
分普通值和引用类型。
普通值直接`Object.defineProperty`即可。
引用类型分对象和数组，对于对象，需要**递归**和**遍历**去使用`Object.defineProperty`并进行依赖收集，这也是vue2比vue3占用内存更高和效率更慢的一大原因。
数组的话由于业务上数组的长度可能几十万，所以对索引的监听的话开销很恐怖，所以采取了劫持会改变原数组的方法，如`push`、`shift`等。

#### 给一个响应式对象直接新增一个属性，能响应到吗？
不行，因为`get`、`set`无法触发`delete`的操作，所以需要`$set`

### 说一下vue2的生命周期，以及他们在业务里的应用
`beforeCreate`：一般用来提前获取些数据，例如页面配置

`created`：这时可以拿到组件数据了，所以可能会进行些数据操作什么的；

`beforeMounted`：一般没怎么用

`onMounted`：这里可以拿到页面dom了，可以操作dom

`beforeUpdate和Updated`：这两个一般不怎么使用，因为写不好会导致死循环，因为数据更新都会走这里。但有些很特殊的情况，比如老项目的代码，没办法了只能在这里操作，还有就是可能进行些日志上报。总之就是在这里处理某些数据更新后的操作。

`beforeDestroyed和destroy`：这里一般是进行数据的卸载，例如闭包函数的引用取消，绑定的监听函数取消等。

### 两道笔试题
吐槽下这个题目的，描述不够清晰，理解错了。
虽然最后我的思路和结构都OK。

```js
// 红灯一次持续亮3秒，黄灯持续2秒亮一次，绿灯持续1秒亮一次；
// 如何让三个灯不断交替重复亮灯？
// 顺序

// 要求：每一秒打印当前在亮的灯

let currentLight = 'red';

function redLight() {
	return new Promise(res => {
            setTimeout(() => res('yellow'), 3000);
	});
}

function yellowLight() {
	return new Promise(res => {
            setTimeout(() => res('green'), 2000);
	});
}

function greenLight() {
	return new Promise(res => {
            setTimeout(() => res('red'), 1000);
	});
}

function run() {
	new Promise(res => {
		currentLight = 'red';
		return res(redLight().then(light => {
			    currentLight = light;
			    return yellowLight();
            }).then(light => {
                currentLight = light;
                return greenLight();
            }));
    }).finally(run);
}

run();

function managerRun() {
    console.log(currentLight);
    setTimeout(managerRun, 1000);
}

console.log(currentLight);
setTimeout(managerRun, 1000);
```

```js
// 有序数组 A 和 B, 请写一个函数，判断 B 是否为 A 的子集
// 输入：A = [1,2,3,4], B=[2,2,4]
// 输出：true
const A = [1, 2, 3, 4, 4, 5];
const B = [2, 2, 4, 5];
let aIndex = 0;
let bIndex = 0;

let flag = true;

while (true) {
	if (A[aIndex] && B[bIndex] === undefined) {
		flag = true;
		break;
	}

	if (B[bIndex] && A[aIndex] === undefined) {
		flag = false;
		break;
	}

	if (A[aIndex] === B[bIndex]) {
		bIndex++;
		continue;
	}

	if (A[aIndex] < B[bIndex]) {
		aIndex++;
		continue;
	}
	if (A[aIndex] > B[bIndex]) {
		bIndex++;
		continue;
	}
}

console.log(flag);
```

### 你是不是之前纯前端的，对于node、nginx之类的会吗？
是的，解释了下其实有用过`node`，但仅限于照着文档用，而且最后业务上还是放弃了`node`做代理服务器。


### 什么想问的
了解了下业务的技术架构，得知既用node，还有mysql、kafka（@_@太厉害了，真真全栈)