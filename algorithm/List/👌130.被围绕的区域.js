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
/*
任何边界上的 O 都不会被填充为 X。 我们可以想到，所有的不被包围的 O 都直接或间接与边界上的 O 相连。我们可以利用这个性质判断 O 是否在边界上，具体地说：

对于每一个边界上的 O，我们以它为起点，标记所有与它直接或间接相连的字母 O；
最后我们遍历这个矩阵，对于每一个字母：
如果该字母被标记过，则该字母为没有被字母 X 包围的字母 O，我们将其还原为字母 O；
如果该字母没有被标记过，则该字母为被字母 X 包围的字母 O，我们将其修改为字母 X。
*/
var solve = function (board) {
	if (!board.length || !board[0].length) return;
	let h = board.length,
		w = board[0].length,
		directions = [
			[0, 1],
			[0, -1],
			[1, 0],
			[-1, 0],
		];

	function dfs(i, j) {
		if (i < 0 || j < 0 || i >= h || j >= w || board[i][j] !== "O") return;
		board[i][j] = "A";
		for (const [dx, dy] of directions) {
			let x = dx + i;
			let y = dy + j;
			dfs(x, y);
		}
	}
	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
            //从边界开始标记
			(i === 0 || j === 0 || i === h - 1 || j === w - 1) && dfs(i, j);
		}
	}
	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
			board[i][j] = board[i][j] === "A" ? "O" : "X";
		}
	}
};
// @lc code=end
