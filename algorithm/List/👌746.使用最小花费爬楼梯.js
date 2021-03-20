/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
	if (cost.length === 1) return 0;
	if (cost.length === 2) return Math.min(...cost);
	let costFist = cost[0];
	let costSecond = cost[1];
	for (let i = 2; i < cost.length; i++) {
		const c = cost[i] + Math.min(costFist, costSecond);
		costFist = costSecond;
		costSecond = c;
	}
	return Math.min(costFist, costSecond);
};
// @lc code=end
