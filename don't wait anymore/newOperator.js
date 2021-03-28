/*
实现new操作符
提示：new 生成的实例中可以
i. 访问构造函数的属性
ii. 访问构造函数原型的属性
*/
function newOperator() {
	var obj = new Object();
	//获取并移除arguments[0]
	var Constructor = Array.prototype.shift.call(arguments);

	//构造函数原型中的属性
	obj.__proto__ = Constructor.prototype;

	//获取构造函数属性
	Constructor.apply(obj, arguments);
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
