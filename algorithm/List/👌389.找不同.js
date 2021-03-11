/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
	let res = t;
	for (const c of s) {
		res = res.replace(c, "");
	}
	return res;
};

var findTheDifference = function (s, t) {
	let sum1 = s.split("").reduce((p, c) => p + c.charCodeAt(0), 0);
	let sum2 = t.split("").reduce((p, c) => p + c.charCodeAt(0), 0);
	return String.fromCharCode(sum2 - sum1);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findTheDifference;
// @after-stub-for-debug-end
