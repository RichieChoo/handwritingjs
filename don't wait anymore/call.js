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


let Person = {
	name: "Tom",
	say(age) {
		console.log(this.name, age);
	},
};

Person1 = {
	name: "Tom1",
};

Person.say.myCall(Person1, 18); //我叫Tom1我今年18
