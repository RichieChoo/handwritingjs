/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
	let count = 0;
	if (matrix.length && matrix[0].length) {
		let [h, w] = [matrix.length, matrix[0].length];

		let dp = Array.from({ length: h + 1 }, v => new Array(w + 1).fill(0));
		for (let i = 1; i <= h; i++) {
			for (let j = 1; j <= w; j++) {
				if (matrix[i - 1][j - 1] !== "0") {
					dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
					count = Math.max(count, dp[i][j]);
				}
			}
		}
	}
	return count * count;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maximalSquare;
// @after-stub-for-debug-end
