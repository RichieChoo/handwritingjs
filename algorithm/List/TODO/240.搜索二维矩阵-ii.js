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
	if (!matrix || !matrix.length) return false;
	const h = matrix.length;
	const w = matrix[0].length;
	function has(startRow, endRow, startCol, endCol) {
		if (startRow > endRow || startCol > endCol) return false;
		const midRow = Math.ceil((endRow - startRow) / 2) + startRow;
		const midCol = Math.ceil((endCol - startCol) / 2) + startCol;
		if (matrix[midRow][midCol] === target) return true;
		if (matrix[midRow][midCol] < target) {
			return (
				has(midRow + 1, endRow, startCol, endCol) ||
				has(startRow, midRow, midCol + 1, endCol)
			);
		} else {
			return (
				has(startRow, midRow - 1, midCol, endCol) ||
				has(startRow, endRow, startCol, midCol - 1)
			);
		}
	}
	return has(0, h - 1, 0, w - 1);
};
// @lc code=end
