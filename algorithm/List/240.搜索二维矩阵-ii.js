/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (matrix, target) {
	if (!matrix.length || !matrix[0].length) return false;
	let h = matrix.length;
	let w = matrix[0].length;

	let row = h - 1,
		col = 0;
	while (row >= 0 && col < w) {
		if (matrix[row][col] > target) {
			row--;
		} else if (matrix[row][col] < target) {
			col++;
		} else return true;
	}
	return false;
};

var searchMatrix = function (matrix, target) {
	if (!matrix.length || !matrix[0].length) return false;
	let h = matrix.length;
	let w = matrix[0].length;

	let row = 0,
		col = w - 1;
	while (col >= 0 && row < h) {
		if (matrix[row][col] > target) {
			col--;
		} else if (matrix[row][col] < target) {
			row++;
		} else return true;
	}
	return false;
};

// @lc code=end
