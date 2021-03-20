/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	let memo = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(-1));
	function helper(m, n, row = 1, col = 1) {
		if (row === m && col === n) return 1;
		if (row > m || col > n) return 0;
		if (memo[row][col] === -1) {
			memo[row][col] = helper(m, n, row + 1, col) + helper(m, n, row, col + 1);
		}
		return memo[row][col];
	}
	return helper(m, n);
};

var uniquePaths = function (m, n) {
	let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(1));
	for (let i = m - 1; i > 0; i--) {
		for (let j = n - 1; j > 0; j--) {
			dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
		}
	}
	return dp[1][1];
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = uniquePaths;
// @after-stub-for-debug-end
