/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
/*
dp[i][0] = max(dp[i-1][0],dp[i-1][1]+prices[i])
dp[i][1] = max(dp[i-1][1],dp[i-2][0]-prices[i])
每次 卖出 之后要等一天才能继续买入
*/
var maxProfit = function (prices) {
	let dp_pre_0 = 0,
		dp_i_0 = 0,
		dp_i_1 = -Infinity;
	for (let i = 0; i < prices.length; i++) {
		let temp = dp_i_0;
		dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
		dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i]);
		dp_pre_0 = temp;
	}
	return dp_i_0;
};
// @lc code=end
