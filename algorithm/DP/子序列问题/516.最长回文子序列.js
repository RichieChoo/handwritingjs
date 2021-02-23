/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * @description 状态、dp[i]含义、dp[i]状态转移方程、base case
 */
var longestPalindromeSubseq = function (s) {
	if (s === "") return 0;
	let dp = new Array(s.length).fill(1);
	for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if(dp[i])

        }
        dp[i] = Math.max(dp[i],dp[])
    }
};

// "bbbab" 4
// "cbbd"  2
// @lc code=end
