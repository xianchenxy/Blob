## 1. 单例模式是什么

仅有一个实例，并且能够全局访问。

## 2. 如何去理解

- 全局变量如 window也是单例的一种实现。
- 只要满足了仅有一个实例，且能全局访问即是。
- 单例分为三种：普通单例、懒汉式单例（惰性）、饿汉式单例。

> （饿汉式单例的概念来自后端，前端领域饿汉式单例和普通单例基本一致）

<br>

## 3. 如何去使用

全国只有一个皇帝。
主要在于控制实例的产生，使得不会出现复数及以上个，然后提供一个方法去访问该实例。
由于 JS的全局变量（如 window）存在很多问题，很容易造成命名空间污染，因此一般不使用 JS的全局变量来存放单例。

## 4. 举个栗子

针对全局变量：

- 采用命名空间：
  ```javascript
  window.MyApp = {};
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
  // 等价于
  window.MyApp = {
  	event: {},
  	dom: {
  		style: {}
      }
  };
  ```

- 采用闭包封装私有变量
  ```javascript
  const user = (function () {
      const _name = 'xianchenxy',
            _age = '18'

      return {
          getUserInfo: function () {
              return _name + '-' + _age
          }
      }
  })()
  ```

## 5. 开发实践

```javascript
// 懒汉式(懒惰型，等到需要的时候才创建实例)
AAA.getInstance = (function () {
	let instance = null
	return function () {
		if (instance) {
			instance = new Singleton()
		}
		return instance
	}
})()

// 饿汉式（饥饿型，主动去创建实例）
AAA.getInstance = (function () {
	let instance = new Singleton()
	return function () {
		return instance
	}
})()
```

**缺点：**
如果创建实例的时候需要传递参数，饿汉式写法就无法做到了
<br /

## 6. 评价

- 节省了系统资源。
- 若对象较为复杂，创建的过程耗时可能较长。
- 与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心外面怎么样来实例化。

## 7. 关键词

单例、全局访问