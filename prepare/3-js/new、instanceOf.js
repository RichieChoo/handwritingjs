function newOperator(Constructor, ...args) {
	let obj = {};
	obj.__proto__ = Constructor.prototype;
	Constructor.apply(obj, args);
	return obj;
}
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.sex = "male";
Person.prototype.getName = function () {
	console.log(this.name);
};

var man = newOperator(Person, "test", 18);
console.log(man.age, man.sex);
man.getName();

function MyInstanceOf(a, b) {
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
function a() {}
console.log(MyInstanceOf(a, Object));
