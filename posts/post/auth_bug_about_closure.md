// Q: How to modify the `obj` without modifying the source code?

```js
const o = (function () {
	const obj = {
		a: 1,
		b: 2
	};

	return function (k) {
		return obj[k];
	};
})();
```
// A: Using the `prototype` and `Object.defineProperty`, See
```js

Object.defineProperty(Object.prototype, 'abc', {
	get: function() {
		return this;
	}
});
```