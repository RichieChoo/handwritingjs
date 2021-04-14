function curryAdd() {
	let b = 0;

	let sum = function () {
		b = [...arguments].reduce((p, c) => p + c, b);
		return sum;
	};
	sum.toString = function () {
		return b;
	};
	sum.apply(this, arguments);
	return sum;
}

// 柯里化+闭包实现

const a = curryAdd(1)(2)(3)(4)(5)(6)(7)(8)(9);
console.log(a.toString());
const b = curryAdd(1, 2, 3)(4, 5, 6)(7, 8)(9);
console.log(b.toString());
