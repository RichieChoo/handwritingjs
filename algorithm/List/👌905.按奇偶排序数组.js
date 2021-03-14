/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
	let result = [];
	for (const c of A) {
		if (c % 2 === 1) {
			result.push(c);
		} else result.unshift(c);
	}
	return result;
};

var sortArrayByParity = function (A) {
	return [...A.filter(v => !(v % 2)), ...A.filter(v => v % 2)];
};
// @lc code=end
