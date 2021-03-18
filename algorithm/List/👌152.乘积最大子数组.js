/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// dp[i][0] nums[..i]的子数组乘积最小值
// dp[i][1] nums[..i]的子数组乘积最大值
var maxProduct = function (nums) {
	let dp = new Array(nums.length).fill().map(v => new Array(2).fill());
	dp[0][0] = nums[0];
	dp[0][1] = nums[0];
	for (let i = 1; i < nums.length; i++) {
		dp[i][0] = Math.min(preMin * nums[i], preMax * nums[i], nums[i]);
		dp[i][1] = Math.max(preMin * nums[i], preMax * nums[i], nums[i]);
	}
	return Math.max(...dp.map(v => v[1]));
};
var maxProduct = function (nums) {
	let preMin = nums[0];
	let preMax = nums[0];
	let res = nums[0];
	for (let i = 1; i < nums.length; i++) {
		let temp1 = preMin * nums[i];
		let temp2 = preMax * nums[i];
		preMin = Math.min(temp1, temp2, nums[i]);
		preMax = Math.max(temp1, temp2, nums[i]);
		res = Math.max(preMax, res);
	}
	return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProduct;
// @after-stub-for-debug-end
