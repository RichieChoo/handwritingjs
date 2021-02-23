/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// Recursive
// var longestCommonSubsequence = function (text1, text2) {
// 	// 计算s1[i..]和s2[j..]的lsc
// 	let mapping = new Map();
// 	function dp(s1, i, s2, j) {
// 		if (!s1.length || !s2.length) return 0;
// 		if (i > s1.length - 1 || j > s2.length - 1) return 0;
// 		let key = `${i}#${j}`;
// 		if (mapping.has(key)) {
// 			return mapping.get(key);
// 		}
// 		let result;
// 		if (s1.charAt(i) === s2.charAt(j)) {
// 			// s1[i],s2[j]都在lcs
// 			result = dp(s1, i + 1, s2, j + 1) + 1;
// 		} else {
// 			// s1[i],s2[j]一个不在lcs
// 			result = Math.max(dp(s1, i + 1, s2, j), dp(s1, i, s2, j + 1));
// 			// s1[i],s2[j]都不在lcs被上面情况覆盖了
// 		}
// 		mapping.set(key, result);
// 		return result;
// 	}
// 	return dp(text1, 0, text2, 0);
// };

//DP
var longestCommonSubsequence = function (text1, text2) {
	const dp = [],
		m = text1.length,
		n = text2.length;
	for (let i = 0; i <= m; i++) {
		dp.push(new Array(n + 1).fill(0));
	}

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}
	return dp[m][n];
};
// @lc code=end
