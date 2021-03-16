/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
	return quick(nums, 0, nums.length - 1, nums.length - k);
	function quick(arr, left, right, K) {
		let index;
		if (left < right) {
			// 划分数组
			index = partition(arr, left, right);
			// Top K
			if (K === index) {
				return arr[index];
			} else if (K < index) {
				// Top K 在左边
				return quick(arr, left, index - 1, K);
			} else {
				// Top k 在右边
				return quick(arr, index + 1, right, K);
			}
		}
		return arr[left];
	}
	function partition(arr, left, right) {
		// 取中间项为基准
		var datum = arr[Math.floor(Math.random() * (right - left + 1)) + left],
			i = left,
			j = right;
		// 开始调整
		while (i < j) {
			// 左指针右移
			while (arr[i] < datum) {
				i++;
			}

			// 右指针左移
			while (arr[j] > datum) {
				j--;
			}

			// 交换
			if (i < j) swap(arr, i, j);

			// 当数组中存在重复数据时，即都为datum，但位置不同
			// 继续递增i，防止死循环
			if (arr[i] === arr[j] && i !== j) {
				i++;
			}
		}
		return i;
	}
	function swap(arr, i, j) {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = findKthLargest;
// @after-stub-for-debug-end
