function isObject(o) {
	return o && typeof o === "object";
}
function deepClone(obj) {
	if (!isObject) {
		throw new Error("not a object");
	}
	let res = Array.isArray(obj) ? [] : {};

	Object.keys(obj).forEach(v => {
		res[v] = isObject(obj[v]) ? deepClone(obj[v]) : obj[v];
	});
	return res;
}
