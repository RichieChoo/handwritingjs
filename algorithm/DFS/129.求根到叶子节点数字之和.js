/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * @description
 */
var sumNumbers = function (root) {
	let sum = 0;
	function traverse(root, cur) {
		if (!root) return;

		cur = cur * 10 + root.val;
		if (!root.left && !root.right) {
			sum += cur;
			return;
		}
		if (root.left) traverse(root.left, cur);
		if (root.right) traverse(root.right, cur);
	}
	traverse(root, sum);
	return sum;
};
// @lc code=end
