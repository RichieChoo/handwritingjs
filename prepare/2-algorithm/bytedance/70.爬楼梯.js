/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 超时
// var climbStairs = function (n) {
// 	if (n === 0 || n === 1) return 1;
// 	let map = new Map();
// 	if (map.get(n)) {
// 		return map.get(n);
// 	} else {
// 		res = climbStairs(n - 1) + climbStairs(n - 2);
// 		map.set(n, res);
// 		return res;
// 	}
// };
var climbStairs = function (n) {
	let pre = 1,
		cur = 1;
	for (let i = 2; i <= n; i++) {
		[pre, cur] = [cur, pre + cur];
	}
	return cur;
};
// @lc code=end
