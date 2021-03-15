/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
	let temp1 = nums.filter(v => v % 2 === 0);
	let temp2 = nums.filter(v => v % 2 === 1);
	return nums.map((v, p) => {
		let arr = p % 2 === 0 ? temp1 : temp2;
		return arr[Math.floor(p / 2)];
	});
};

var sortArrayByParityII = function (nums) {
	let result = new Array(nums.length);
	for (let i = 0, even = 0, odd = 1; i < nums.length; i++) {
		const v = nums[i];
		if (v % 2 === 0) {
			result[even] = v;
			even += 2;
		} else {
			result[odd] = v;
			odd += 2;
		}
	}
	return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = sortArrayByParityII;
// @after-stub-for-debug-end
