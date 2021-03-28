/*
1.原型链继承
缺点：
i. 引用类型的属性被实例共享
ii.不能传参
*/
function prototypeInherit() {
	function Parent() {
		this.name = "testParent";
	}
	Parent.prototype.getName = function () {
		console.log(this.name);
	};

	function Child() {}
	Child.prototype = new Parent();

	var man = new Child();
	man.getName();
}

/*
2.构造函数继承
优点：
i. 避免了引用类型的属性被所有实例共享
ii.可以在 Child 中向 Parent 传参
缺点：
方法都在构造函数中定义，每次创建实例都会创建一遍方法。
*/
function constructorInherit() {
	function Parent() {
		this.name = ["test1", "test2"];
	}
	function Child() {
		Parent.call(this);
	}
	var man = new Child();
	man.name.push("ttt");
	console.log(man.name);
	var man2 = new Child();
	console.log(man2.name);
}
/*
3.组合继承
缺点是会调用两次父构造函数
*/
function combinationInherit() {
	function Parent(name) {
		this.name = name;
		this.types = ["test1", "test2"];
	}
	Parent.prototype.getName = function () {
		console.log(this.name);
	};
	function Child(name) {
		Parent.call(this, name);
	}
	Child.prototype = new Parent();
	Child.prototype.constructor = Child;

	var man = new Child("man1");
	man.types.push("test3");
	console.log(man.name, man.types);
	var man2 = new Child("man2");
	console.log(man2.name, man2.types);
}

/*
4.原型式继承
*/
function prototypalInherit() {
	// Object.create
	function createObj(obj) {
		function F() {}
		F.prototype = obj;
		return new F();
	}
	var person = {
		name: "person",
		types: ["test1", "test2"],
	};
	var man = createObj(person);
	var man2 = createObj(person);
	man.name = "man1";
	man.types.push("test3");
	console.log(man2.name, man2.types);
}
/*
5. 寄生式继承
创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。
 */

function parasiticInherit() {
	function createObj(o) {
		var clone = Object.create(o);
		clone.sayName = function () {
			console.log("hi");
		};
		return clone;
	}
}

/*
6.寄生组合继承
使用寄生式继承修复组合继承调用两次父构造函数的问题
*/

function parasiticCombinationInherit() {
	function Parent(name) {
		this.name = name;
		this.types = ["test1", "test2"];
	}
	Parent.prototype.getName = function () {
		console.log(this.name);
	};
	function Child(name) {
		Parent.call(this, name);
    }
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;

    var man = new Child("man1");
    man.types.push("test3")
    var man2 = new Child("man2");
    console.log(man.name,man.types)
    console.log(man2.name,man2.types)
}
parasiticCombinationInherit()
