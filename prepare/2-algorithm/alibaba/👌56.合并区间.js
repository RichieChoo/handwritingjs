/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	if (intervals.length < 2) return intervals;
	intervals.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
	let pre = intervals[0];
	let res = [pre];
	for (const c of intervals) {
		if (c[0] <= pre[1]) {
			pre[1] = Math.max(pre[1], c[1]);
		} else {
			res.push(c);
			pre = c;
		}
	}
	return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end
