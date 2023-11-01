1. top type 顶级类型 any、unknown
2. Object
3. Number、String、Boolean
4. number、string、boolean
5. 123、''、false
6. never
> unknown只能赋值给自身，或者是any类型
```typescript
let a: unknown = 1;
let b: number = 2;

a = b;
b = a; // error: TS2322: Type unknown is not assignable to type number
```