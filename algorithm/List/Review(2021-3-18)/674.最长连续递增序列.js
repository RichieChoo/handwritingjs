/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
	if (!nums.length) return 0;
	let dp = new Array(nums.length).fill(1);
	for (let i = 1; i < nums.length; i++) {
		dp[i] = nums[i] > nums[i - 1] ? dp[i - 1] + 1 : 1;
	}
	return Math.max(...dp);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findLengthOfLCIS;
// @after-stub-for-debug-end
