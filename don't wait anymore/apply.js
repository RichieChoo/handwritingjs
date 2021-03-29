/*
实现 apply
*/
Function.prototype.myApply = function (ctx, args) {
	ctx = ctx || window;
	const fn = Symbol();
	ctx[fn] = this;
	const res = ctx[fn](...args);
	delete ctx[fn];
	return res;
};
let Person = {
	name: "Tom",
	say(age,sex) {
		console.log(this.name, age,sex);
	},
};

Person1 = {
	name: "Tom1",
};

Person.say.myApply(Person1, [18,'male']); //我叫Tom1我今年18
