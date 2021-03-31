function curryAdd() {
	let b = 0;
	function sum() {
		b = [...arguments].reduce((p, c) => p + c, b);
		return sum;
	}
	sum.toString = function () {
		return b;
	};
	return sum(...arguments);
}

console.log(curryAdd(1, 2, 2, 3)(1, 2, 4));
console.log(curryAdd(1)(2)(2)(3)(1)(2)(4));
