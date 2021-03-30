/*
实现 trim
*/
String.prototype.myTrim = function () {
	let str = this;
	return str.replace(/(^\s+)|(\s+$)/g, "");
};
let s = "   asddf ssd  af     ";
console.log(s.trim() === s.myTrim());
