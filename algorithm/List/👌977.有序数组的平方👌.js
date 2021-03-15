/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	return nums.map(v => v * v).sort((a, b) => a - b);
};

// 双指针
var sortedSquares = function (nums) {
	let result = [];
	let l = 0,
		r = nums.length - 1;
	let p = r;
	while (l <= r) {
		let ll = nums[l] ** 2;
		let rr = nums[r] ** 2;
		if (ll > rr) {
			result[p] = ll;
			l++;
		} else {
			result[p] = rr;
			r--;
		}
		p--;
	}
	return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = sortedSquares;
// @after-stub-for-debug-end