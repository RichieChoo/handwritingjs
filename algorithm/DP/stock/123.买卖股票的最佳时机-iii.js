/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let dp_i_1_0 = 0,
		dp_i_1_1 = -Infinity;
	let dp_i_2_0 = 0,
		dp_i_2_1 = -Infinity;
	for (let i = 0; i < prices.length; i++) {
		dp_i_2_0 = Math.max(dp_i_2_0, dp_i_2_1 + prices[i]);
		dp_i_2_1 = Math.max(dp_i_2_1, dp_i_1_0 - prices[i]);

		dp_i_1_0 = Math.max(dp_i_1_0, dp_i_1_1 + prices[i]);
		dp_i_1_1 = Math.max(dp_i_1_1, -prices[i]);
	}
	return dp_i_2_0;
};
// @lc code=end
