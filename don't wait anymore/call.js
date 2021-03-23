/*
实现 call
*/

Function.prototype.myCall = function (ctx, ...args) {
	ctx = ctx || window;
	const fn = Symbol();
	ctx[fn] = this;
	const res = ctx[fn](...args);
	delete ctx[fn];
	return res;
};
