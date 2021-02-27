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
	if (!nums.length) return;
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		let key = target - nums[i];
		if (map.has(key)) {
			return [map.get(key), i];
		} else {
			map.set(nums[i], i);
		}
	}
};
// @lc code=end
