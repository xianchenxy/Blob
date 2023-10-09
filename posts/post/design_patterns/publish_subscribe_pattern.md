## 1. 发布订阅模式是什么
>一个对象的状态发生改变，发布者通知调度中心，再由调度中心调度所有订阅该通知的对象。

## 2. 如何去理解
> 小明最近看上了一套房子，到了售楼处被告知该楼盘的房子已售罄，于是把电话号码留在售楼处。
> 
> 售楼经理答应他新楼盘一推出，就立刻发信息通知他。
> 
> 小红，小强和小龙也是和小明一样的做法。
> 
> 新楼盘推出去的时候，售楼经理遍历花名册上面的电话号码，依次发信息通知他们。
> <img src="https://i.ibb.co/jZB3LV9/publish-subscribe1.png" height="400" alt="楼盘发布订阅示意模式图">

## 3. 如何去使用
- 移动卡增值业务的天气预报短信。

<img src="https://i.ibb.co/f9kq4ST/publish-subscribe2.png" height="200" alt="天气预报短信">

- DOM事件
```javascript
document.body.addEventListener('click', function() {
    alert('you click')
}, false)
document.body.click()
```

订阅者订阅通知，调度中心维护订阅了该通知的订阅者列表。

发布者发布通知，调度中心遍历该通知上的名单，确定并通知订阅者。

## 4. 举个栗子
>实现售楼处的订阅与通知。

```javascript
// 定义售楼处（调度中心）：
const salesOffices = {
    clientList: {}
}

// 实现订阅者：
salesOffices.listen = function (key, fn) {
    this.clientList[key] ? this.clientList[key].push(fn) : this.clientList[key] = []
}

// 实现发布者：
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

/* 测试用例 */
salesOffices.listen('squareMeter88', function (price) {
    console.log(`88平米房子价格为${price}`)
})
salesOffices.listen('squareMeter110', function (price) {
    console.log(`110平米房子价格为${price}`)
})

salesOffices.trigger('squareMeter88', 2000000)
salesOffices.trigger('squareMeter110', 3000000)
```

通用实现：
```javascript
const Event = (function () {
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
```

## 5. 开发实践
> 实现商城网站登录

商城项目通常包含的模块有：header头部、nav导航、消息列表、购物车等模块。

在登陆后，需要刷新各模块。

很容易就实现为：
```javascript
login.success(function (data) {
    header.setAvatar(data.avatar)
    nav.setAvatar(data.avatar)
    message.refresh()
    cart.refresh()
})
```

后来新增需求，用户登录后针对所在位置刷新商品。
```javascript
login.success(function (data) {
    header.setAvatar(data.avatar)
    nav.setAvatar(data.avatar)
    message.refresh()
    cart.refresh()
    address.refresh() // 新增
})
```
从例子中也看出，这样面向过程的编程是有问题的，每次需求变更都要改动旧代码，也不符合开放-封闭原则。

采用发布订阅模式进行改造：

调度中心：

```javascript
// 参考上面通用实现即可
```

发布者：

```javascript
this.$api.get('https://xxx.com/login').then(d => {
    login.trigger('loginSuccess', data)
})
```

订阅者：

```javascript
const header = (function () {
    login.listen('loginSuccess', function (data) {
        header.setAvatar(data.avatar)
    })
    
    return {
        setAvatar(avatar) {
            console.log('设置 header模块的用户头像')
    	}
    }    
})();

const nav = (function () {
    login.listen('loginSuccess', function (data) {
        nav.setAvatar(data.avatar)
    })
    
    return {
        setAvatar(avatar) {
            console.log('设置 nav模块的用户头像')
        }
    }
})()
// ...略
```

同理，新增的刷新位置需求，只需

```javascript
const address = (function () {
    login.listen('loginSuccess', function(data) {
      address.refresh(data)  
    })
    
    return {
        refresh(data) {
            console.log('刷新用户登录的位置信息')
        }
    }
})()
```

## 6. 评价

> 让两个对象松耦合地联系在一起，互相不需要各自的情况，只要之前约定的“通信协议”（事件名）没有变化。
>
> 但需要注意，如果使用了太多发布订阅来通信，会使得对象/模块之间的关联性被隐藏。
>
> 最终不知道这个事件是来自哪里，为后期的维护带来麻烦。

## 7. 关键词

- 发布订阅
- 隐藏关联性

## 8. 思考
必须先订阅才能发布吗？
如果发布在订阅之前，会出现什么问题，应该怎么解决？

后果：
>订阅者还未创建，发布的消息无人接收.

比如之前的商城网站中，获取到用户信息之后才能渲染用户导航模块，而获取用户信息的操作是一个 ajax请求。
当请求成功后会发布一个事件，在此之前订阅了事件的用户导航模块就可以接受到这些用户信息。
但这只是理想的状况，因为异步的原因，我们不能保证 ajax请求返回的时间，有时候它返回得比较快，而此时用户导航模块的代码还没有加载好（还没有订阅相应事件），特别是在用了一些模块懒加载技术的时候，这是很可能发生的事情。
解决方法是：
>建立一个存放的堆栈，将发布的事件存储（如果还没有订阅者），等到终于有对象来订阅这些事件时，将堆栈遍历并依次执行，重新发布。

