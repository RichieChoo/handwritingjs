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

//栈
var decodeString = function (s) {
	let num = 0;
	let res = "";
	let strStack = [];
	let numStack = [];
	for (const c of s) {
		if (!isNaN(c)) {
			//此时c为数字，前数*10 +c
			num = num * 10 + Number(c);
		} else if (c === "[") {
			//入栈
			strStack.push(res); //str已经解码完毕
			res = "";
			numStack.push(num);
			num = 0;
		} else if (c === "]") {
			//已经解码完毕的str出栈+当前res * count
			let count = numStack.pop();
			res = strStack.pop() + res.repeat(count);
		} else {
			res += c;
		}
	}
	return res;
};

// 正则
var decodeString = function (s) {
	if (!s) return "";
	let res = s.replace(/\d+\[\w+\]/g, function (c, ...rest) {
        //使用后前断言匹配要重复的字母
		const matchAll = [...c.matchAll(/\d+|(?<=\[)\w+(?=\])/g)].filter(Boolean);
		const [count, word] = matchAll;
		return word[0].repeat(count[0]);
	});
	if (/\d+\[\w+\]/g.test(res)) {
        //递归处理嵌套
		return decodeString(res);
	}
	return res;
};
// @lc code=end
