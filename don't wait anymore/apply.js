/*
实现 apply
*/
Function.prototype.myApply = function () {
   let ctx = [].shift.call(arguments);
	ctx = ctx || window;
	const fn = Symbol();
	ctx[fn] = this;
	const res = ctx[fn](arguments);
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

Person.say.myApply(Person1, [18]); //我叫Tom1我今年18
