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
	if (grid.length && grid[0].length) {
		let h = grid.length,
			w = grid[0].length,
			dirs = [
				[0, 1],
				[0, -1],
				[1, 0],
				[-1, 0],
			];
		function dfs(i, j) {
			if (i < 0 || j < 0 || i >= h || j >= w || grid[i][j] === "0") return;
			grid[i][j] = "0";
			for (const [dx, dy] of dirs) {
				let x = dx + i;
				let y = dy + j;
				dfs(x, y);
			}
		}
		for (let i = 0; i < h; i++) {
			for (let j = 0; j < w; j++) {
				if (grid[i][j] === "1") {
					dfs(i, j);
					count++;
				}
			}
		}
	}
	return count;
};
// @lc code=end
