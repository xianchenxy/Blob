
## 1. 代理模式是什么
> 因不便（可）直接访问某对象，提供一个代用品，来控制对它的访问。

### 1.1 代理的类别：
> 一般分为三类：虚拟代理、缓存代理和保护代理，其中虚拟代理和缓存代理较为常用。
> - 虚拟代理：被代理对象延迟到真正需要时才被创建。
> - 缓存代理： 为开销大的运算结果提供暂时的存储，相同的条件，第一次时会对计算函数的运行结果缓存，第二次不进入计算函数，而是通过代理直接返回。
> - 保护代理：控制不同权限的对象对目标对象的访问，由于在 JavaScript中无法判断谁访问了某个对象，因此不容易实现。

## 2. 如何去理解
> 香港黑帮电影里经常看到黑帮 boss的一句台词，有什么事情跟我的律师谈。自己说容易说错，且法律细节很多，作为 boss肯定是不懂那些，所以就把这些交给律师去处理。在这里，律师这个角色扮演的就是代理的作用，为 boss提供专业化的法律安全保障和服务。

## 3. 如何去使用
> 似古代摄政王制度。
![摄政王定义](#design_patterns#proxy1.png)
> 增加一层代理层，外界无法直接访问到真正的对象，由代理层接受外部输入，再转达被代理对象。

## 4. 举个栗子
> 以图片懒加载技术为例：
> 由于网页中的图片加载是需要时间的，且图片是一点一点地加载出现，当是大图片或者慢网速时，用户体验感不好。所以先用一张小的 loading图片替代，当真实的图片加载完成后，再替换回来。

```javascript
const myImage = (function () {
    const imgNode = document.createElement('img')
    document.body.appendChild(imgNode)
    return function (src) {
        imgNode.src = src
    }
})();

const proxyImage = (function () {
    const img = new Image;
    img.onload = function () {
        myImage(this.src)
    }
    
    return function (src) {
        myImage('loading.gif')
        img.src = src
    }
})();

proxyImage("https://www.baidu.com/img/flexible/logo/pc/result@2.png")
```

## 5. 开发实践
> 之前开发的时候出现过一个问题，弹窗打开缓慢，数据最少的打开都需要1.2s以上，后来发现是由于初始化的组件比较复杂导致耗时长。
![code 1](#design_patterns#proxy2.png)

虚拟代理的方式进行优化：
![code 2](#design_patterns#proxy3.png)

## 6. 评价
> 代理的优势不言而喻，增加了代理层，可以有效地提升对被代理对象的保护/优化，但也因此增加了代码复杂程度，

## 7.关键词
控制对象的访问