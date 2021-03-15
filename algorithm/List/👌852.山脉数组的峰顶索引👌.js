/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
	let i = 0;
	while (arr[i] < arr[i + 1]) i++;
	return i;
};
var peakIndexInMountainArray = function (arr) {
	let l = 0,
		r = arr.length - 1;
	while (l < r) {
		let mid = l + ((r - l) >> 1);
		if (arr[mid] < arr[mid + 1]) {
			l = mid + 1;
		} else r = mid;
	}
	return l;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = peakIndexInMountainArray;
// @after-stub-for-debug-end
