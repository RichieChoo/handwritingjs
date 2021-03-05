/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	if (!nums.length) return -1;
	let [start, end, mid] = [0, nums.length - 1];
	while (start <= end) {
		mid = Math.ceil((start + end) / 2);
		if (nums[start] === target) return start;
		if (nums[mid] === target) return mid;
		if (nums[end] === target) return end;
		if (nums[start] < nums[mid]) {
			// 说明目标值存在于有序部分，将末尾设置为mid
			// 继续执行二分查找
			if (nums[start] < target && target < nums[mid]) {
				end = mid - 1;
			} else {
				// 说明目标值存在于后半段
				start = mid + 1;
			}
		} else {
			// 说明后半部分有序
			// 判断目标值是否在后半部分
			if (nums[mid] < target && target < nums[end]) {
				start = mid + 1;
			} else {
				// 说明目标值存在于后半段
				end = mid - 1;
			}
		}
	}
	return -1;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = search;
// @after-stub-for-debug-end
