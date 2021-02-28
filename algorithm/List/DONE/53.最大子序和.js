/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let m = nums.length;
	let dp = new Array(m + 1).fill(-Infinity);
	dp[0] = nums[0];
	for (let i = 1; i < m; i++) {
		dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
	}
	return Math.max(...dp);
};
// @lc code=end
