/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
	let n = prices.length;
	if (!n) return 0;
	if (k > n / 2) {
		let max = 0;
		for (let i = 1; i < n; i++) {
			let p = prices[i] - prices[i - 1];
			if (p > 0) {
				max += p;
			}
		}
		return max;
	} else {
		let dp = new Array(n).fill(0);

		for (let t = 1; t <= k; t++) {
			let min = prices[0];
			let max = 0;
			for (let i = 0; i < n; i++) {
				min = Math.min(min, prices[i] - dp[i]);
				max = Math.max(max, prices[i] - min);
				dp[i] = max;
			}
		}
		return dp[n - 1];
	}
};
// @lc code=end
