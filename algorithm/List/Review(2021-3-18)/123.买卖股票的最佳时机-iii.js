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
/*
dp[i][k][0] = max(dp[i-1][k][0],dp[i-1][k][1]+prices[i])
dp[i][k][1] = max(dp[i-1][k][1],dp[i-1][k-1][0]-prices[i])
*/
var maxProfit = function (prices) {
	let [profitOut, profitIn] = [0, -prices[0]];
	let [profitOut2, profitIn2] = [0, -prices[0]];
	for (const p of prices) {
		profitOut2 = Math.max(profitOut2, profitIn2 + p);
		profitIn2 = Math.max(profitIn2, profitOut - p);
		profitOut = Math.max(profitOut, profitIn + p);
		profitIn = Math.max(profitIn, -p);
	}
	return profitOut2;
};
// @lc code=end
