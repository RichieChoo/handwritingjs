/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	if (!matrix.length || !matrix[0].length) return false;
	let col = 0,
		row = matrix.length - 1;

	while (row >= 0 && col < matrix[0].length) {
		if (matrix[row][col] < target) {
			col++;
		} else if (matrix[row][col] > target) {
			row--;
		} else {
			return true;
		}
	}
	return false;
};

var searchMatrix = function (matrix, target) {
	if (!matrix.length || !matrix[0].length) return false;
	let [h, w] = [matrix.length, matrix[0].length];
	function binarySearch(nums) {
		let l = 0,
			r = nums.length - 1;
		while (l <= r) {
			let mid = l + ((r - l) >> 1);
			if (target < nums[mid]) {
				r = mid - 1;
			} else if (target > nums[mid]) {
				l = mid + 1;
			} else return true;
		}
		return false;
	}

	for (const line of matrix) {
        //过滤不需要判断的row，
		if (line[0] <= target && line[line.length - 1] >= target) {
			if (binarySearch(line)) return true;
		}
	}
	return false;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = searchMatrix;
// @after-stub-for-debug-end
