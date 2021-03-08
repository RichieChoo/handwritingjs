/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * @description
 */
const uniquePaths = (m, n) => {
	const memo = new Array(m + 1).fill(0);
	for (let i = 0; i < memo.length; i++) {
		memo[i] = new Array(n + 1).fill(-1);
	}
	const helper = (row, col) => {
		if (row === m && col === n) return 1;
		if (row > m || col > n) return 0;
		if (memo[row][col] === -1) {
			let right = helper(row, col + 1);
			let down = helper(row + 1, col);
			memo[row][col] = right + down;
		}
		return memo[row][col];
	};
	return helper(1, 1);
};

// @lc code=end
