/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
	return points
		.sort(([a1, a2], [b1, b2]) => a1 * a1 + a2 * a2 - (b1 * b1 + b2 * b2))
		.slice(0, k);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = kClosest;
// @after-stub-for-debug-end
