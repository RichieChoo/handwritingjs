/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 *
 */

/*
数独解法规则：
    数字 1-9 在每一行只能出现一次。
    数字 1-9 在每一列只能出现一次。
    数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
    空白格用 '.' 表示。
提示：
    给定的数独序列只包含数字 1-9 和字符 '.' 。
    你可以假设给定的数独只有唯一解。
    给定数独永远是 9x9 形式的
*/

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
	function backtrack(row, col) {
		if (row === 9) return;
		if (col === 9) {
			return backtrack(row + 1, 0);
		}

		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				if (board[i][j] !== ".") {
					return backtrack(i, j + 1);
				}
				for (let v = 0; v < 9; v++) {
					if (isValid(i, j, String(v))) {
						board[row][col] = String(v);
						board.backtrack(i, j + 1);
						board[row][col] = ".";
					}
				}
			}
		}
	}
	function isValid(row, col, char) {
		for (let i = 0; i < 9; i++) {
			// 数字 1-9 在每一行只能出现一次。
			if (board[row][i] === char) return false;

			// 数字 1-9 在每一列只能出现一次。
			if (board[i][col] === char) return false;

			let boxRow = parseInt(row / 3) * 3;
			let boxCol = parseInt(col / 3) * 3;
			if (board[boxRow + parseInt(i / 3)][boxCol + (i % 3)] === char) {
				return false;
			}
		}
		return true;
	}

	backtrack(0, 0);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = solveSudoku;
// @after-stub-for-debug-end
