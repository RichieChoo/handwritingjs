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
	let even = nums.filter(v => !(v % 2));
	let odd = nums.filter(v => v % 2);
	return nums.reduce((p, c, i) => {
		let cur = i % 2 === 0 ? even : odd;
		p[i] = cur[i >> 1];
		return p;
	}, []);
};

var sortArrayByParityII = function (nums) {
	let res = [];
	for (let i = 0, even = 0, odd = 1; i < nums.length; i++) {
		if (nums[i] % 2 === 0) {
			res[even] = nums[i];
			even += 2;
		} else {
			res[odd] = nums[i];
			odd += 2;
		}
	}
	return res;
};

var sortArrayByParityII = function (nums) {
	let temp1 = nums.filter(v => v % 2 === 0);
	let temp2 = nums.filter(v => v % 2 === 1);
	return nums.map((v, p) => {
		let arr = p % 2 === 0 ? temp1 : temp2;
		return arr[p>>1];
	});
};
// @lc code=end
