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
		/*
        被围绕的区间不会存在于边界上
        1 回溯标记：通过边缘
        2 根据标记改写
        */
		let [h, w] = [board.length, board[0].length];
		let dirs = [
			[0, 1],
			[0, -1],
			[1, 0],
			[-1, 0],
		];

		function backtrack(i, j) {
			if (i < 0 || j < 0 || i >= h || j >= w || board[i][j] !== "O") return;
			board[i][j] = "A";
			for (const [dx, dy] of dirs) {
				backtrack(i + dx, j + dy);
			}
		}

		for (let i = 0; i < h; i++) {
			for (let j = 0; j < w; j++) {
				if (i === 0 || j === 0 || i === h - 1 || j === w - 1) {
					backtrack(i, j);
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

// @after-stub-for-debug-begin
module.exports = solve;
// @after-stub-for-debug-end
