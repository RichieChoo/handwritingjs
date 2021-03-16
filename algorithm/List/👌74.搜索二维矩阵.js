/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	if (!matrix.length || !matrix[0].length) return false;

	let [h, w] = [matrix.length, matrix[0].length];
	let col = 0,
		row = h - 1;

	while (row >= 0 && col < w) {
		if (matrix[row][col] === target) return true;
		if (matrix[row][col] > target) {
			row--;
		} else {
			col++;
		}
	}
	return false;
};
// @lc code=end
