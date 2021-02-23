/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * @description 假设 dp[0...i−1] 都已经被算出来了，怎么算出dp[i]
 */
var lengthOfLIS = function (nums) {
	if (nums.length === 0) return 0;
	// dp[i]: nums[i]对应的最长递增子序列个数
	let dp = new Array(nums.length).fill(1);
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
	}
	return Math.max(...dp);
};
//[10,9,2,5,3,7,101,18] =>  4
// i     dp[i]
// 0      1
// 1      1
// 2      1
// 3      2
// 4      2
// 5      3
// 6      4
// 7      4

// @lc code=end
