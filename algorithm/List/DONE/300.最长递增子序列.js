/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	let m = nums.length;
	if (m === 0) return 0;
	let dp = new Array(m).fill(1);
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[i], dp[j - 1] + 1);
			}
		}
	}
	return Math.max(...dp);
};
/*
eg:[10,9,2,5,3,7,101,18]
i   dp[i]
0   0
1   1
2   1
3   1
4   2
5   2
6   3
7   4
8   4

*/
// @lc code=end
