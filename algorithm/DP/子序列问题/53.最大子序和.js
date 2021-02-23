/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * @description
 */
var maxSubArray = function (nums) {
	if (nums.length === 0) return 0;
	let dp = new Array(nums.length).fill(-Infinity);
	dp[0] = nums[0];
	for (let i = 1; i < nums.length; i++) {
        // 对于dp[i],要么num[i]单独成最大，要么和dp[i-i]加起来最大，
		dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
	}
	return Math.max(...dp);
};
// @lc code=end
