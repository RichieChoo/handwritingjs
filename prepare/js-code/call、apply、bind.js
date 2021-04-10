Function.prototype.myCall = function (ctx, ...args) {
	ctx = ctx || window;
	let fn = Symbol();
	ctx[fn] = this;
	let res = ctx[fn](...args);
	delete ctx[fn];
	return res;
};
Function.prototype.myApply = function (ctx, args) {
	ctx = ctx || window;
	let fn = Symbol();
	ctx[fn] = this;
	let res = ctx[fn](...args);
	delete ctx[fn];
	return res;
};

/*
实现 bind
1. 创建一个新函数。当这个新函数被调用时，第一个参数将作为它运行时的 this，
之后的一序列参数将会在传递的实参前传入作为它的参数
2. 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。
提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
*/
Function.prototype.myBind = function (ctx, ...args) {
	let self = this;
	let F = function () {};
	F.prototype = self.prototype;
	let res = function () {
		self.apply(this instanceof F ? this : ctx, args.concat(...arguments));
	};
	res.prototype = new F();
	return res;
};
