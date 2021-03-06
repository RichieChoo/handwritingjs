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
	if (prices.length < 2) return 0;
	let [buy1, sell1, buy2, sell2] = [-prices[0], 0, -prices[0], 0];
	for (let i = 1; i < prices.length; i++) {
		buy1 = Math.max(buy1, -prices[i]);
		sell1 = Math.max(sell1, buy1 + prices[i]);
		buy2 = Math.max(buy2, sell1 - prices[i]);
		sell2 = Math.max(sell2, prices[i] + buy2);
	}
	return sell2;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
