/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
	if (board.length && board[0].length) {
		let h = board.length;
		let w = board[0].length;
		let dirs = [
			[0, 1],
			[0, -1],
			[1, 0],
			[-1, 0],
		];

		function bfs(i, j) {
			if (i < 0 || j < 0 || i >= h || j >= w || board[i][j] !== "O") return;
			board[i][j] = "A";
			for (const [dx, dy] of dirs) {
				bfs(i + dx, j + dy);
			}
		}

		for (let i = 0; i < h; i++) {
			for (let j = 0; j < w; j++) {
				if (i === 0 || j === 0 || i === h - 1 || j === w - 1) {
					bfs(i, j);
				}
			}
		}
		for (let i = 0; i < h; i++) {
			for (let j = 0; j < w; j++) {
				board[i][j] = board[i][j] === "A" ? "O" : "X";
			}
		}
	}
};
// @lc code=end
