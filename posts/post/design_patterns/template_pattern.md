## 1. 模板方法模式是什么

> 一种基于继承的设计模式，定义了执行它的方法的方式/模板。
>
> 通过封装变化，提高拓展性。



## 2. 如何去理解

> 从命名中取出关键词——**模板**。
>
> 何谓模板？有固定的方法逻辑在内，遵照固定的执行顺序执行的一段程序。
>
> 属于行为型模式。



## 3. 如何去使用

> VueCli脚手架，搭建系统架构，封装好固定的模板，这里的 VueCli脚手架在创建项目时命令行提供的可选项，就是一个个模板。
>
> 西游记里菩萨定好的九九八十一难，决定了顶层的骨架，这里菩萨定好的九九八十一难就是模板。
>
> 定义好固定的顺序的调用程序，成为一个模板/框架。



## 4. 举个栗子

> 模板方法模式的核心，就是**封装变化的步骤，将其转化为有固定顺序的一段调用程序**。
>
>
>
> 需求：
>
> （1）**泡茶：**
>
> 所需步骤：
>
> ​	1> 用沸水冲泡茶叶；
>
> ​	2> 把茶叶倒进杯子；
>
> ​	3> 加柠檬。
>
>
>
> （2）**泡咖啡：**
>
> 所需步骤：
>
> ​	1> 用沸水冲泡咖啡；
>
> ​	2> 把咖啡倒进杯子；
>
> ​	3> 加糖和牛奶。
>
>
>
> 技术实现：
>
> 先泡一杯咖啡
>
> ```javascript
> class Coffee {
>     constructor () {
>         this.boilWater()
>         this.brewCoffee()
>         this.pourInCup()
>         this.addSugarAndMilk()
>     }
>     boilWater () {
>         console.log('把水煮沸')
>     }
>     brewCoffee () {
>         console.log('用沸水冲泡咖啡')
>     }
>     pourInCup () {
>         console.log('把咖啡倒进杯子')
>     }
>     addSugarAndMilk () {
>         console.log('加糖和牛奶')
>     }
> }
> 
> new Coffee()
> ```
>
> 再来泡一壶茶：
>
> ```javascript
> class Tea {
>     constructor () {
>         this.boilWater()
>         this.brewTea()
>         this.pourInCup()
>         this.addLemon()
>     }
>     boilWater () {
>         console.log('把水煮沸')
>     }
>     brewTea () {
>         console.log('用沸水冲泡茶叶')
>     }
>     pourInCup () {
>         console.log('把茶倒进杯子')
>     }
>     addLemon () {
>         console.log('加柠檬')
>     }
> }
> 
> new Tea()
> ```
>
>
>
> 模板方法模式改造：
>
> 通用步骤：
>
> ​	1> 把水煮沸；
>
> ​	2> 用沸水冲泡饮料；
>
> ​	3> 把饮料倒进杯子；
>
> ​	4> 加调料。
>
>
>
> 程序实现：
>
> ```javascript
> class Beverage {
>     constructor () {
>         // 构建执行固定顺序的模板程序
>         this.boilWater()
>         this.brew()
>         this.pourInCup()
>         this.addCondiments()
>     }
>     boilWater () {
>         console.log('把水煮沸')
>     }
>     brew () {
>         throw new Error('必须传递 brew方法')
>     }
>     pourInCup () {
>         throw new Error('必须传递 pourInCup')
>     }
>     addCondiments () {
>         throw new Error('必须传递 addCondiments')
>     }
> }
> 
> 
> class Coffee extends Beverage {
>     brew () {
>         console.log('用沸水冲泡咖啡')
>     }
>     pourInCup () {
>         console.log('把咖啡倒进杯子')
>     }
>     addCondiments () {
>         console.log('加糖和牛奶')
>     }
> })
> 
> class Tea extends Beverage {
>     brew () {
>         console.log('用沸水冲泡茶叶')
>     }
>     pourInCup () {
>         console.log('把茶叶倒进杯子')
>     }
>     addCondiments () {
>         console.log('加柠檬')
>     }
> }
> 
> new Coffee() // 泡一杯咖啡
> new Tea() // 泡一杯茶
> ```



## 5. 开发实践

>做一个小飞机游戏
>点击“开始游戏”按钮
>
>```javascript
>function startGame () {
>   game.init()
>}
>
>class Game () {
>	constructor () {
>       // ... do some things
>    }
>    init () {
>        this.loadResource()
>        this.initMap()
>        this.createPlayer()
>        this.createPlane()
>        this.bindEvents()
>    }
>}
>
>const game = new Game()
>```



## 6. 评价

* 符合开放-封闭原则
* 封装不变部分，扩展可变部分
* 提取公共代码，便于维护
* 行为由父类控制，子类实现
* 由于不同的实现都需要一个子类来实现，导致类的个数增加，使得系统更加庞大



## 7. 关键词

> **继承**、**模板**