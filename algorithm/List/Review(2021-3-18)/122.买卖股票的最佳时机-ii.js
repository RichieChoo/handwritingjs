/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
/*
dp[i][k][0] = max(dp[i-1][k][0],dp[i-1][k][1]+prices[i])
dp[i][k][1] = max(dp[i-1][k][1],dp[i-1][k-1][0]-prices[i])
*/
var maxProfit = function (prices) {
	let [profitOut, profitIn] = [0, -prices[0]];
	for (const p of prices) {
		profitOut = Math.max(profitOut, profitIn + p);
		profitIn = Math.max(profitIn, profitOut - p);
	}
	return profitOut;
};
// @lc code=end
