/*
实现累加函数curryAdd
curryAdd(1)(2)(3)(4)(5) //15
curryAdd(1,2,3)(4,5) //15
*/

var curryAdd = function () {
	let b = 0;
	function sum() {
		b = [...arguments].reduce((p, c) => p + c, b);
		return sum;
	}
    sum(...arguments)
	sum.toString = function () {
		return b;
	};
	return sum;
};

// 柯里化+闭包实现

const a = curryAdd(1)(2)(3)(4)(5)(6)(7)(8)(9);
console.log(a);
const b = curryAdd(1, 2, 3)(4, 5, 6)(7, 8)(9);
console.log(b);
