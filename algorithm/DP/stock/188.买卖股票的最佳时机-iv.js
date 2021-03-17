/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} j
 * @param {number[]} prices
 * @return {number}
 */

/*
 dp[i][j][0] = max(dp[i-1][j][0],dp[i-1][j][1]+prices[i])
 dp[i][j][1] = max(dp[i-1][j][1],dp[i-1][j-1][0]-prices[i])
 */
var maxProfit = function (k, prices) {
	let n = prices.length;
	if (!n) return 0;
	if (k > n / 2) {
		//由于一次买入卖出要两天，最多操作prices.length次
		let dp_i_0 = 0,
			dp_i_1 = -Infinity;
		for (let i = 0; i < n; i++) {
			let temp = dp_i_0;
			dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
			dp_i_1 = Math.max(dp_i_1, temp - prices[i]);
		}
		return dp_i_0;
	} else {
		let dp = new Array(n)
			.fill()
			.map((v, p) =>
				new Array(k + 1).fill().map((l, m) => new Array(2).fill()),
			);

		for (let i = 0; i < n; i++) {
			for (let j = k; j >= 1; j--) {
				if (i === 0) {
					dp[i][j][0] = 0;
					dp[i][j][1] = -prices[i];
					continue;
				}
				if (j === 0) {
					dp[i][0][0] = 0;
					dp[i][0][1] = -prices[i];
					continue;
				}
				dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
				dp[i][j][1] = Math.max(
					dp[i - 1][j][1],
					dp[i - 1][j - 1][1] - prices[i],
				);
			}
		}
		return dp[n - 1][k][0];
	}
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
