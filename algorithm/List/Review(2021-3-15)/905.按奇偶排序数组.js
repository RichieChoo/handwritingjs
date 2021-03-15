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
	return [...A.filter(v => !(v % 2)), ...A.filter(v => v % 2)];
};

var sortArrayByParity = function (A) {
	let res = [];
	A.forEach(v => {
		if (v % 2) {
			res.push(v);
		} else {
			res.unshift(v);
		}
	});
	return res;
};
// @lc code=end
