/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
	let max = Math.max(num1.length, num2.length) + 1;
	let [word1, word2] = [num1.padStart(max, 0), num2.padStart(max, 0)];
	let r = max,
		carry = 0,
		res = [],
		sum = 0;

	while (r > 0) {
		sum = carry + parseInt(word1[r - 1]) + parseInt(word2[r - 1]);
		carry = Math.floor(sum / 10);
		sum = sum % 10;
		res.unshift(sum);
		r--;
	}
	!res[0] && res.shift();
	return res.join("");
};
// @lc code=end
