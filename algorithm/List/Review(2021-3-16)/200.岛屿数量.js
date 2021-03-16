/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let count = 0;
	if (!grid.length || !grid[0].length) return count;
	let [h, w] = [grid.length, grid[0].length];
	let dirs = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	let map = new Array(h).fill(new Array(w).fill(false));

	function backtrack(i, j) {
		if (i < 0 || j < 0 || i >= h || j >= w || grid[i][j] === "0" || map[i][j])
			return;
		map[i][j] = true;
		for (const [dx, dy] of dirs) {
			backtrack(i + dx, j + dy);
		}
	}

	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
			//防止count 多次增加
			if (grid[i][j] === "1" && !map[i][j]) {
				backtrack(i, j);
				count++;
			}
		}
	}
	return count;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = numIslands;
// @after-stub-for-debug-end
