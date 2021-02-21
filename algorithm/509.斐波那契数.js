/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
	let map = new Map();

	function help(n) {
		if (n == 0) return 0;
		if (n == 1) return 1;
		if (map.get(n)) {
			return map.get(n);
		} else {
			let r = help(n - 1) + help(n - 2);
			map.set(n, r);
			return r;
		}
	}
	return help(n);
};
// @lc code=end
