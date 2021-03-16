/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
	const n = board.length;

	function go() {
		for (let row = 0; row < n; row++) {
			for (let col = 0; col < n; col++) {
				if (board[row][col] !== ".") continue;
				for (let i = 1; i <= 9; i++) {
					const c = String(i);
					if (isValid(row, col, c)) {
						board[row][col] = c;
						if (go(board, n)) return true;
					}
				}
				board[row][col] = ".";
				return false;
			}
		}
		return true;
	}
	function isValid(row, col, c) {
		const blockRow = Math.floor(row / 3) * 3;
		const blockCol = Math.floor(col / 3) * 3;
		for (let i = 0; i < n; i++) {
			if (board[row][i] === c || board[i][col] === c) return false;
			const curRow = blockRow + Math.floor(i / 3);
			const curCol = blockCol + Math.floor(i % 3);
			if (board[curRow][curCol] === c) return false;
		}
		return true;
	}
	go();
};
// @lc code=end
