/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
	let arr1 = version1.split(".");
	let arr2 = version2.split(".");
	let max = Math.max(arr1.length, arr2.length);
	let c1,
		c2,
		i = 0;
	while (i < max) {
		c1 = parseInt(arr1[i]) || 0;
		c2 = parseInt(arr2[i]) || 0;
		if (c1 === c2) {
			i++;
		} else {
			return c1 > c2 ? 1 : -1;
		}
	}
	return 0;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = compareVersion;
// @after-stub-for-debug-end
