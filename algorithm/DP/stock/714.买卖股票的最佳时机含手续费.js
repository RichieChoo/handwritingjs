/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
	let dp_i_0 = 0,
		dp_i_1 = -Infinity;
	for (let i = 0; i < prices.length; i++) {
		let temp = dp_i_0;
		dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i] - fee);
		dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i]);
	}
	return dp_i_0;
};
// @lc code=end
