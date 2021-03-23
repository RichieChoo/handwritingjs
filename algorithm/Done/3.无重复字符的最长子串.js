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
	let dp = new Array(s.length + 1).fill(1);
	dp[0] = 0;
	let visited = [];
	for (let i = 1; i <= s.length; i++) {
		let index = visited.indexOf(s[i - 1]);
		if (index === -1) {
			visited.push(s[i - 1]);
			dp[i] = dp[i - 1] + 1;
		} else {
			visited = visited.slice(index + 1);
			visited.push(s[i - 1]);
			dp[i] = Math.max(dp[i], visited.length);
		}
	}
	return Math.max(...dp);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end
