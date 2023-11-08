## TypeScript 类型

1. top type 顶级类型 any、unknown
2. Object
3. Number、String、Boolean
4. number、string、boolean
5. 123、""、false
6. never
> unknown 只能赋值给自身，或者是 any 类型
> 
> unknown 无法读取任何属性，方法也不可以调用
> 
> unknown 比 any 安全
> 
> *因此不知道是什么类型的时候，优先使用 unknown，从命名上也可以知道。
> 

any的问题
- any 类型表示放弃类型检查，它允许你在编写代码时使用任何值，而不进行类型检查。
- 使用 any 类型时，TypeScript 将不会提供类型安全检查，因此你可以对该变量进行任何操作，而不会得到类型错误。

any的使用场景
- 在迁移现有 JavaScript 代码到 TypeScript 时，临时使用 any 可能会减轻类型检查的负担。
- 处理来自动态类型的数据，例如通过第三方库或用户输入。
- 在某些情况下，当你确实需要绕过 TypeScript 的类型检查来实现某些特定操作时。
```typescript
let a: unknown = 1;
let b: number = 2;

a = b;
b = a; // error: TS2322: Type unknown is not assignable to type number
```

#### Object、object、{}的区别
1.Object 定义了 Object.prototype 原型对象上的属性，其类型也包括原始值
```typescript
let a1: Object = 1;
let a2: Object = '1';
let a3: Object = {a: 1, b: 2};
let a4: Object = [];
let a5: Object = Symbol();
let a6: Object = function () {};
let a7: Object = 1n; // TS2737: BigInt literals are not available when targeting lower than ES2020.
let a8: Object = null; // error
let a9: Object = undefined; // error
// *使用 Object 类型时，无法访问对象的具体属性和方法，因为 Object 类型仅表示对象的抽象类型。
```
2.object 表示非原始类型的值
```typescript
let a1: object = 1; // error
let a2: object = '1'; // error
let a3: object = {};
let a4: object = [];
let a5: object = Symbol(); // error
let a6: object = function () {};
let a7: object = 1n; // error
let a8: object = null; // error
let a9: object = undefined; // error
```

## 函数重载
清晰输入输出，便于快速了解一个函数/方法/构造器。

## 类型断言
本质是欺骗ts编译器，使代码通过检查，这可能会导致隐患。

## 枚举
Q：定义枚举时，加 `const`和不加的区别

A：加 `const` 会直接编译成常量，不加是编译成对象。

## type 和 interface
1. type不支持extends，只能使用 `&` 进行交叉类型
2. type支持 `|` 联合类型，interface不支持
3. interface申明时重名，会进行合并，type不会

#### extends 含义
ts中是包含的意思，表示为:左边的值是右边类型的子类型
例如 `type num = 1 extends Object ? 2 : 0`

## never类型
最底层类型，不包含任何类型
```typescript
type Value = '唱' | '跳' | 'rap';

function Kun(value: Value) {
    switch (value) {
        case '唱':
            break;
        case '跳':
            break;
        case 'rap':
            break;
        default: // 做兜底
            const error:never = value;
            break;
    }
}
```
后来 Value新增了`篮球`类型
```typescript
type Value = '唱' | '跳' | 'rap';

function Kun(value: Value) {
    switch (value) {
        case '唱':
            break;
        case '跳':
            break;
        case 'rap':
            break;
        default:
            const error:never = value; // TS2322: Type string is not assignable to type never
            break;
    }
}
```
这样就使得走入兜底的逻辑报错，可以提前发觉。

## 泛型（动态类型）
定义时暂不明确可能传递何种类型，当开发者编码才确定类型。
因此可以称之为动态类型。
🌰
```typescript
function add<T = number, K = number>(a: T, b: K): Array<T | K> {
    return [a, b]
}

add(1, false)
/* function add<number, boolean>(a: number, b: boolean): (number | boolean)[] */
```
🌰2
```typescript
async function fetchData<T> (type: string, url: string): Promise<T> {
    return fetch(url, { method: type }).then(res => {
        return res.json()
    })
}

interface Data {
    message: string,
    code: number
}
fetchData<Data>('get', 'www.baidu.com').then(data => {
    console.log(data.code);
})
```

#### 泛型约束
控制类型范围，使用 `extends` 约束
🌰
```typescript
function add<T>(a: T, b: T) {
    return a + b;
}

add(undefined, undefined) // 不报错，但是这种加法函数的类型标注显然不合理
```
使用约束，来避免过于灵活
```typescript
function add<T extends number>(a: T, b: T) {
    return a + b;
}

add(undefined, undefined)
```
🌰2
```typescript
interface OBJ {
    length: number;
}
function getLen<T extends OBJ>(obj: T) {
    return obj.length
}

getLen('111'); // ok
getLen([1, 2, 3]); // ok
getLen(11); // error
getLen(false); // error
```

## Partial
创建可选版本的类型。它返回一个新类型，该类型与原始类型相同，但所有属性都变为可选的。
```typescript
type Partial<T> = {
    [K in keyof T]?: T[K]
}
```

## Readonly
要创建只读版本的类型。它返回一个新类型，该类型与原始类型相同，但所有属性都是只读的。
```typescript
type Readonly<T> = {
    readonly [K in keyof T]: T[K]
}
```

## Pick
从给定类型中选择指定属性的子集，创建一个新的类型。
```typescript
type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
}
```

## Record
创建一个具有指定键和值类型的对象。
```typescript
type Record<T extends keyof any, K> = {
    [p in T]: K
}

type Person = {
    name: string;
    age: number;
}
type U = 'A' | 'B' | 'C';
type p = Record<U, Person>;
let obj: p = {} // obj is: {A: Person, B: Person, C: Person}
```
#### keyof any是什么
代表了任何可能的属性名或键的类型。实际上，它是一个字符串字面量联合类型，包括了任何可能的字符串键，
因为在 JavaScript 中，对象的属性名都是`字符串`。
`keyof any`的类型是 `string`、`number`、`symbol`

## infer
用于在条件类型中推断类型变量。它通常与条件类型、映射类型等一起使用，以实现更灵活的类型推断和转换。

这样的需求：定义一个类型，如果是数组类型就返回数组元素的类型，否则就是传入什么类型就返回什么类型

未使用 `infer` 时
```typescript
type TYPE<T> = T extends Array<any> ? T[number] : T;
type A = TYPE<(string | number)[]>
type B = TYPE<boolean>
```
#### T[number] 是什么意思
用于获取数组中元素的类型
```typescript
const C = ['1', true]; // (string | boolean)[]
type D = typeof C[number]; // string | boolean
```

使用`infer`
```typescript
type TYPE<T> = T extends Array<infer U> ? U : T;
type A = TYPE<(string | number)[]>
type B = TYPE<boolean>
```

场景：典型的提取数组元素类型为联合类型

```typescript
import {generateKeyPair} from 'crypto';

type ArrayType = [string, number];
type getArrayItemTypeUnion<T> = T extends Array<infer U> ? U : never;
type a = getArrayItemTypeUnion<ArrayType> // string | number
type b = getArrayItemTypeUnion<boolean> // never
```

#### infer 进阶 - 配合延展操作符
提取数组的最后一项
```typescript
type arr = ['a', 'b', 'c'];
type last<T extends any[]> = T extends [...any[], infer K] ? K : [];
type a = last<arr> // 'c'
```

#### infer 进阶2 - 配合递归
实现翻转数组。
```typescript
type arr = [1, 2, 3, 4];
type ReversArr<T extends any[]> = T extends [infer First, ...infer Rest] ? [...ReversArr<Rest>, First] : T
type rArr = ReversArr<arr>; // [4, 3, 2, 1]
```