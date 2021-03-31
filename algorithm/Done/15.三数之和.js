/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	if (nums.length < 3) return [];
	let nums = nums.sort((a, b) => a - b);
	let map = new Map();
	let target = 0,
		res = [];
	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > target) break;
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		let l = i + 1;
		let r = nums.length - 1;
		while (l < r) {
			let sum = nums[i] + nums[l] + nums[r];
			if (sum === target) {
				results.push([nums[i], nums[l], nums[r]]);
				while (nums[l] === nums[l + 1]) l++;
				while (nums[r] === nums[r - 1]) r--;
				l++;
				r--;
			} else if (sum < target) {
				l++;
			} else {
				r--;
			}
		}
	}
	return res;
};
// @lc code=end
