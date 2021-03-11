/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
	if (!s) return "";
	let res = s.replace(/\d+\[\w+\]/g, function (v) {
		const matchAll = [...v.matchAll(/\d+|(?<=\[)\w+(?=\])/g)].filter(Boolean);
		const [count, word] = matchAll;
		return word[0].repeat(count[0]);
	});
	//嵌套递归处理
	if (res.match(/\d+\[\w+\]/g)) {
		return decodeString(res);
	}
	return res;
};

var decodeString = function (s) {
	if (!s) return "";
	let numsStack = [];
	let num = 0;
	let res = "";
	let strStack = [];
	for (let i = 0; i < s.length; i++) {
		const c = s[i];
		if (!isNaN(c)) {
			//数字
			num = num * 10 + Number(c);
		} else if (c === "[") {
			strStack.push(res);
			res = "";
			numsStack.push(num);
			num = 0;
		} else if (c === "]") {
			let str = strStack.pop();
			let count = numsStack.pop();
			res = str + res.repeat(count);
		} else {
			res += c;
		}
	}
	return res;
};
// @lc code=end
