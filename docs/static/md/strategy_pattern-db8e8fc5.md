## 1. 策略模式是什么

> 在多种不同的方式中，权衡各影响因素，选择出优的那个。



## 2. 如何去理解

> 从广州出发去厦门，可以有的出行方式是飞机、高铁、汽车等，存在的影响因素有舒适度、价格、旅程耗时、当天可供出现的方式等。
>
> 具体采用何种方式，综合影响因素得出，不同的人有不同的优先考虑因素。
>
> 常规的做法是根据不同的影响因素，划分不同出现方式的优先级，比如以旅程耗时划分，为飞机 > 高铁 > 汽车。
>
> 存在的缺点是有许多的判断，并且当影响因素有变化时（随着时代发展，出现个人飞行器），需要去维护每一处的判断。



## 3. 如何去使用

> 将“分封制”改为“中央集权制”
>
> 归拢各影响因素的逻辑到一个专门的处理对象中，输入因素，得出结果。



## 4. 举个栗子

### 计算员工当月奖金

> 奖金基数1000，绩效为S的员工奖金4倍，绩效A的员工奖金3倍，绩效B的员工奖金2倍。

我们可以很快就实现出这样的程序：

```javascript
const bonusS = (salary) => {
    return salary * 4
}
const bonusA = (salary) => {
    return salary * 3
}
const bonusB = (salary) => {
    return salary * 2
}

/**
 * 依据绩效级别，计算员工当月奖金
 * @params {String} level - 员工绩效级别
 * @params {Number} salary - 奖金基数
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
```

简单直白的写法，功能上完全没有问题，但是我们从代码层面上来说，会存在些什么问题？

存在问题：
（1）if判断语句过多，不易维护；
（2）`calcBonus`计算函数随着需求迭代，可能会越来越庞大，且当需求变更时（如新增一个绩效级别）缺乏弹性。

<br />



采用策略模式进行改造

```javascript
const bonusCategories = {
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
```





## 5. 开发实践

### 封装业务请求

往常做法：

```javascript
const type = isAddMethod ? 'post' : 'put',
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
```

**存在问题：**
不易维护，页面可能存在多个地方调用同一个接口，当接口有变化时，需要改动多次



策略模式改造

策略对象：

写于 `vuex`中

```javascript
getData ({ rootState, dispatch }, payload) {
    const urlInfo = URL.table[payload.key],
          urlPlaceholder = payload.urlPlaceholder || {}
    // 替换 url占位符
    urlInfo.hasPlaceholder && Object.keys(urlPlaceholder).forEach(key => {
        urlInfo.url = urlInfo.url.replace(new RegExp('\\' + key), urlPlaceholder[key])
    })
    
    return dispatch('sendAjaxByType', { info: Object.assign(urlInfo, payload) })
},
sendAjaxByType (content, { info }) {
	return Vue.api(info.type)(info.url, info.data, info.config)
}
```

调用

```javascript
this.$store.dispatch('getData', {
    key: isAddMethod ? 'add' : 'edit', // 包含请求 URL和请求类型
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
```



## 6. 评价

> 采用策略模式成功实现了高内聚、低耦合，能够有效地避免多重条件判断语句，还支持开放-封闭原则，但是由于增加了策略对象，使用时必须了解各策略的不同之处，才能选择出合适的策略，所以提高了复杂度，不如简单的判断来的一眼明了。 