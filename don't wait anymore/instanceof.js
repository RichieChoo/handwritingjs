/*
实现instanceOf操作符
*/
function myInstanceOf(left, right) {
	if (typeof right !== "function") return false;
	if (typeof left !== "object" || typeof left !== "function") return false;
	while (left) {
		if (left === right.prototype) {
			return true;
		}
		left = left.__proto__;
	}
	return false;
}

function a() {}
console.log(myInstanceOf(a, Object));
