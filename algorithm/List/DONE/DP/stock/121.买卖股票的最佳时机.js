/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let max = 0,
		min = Infinity;
	for (let i = 0; i < prices.length; i++) {
		min = Math.min(min, prices[i]);
		max = Math.max(max, prices[i] - min);
	}
	return max;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
