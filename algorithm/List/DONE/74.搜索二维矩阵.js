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
	if (!matrix.length) return false;
	if (matrix.length === 1) return matrix[0].includes(target);
	let mid = Math.ceil(matrix.length / 2);
	let temp = matrix[mid];

	if (temp[temp.length - 1] < target) {
		return searchMatrix(matrix.slice(mid), target);
	} else if (temp[0] > target) {
		return searchMatrix(matrix.slice(0, mid), target);
	} else if (target >= temp[0] && target <= temp[temp.length - 1]) {
		return temp.includes(target);
	}
};
// @lc code=end
