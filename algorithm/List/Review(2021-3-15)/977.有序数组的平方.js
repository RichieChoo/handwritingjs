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
	let l = 0,
		r = nums.length - 1;
	let res = [];
	let index = r;
	while (l <= r) {
		let squareL = nums[l] ** 2;
		let squareR = nums[r] ** 2;
		if (squareL < squareR) {
			res[index] = squareR;
			r--;
		} else {
			res[index] = squareL;
			l++;
		}
		index--;
	}
	return res;
};
// @lc code=end
