/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
	let res = [];
	let count = 0;
	function backtrack(board = [], row = 0) {
		if (row === n) {
			count++;
		}
		if (row > n) return;

		for (let col = 0; col < n; col++) {
			let invalid = board.some((c, r) => {
				let A = col;
				let B = col + row - r;
				let D = col - (row - r);
				return c === A || c === B || c === D;
			});
			if (!invalid) {
				board.push(col);
				backtrack(board, row + 1);
				board.pop();
			}
		}
	}
	backtrack();
	return count;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = totalNQueens;
// @after-stub-for-debug-end
