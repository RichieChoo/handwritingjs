/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let m = s.length,
		visited = [];
	let dp = new Array(m + 1).fill(1);
	dp[0] = 0;
	for (let i = 1; i <= m; i++) {
		let vIndex = visited.indexOf(s[i - 1]);
		visited = visited.slice(vIndex + 1);
		visited.push(s[i - 1]);
		dp[i] = visited.length;
	}
	return Math.max(...dp);
};

/*
eg: "pwwkew"
i   dp[i]   visited
0   0       []
1   1       [p]
2   2       [p,w]
3   1       [w]
4   2       [wk]
5   3       [wke]
6   3       [kew]

eg2: "dvdf"
i   dp[i]   visited
0   0       []
1   1       [d]
2   2       [d,v]
3   2       [v,d]
4   3       [v,d,f]

*/
// @lc code=end
