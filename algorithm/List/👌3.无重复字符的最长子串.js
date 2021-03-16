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

//  滑动窗口
var lengthOfLongestSubstring = function (s) {
	let index = -1;
	let res = 0;
	const visited = new Set();
	for (let i = 0; i < s.length; ++i) {
		if (i != 0) visited.delete(s[i - 1]);
		while (index < s.length - 1 && !visited.has(s[index + 1])) {
			index++;
			visited.add(s[index]);
		}
		res = Math.max(res, index - i + 1);
	}
	return res;
};

//dp
function lengthOfLongestSubstring(s) {
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
}

// @lc code=end

// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end
