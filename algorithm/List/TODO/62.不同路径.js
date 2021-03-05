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
    for(let i = 0; i < memo.length; i++) {
        memo[i] = new Array(n + 1).fill(-1);
    }
    return helper(m, n, 1, 1, memo);
};

const helper = (m, n, row, col, memo) => {
    if(row === m && col === n) return 1;
    if(row > m || col > n) return 0;

    if(memo[row][col] === -1) {

        const pathsRight = helper(m, n, row, col + 1, memo);
        const pathsDown = helper(m, n, row + 1, col, memo);

        memo[row][col] = pathsRight + pathsDown;
    }

    return memo[row][col];
};

// @lc code=end
