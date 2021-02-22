/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		let targetIndex = nums.findIndex(v => v === target - nums[i]);
		if (targetIndex !== -1 && targetIndex !== i) {
			return [i, targetIndex];
		}
	}
};
// @lc code=end
