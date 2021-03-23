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
	let max, shortArr;
	if (arr1.length > arr2.length) {
		max = arr1;
		shortArr = arr2;
	} else if (arr1.length < arr2.length) {
		max = arr2;
		shortArr = arr1;
	} else shortArr = false;
	shortArr && shortArr.push(...new Array(max - shortArr.length).fill("0"));
	while (max > 0) {
		let v1 = arr1.shift();
		let v2 = arr2.shift();
		if (!isNaN(v1) && !isNaN(v2)) {
			if (parseInt(v1) > parseInt(v2)) {
				return 1;
			} else if (parseInt(v1) < parseInt(v2)) {
				return -1;
			} else {
				max--;
			}
		}
	}
	return 0;
};
// @lc code=end
