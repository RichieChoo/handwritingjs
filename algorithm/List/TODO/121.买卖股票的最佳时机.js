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
	if (prices.length < 2) return 0;
	let [min, minIndex, max, maxIndex] = [prices[0], 0, prices[0], 0];
	for (let i = 1; i < prices.length; i++) {
		if (min > prices[i] && maxIndex <= minIndex) {
			min = max = prices[i];
			minIndex = maxIndex = i;
		} else if (max < prices[i] && maxIndex >= minIndex) {
			max = prices[i];
			maxIndex = i;
		}
	}
	return maxIndex > minIndex ? max - min : 0;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
