/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	let pre = 0,
		cur = 1;
	for (let i = 0; i < n; i++) {
		[pre, cur] = [cur, pre + cur];
	}
	return cur;
};

/*
eg: n=5
i   dp[i]       methods
1   1           [1]
2   2           [1+1,2]
3   3           [1+1+1,1+2,2+1]
4   5           [1+1+1+1,1+1+2,1+2+1,2+1+1,2+2]
5   8           [1+1+1+1+1,1+1+1+2，1+1+2+1，1+2+1+1,2+1+1+1,,2+2+1,1+2+2,2+1+2]

*/
// @lc code=end
