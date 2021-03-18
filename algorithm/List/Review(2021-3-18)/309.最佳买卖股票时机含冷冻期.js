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
dp[i][k][0] = max(dp[i-1][k][0],dp[i-1][k][1]+prices[i])
dp[i][k][1] = max(dp[i-1][k][1],dp[i-1][k-1][0]-prices[i])
*/
var maxProfit = function (prices) {
	let [profitOut, profitIn] = [0, -prices[0]];
	let freeze = 0;
	for (const p of prices) {
		let temp = profitOut;
		profitOut = Math.max(profitOut, profitIn + p);
		profitIn = Math.max(profitIn, freeze - p);
		freeze = temp;
	}
	return profitOut;
};
// @lc code=end
