/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
	let res = 0;
	if (grid.length && grid[0].length) {
		let h = grid.length;
		let w = grid[0].length;
		let dirs = [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
		];

		function dfs(i, j, area = 0) {
			if (i < 0 || j < 0 || i >= h || j >= w || grid[i][j] === 0) return 0;
			grid[i][j] = 0;
			area++;
			for (const [dx, dy] of dirs) {
				area += dfs(i + dx, j + dy, 0);
			}
			return area;
		}

		for (let i = 0; i < h; i++) {
			for (let j = 0; j < w; j++) {
				if (grid[i][j] === 1) {
					let area = dfs(i, j);
					res = Math.max(res, area);
				}
			}
		}
	}
	return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxAreaOfIsland;
// @after-stub-for-debug-end
