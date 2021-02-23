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
	let m = s.length;
	if (m === 0) return 0;
	let dp = new Array.fill(m + 1).fill(1);
	for (let i = 1; i <= m; i++) {
		if (s.charAt(i) == s.charAt(i - 1)) {
			dp[i] = dp[i - 1];
		} else {
			dp[i] = dp[i - 1] + 1;
		}
	}
};
/*
"pwwkew"
i   dp[i]
0   1
1   2
2   2
3   2
4   3
5   3
*/

// @lc code=end
