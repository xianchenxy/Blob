## 1. 迭代器模式是什么
本质是一个循环语句，依序地访问聚合对象的每一元素。

### 1.1 类别
分为两种，内部迭代器和外部迭代器。

内部迭代器: 迭代规则不可变，不可中止，灵活性很低。
外部迭代器: 增强了灵活性，可以手动控制迭代的规则（可中止），增加了调用复杂度。

## 2. 如何去理解
内部迭代器: 
封闭了迭代过程
代表是`for...of`和JQuery的`$.each`

```javascript
$.each(['Vue', 'React', 'Angular'], function(index, value) {
     console.log([index, value]);
});
// [0, Vue]  [1, React]  [2, Angular]
```

```javascript
const arr = ['a', 'b', 'c']
for (let k of arr) {
    console.log(k)
}
  // 'a' 'b' 'c'
```
外部迭代器: 

必须显示地迭代下一个。
代表是 ES6 的`yield`。
```javascript
function* generatorEach(arr) {
   for (let [index, value] of arr.entries()) {
     yield console.log([index, value]);
   }
}

let each = generatorEach(['Angular', 'React', 'Vue']);
each.next(); // [0, 'Angular']
each.next(); // [1, 'React']
each.next(); // [2, 'Vue']  
```

## 3. 如何去使用
将系列散点集合成可被迭代的对象/数组，

## 4. 举个栗子
迭代器模式的核心，就是**实现统一遍历接口**。

需求: 比对两个数组是否完全相等。
```javascript
// 实现一个外部迭代器
const Iterator = function (arr) {
     let current = 0
     
     const next = function () {
         current += 1
     }
     
     const isDone = function () {
         return current = arr.length
     }
     
     const getCurrItem = function () {
         return arr[current]
     }
     
     return {
         next,
         isDone,
         getCurrItem,
         length: arr.length
     }
}

const compare = function (iterator1, iterator2) {
     if (iterator1.length !== iterator2.length) {
         return false
     }
     
     while(!iterator1.isDone() && !iterator2.isDone()) {
         if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
             return false
         }
         iterator1.next()
         iterator2.next()
     }
     
     return true
}
const iterator1 = Iterator([2, 2, 3])
const iterator2 = Iterator([1, 2, 3])
compare(iterator1, iterator2) // false
```

## 5. 开发实践
```js
function noDataTip() {
    // -1草稿 0待查询 1查询中 2查询成功 3查询失败 4查询已取消
    const tiplist = [
        {
            key: 'noAuth',
            condition: !this.hasAuth, // 展示条件
            tip: '事件权限变更，数据已被清空！'
        },
        {
            key: 'noQuery',
            condition: [-1, 1, 0].some(status=status === this.status), // 展示条件
            tip: '选择事件进行查询～'
        },
        {
            key: 'cancelQuery',
            condition: this.status === 4, // 展示条件
            tip: '查询已取消'
        },
        {
            key: 'noData',
            condition: this.status === 2,
            tip: '当前查询无数据'
        },
        {
            key: 'failure',
            condition: this.status === 3,
            tip: '查询失败'
        }
    ];

    return tiplist.find(item => item.condition);
}
```

  迭代器模式优化: 
```javascript
const AuthInfo = {
    true: {
        key: 'noAuth',
        tip: '事件权限变更，数据已被清空！'
	},
    0: { // status === -1, 1, 0
        key: 'noQuery',
        tip: '选择事件进行查询~'
    },
    1: { // status === 4
        key: 'cancelQuery',
        tip: '查询已取消'
    },
    2: { // status === 2
        key: 'noData',
        tip: '当前查询无数据'
    },
    3: { // status === 3
        key: 'failure',
        tip: '查询失败'
    }
}

function noDataTip () {
    const noAuthInfo = AuthInfo[!this.hasAuth];
    if (noAuthInfo) return AuthInfo[noAuthInfo];

    // 借助二维数组的的方式统一遍历条件
    const hasAuthIndex = [[-1, 1, 0], [4], [2], [3]].findIndex(v => v.includes(this.status)))
    return AuthInfo[hasAuthIndex];
}
```

## 6. 评价
可以消除多 if语句，但仅适用于“同类”问题，每个判断中的逻辑相似或者可以使用策略模式进行约束，否则会导致在迭代过程中包含了额外的条件判断。
适用范围，如在一串门钥匙中寻找正确的钥匙开门。 