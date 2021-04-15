function myCall(ctx, ...args) {
	ctx = ctx || window;
	let fn = Symbol();
	ctx[fn] = this;
	let res = ctx[fn](...args);
	delete ctx[fn];
	return res;
}

function myApply(ctx, args) {
	ctx = ctx || window;
	let fn = Symbol();
	ctx[fn] = this;
	let res = ctx[fn](...args);
	delete ctx[fn];
	return res;
}

function bind(ctx, ...args) {
	let self = this;
	let res = function () {
		self.apply(ctx, args.concat(...arguments));
	};
	return res;
}

function debounce(fn, delay) {
	let timer;
	return function () {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		let ctx = this;
		let args = arguments;
		timer = setTimeout(function () {
			fn.apply(ctx, args);
		}, delay);
	};
}
function throttle(fn, delay) {
	let last = 0;
	let timer;
	return function () {
		let now = new Date();
		let ctx = this;
		let args = arguments;
		if (now - last > delay) {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
			fn.apply(ctx, args);
			last = now;
		} else if (!timer) {
			tiemr = setTimeout(function () {
				fn.apply(ctx, args);
				timer = null;
				last = new Date();
			}, delay - (now - last));
		}
	};
}
function myNew(c, ...args) {
	let obj = {};
	obj.__proto__ = c.prototype;
	c.apply(obj, args);
	return obj;
}
function instanceOf(a, b) {
	if (typeof b !== "function") return false;
	while (a) {
		if (a === b.prototype) {
			return true;
		} else {
			a = a.__proto__;
		}
	}
	return false;
}
class Emit {
	constructor() {
		this.deps = {};
	}
	on() {}
	off() {}
	fire() {}
	once() {}
}
function uniqueArray() {}
function curryAdd() {
	let b = 0;
	let sum = function () {
		b = [...arguments].reduce();
	};
}
