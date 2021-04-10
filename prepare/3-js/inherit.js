// 1. 原型链继承
(function prototypeInherit() {
	function Parent() {
		this.test = "test";
	}
	Parent.prototype.type = "type";
	function Child() {}
	Child.prototype = new Parent();
	let man = new Child();
	console.log(man.type, man.test, "\n");
})();

// 2. 构造继承
(function constructorInherit() {
	function Parent(test2) {
		this.test = "test";
		this.test2 = test2;
	}
	function Child(test2) {
		Parent.call(this, test2);
	}
	let man = new Child("test2");
	console.log(man.test, man.test2, "\n");
})();
// 3. 组合继承
(function combinationInherit() {
	function Parent(test2) {
		this.test = "test";
		this.test2 = test2;
	}
	Parent.prototype.type = "type";
	function Child(test2) {
		Parent.call(this, test2);
	}
	Child.prototype = new Parent();
	Child.prototype.constructor = Child;
	let man = new Child("test2");
	console.log(man.constructor, man.type, man.test, man.test2, "\n");
})();
// 4. 寄生式组合继承
(function parasiticCombinationInherit() {
	function Parent(test2) {
		this.test = "test";
		this.test2 = test2;
	}
	Parent.prototype.type = "type";
	function Child(test2) {
		Parent.call(this, test2);
	}
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
	let man = new Child("test2");
	console.log(man.constructor, man.type, man.test, man.test2, "\n");
})();

// 5. es6
class Parent {
	constructor(name) {
		this.name = name;
	}
}
class Child extends Parent {
	constructor(props) {
		super(props);
	}
}
let man = new Child("test");

console.log(man.name);
