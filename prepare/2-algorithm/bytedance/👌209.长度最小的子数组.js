/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let res = Infinity;
	let l = 0,
		sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		while (sum >= target) {
			res = Math.min(res, i + 1 - l);
			sum -= nums[l];
			l++;
		}
	}
	return res === Infinity ? 0 : res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = minSubArrayLen;
// @after-stub-for-debug-end