// 实现 call
Function.prototype.myCall = function (ctx, ...args) {
	ctx = ctx || window;
	let fn = Symbol();
	ctx[fn] = this;
	let res = ctx[fn](...args);
	delete ctx[fn];
	return res;
};

// 实现 apply
Function.prototype.myApply = function (ctx, args) {
	ctx = ctx || window;
	let fn = Symbol();
	ctx[fn] = this;
	let res = ctx[fn](...args);
	delete ctx[fn];
	return res;
};

// 实现 bind
Function.prototype.myBind = function (ctx, ...args) {
	let self = this;
	function F() {}
	F.prototype = self.prototype;
	let res = function () {
		self.apply(this instanceof F ? this : ctx, args.concat(...arguments));
	};
	res.prototype = new F();
	return res;
};

// 实现 new
function newOperator(c, ...args) {
	let obj = {};
	obj.__proto__ = c.prototype;
	c.call(obj, ...args);
	return obj;
}

// 实现 instanceOf

function instanceOf(a, b) {
	if (typeof b !== "function") return false;
	while (a) {
		if (a === b.prototype) {
			return true;
		}
		a = a.__proto__;
		return false;
	}
}

// 实现 debounce

function debounce(fn, delay) {
	let timer;
	return function () {
		let ctx = this;
		let args = arguments;
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(function () {
			fn.apply(ctx, args);
		}, delay);
	};
}

// 实现 throttle
function throttle(fn, delay) {
	let last;
	return function () {
		let now = new Date();
		let ctx = this;
		let args = arguments;
		if (now - last > delay) {
			last = now;
			fn.apply(ctx, args);
		}
	};
}

// 实现 deepClone
function deepClone(obj) {
	let res = Array.isArray(obj) ? [] : {};
	Object.keys(obj).forEach(v => {
		res[v] = typeof obj[v] === "object" ? deepClone(obj[v]) : obj[v];
	});
	return res;
}

// 实现 inherit
function inherit() {
	function Parent(name, type) {
		this.name = name;
		this.type = type;
	}
	Parent.prototype.say = function () {
		console.log(this.name, this.type);
	};

	function Child(name, type) {
		Parent.call(this, name, type);
	}
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;

	let man = new Child("jack", "male");
	man.say();
	console.log(man.constructor);
}
inherit();

// 实现 promise.all
Promise.all = function (arr) {
	return new Promise((resolve, reject) => {
		if (typeof arr[Symbol.iterator] !== "function") {
			throw new Error("arr is not iterable");
			reject("arr is not iterable");
		}
		let res = [];
		let count = arr.length;
		arr.forEach((v, p) => {
			v.then(m => {
				res[p] = m;
			}, reject).then(() => {
				if (--count === 0) {
					resolve(res);
				}
			});
		});
	});
};

// 实现 promise

// 实现 Emit发布订阅

// 实现 数组去重
function uniqueArr(arr) {
	return [...new Set(arr)];
	return arr.filter((v, p, array) => array.indexOf(v) === p);
}
console.log(uniqueArr([1, 2, 3, 4, 55, 2, 2, 11, 3, 5, 2, 21, 1]));

// 实现 add(1)(2)(3)
function add() {
	let b = 0;
	let sum = function () {
		b = [...arguments].reduce((p, c) => p + c, b);
		return sum;
	};
	sum.toString = function () {
		return b;
	};
	sum.call(this, ...arguments);
	return sum;
}
console.log(add(1)(2)(3)(4, 5).toString());

// 实现 大数相加

// 实现 数组排序
function quickSort(arr) {
	function quick(arr, l, r) {
		if (l <= r) {
			let pIndex = partition(arr, l, r);
			quick(arr, l, pIndex - 1);
			quick(arr, pIndex + 1, r);
		}
	}
	function partition(arr, l, r) {
		let pivot = l;
		let index = pivot + 1;
		for (let i = index; i <= r; i++) {
			if (arr[i] < arr[pivot]) {
				swap(arr, i, index++);
			}
		}
		swap(arr, pivot, index - 1);
		return index - 1;
	}
	function swap(arr, i, j) {
		if (i !== j) {
			[arr[j], arr[i]] = [arr[i], arr[j]];
		}
	}
	quick(arr, 0, arr.length - 1);
	console.log(arr);
}
quickSort([1, 2, 3, 4, 55, 2, 2, 11, 3, 5, 2, 21, 1]);
