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
	let dp = new Array(nums.length + 1).fill(-Infinity);
	for (let i = 1; i <= nums.length; i++) {
		dp[i] = Math.max(dp[i - 1] + nums[i - 1], nums[i - 1]);
	}
	return Math.max(...dp);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxSubArray;
// @after-stub-for-debug-end
