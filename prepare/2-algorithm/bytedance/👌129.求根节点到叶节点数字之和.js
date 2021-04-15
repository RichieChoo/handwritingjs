/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
 */
var sumNumbers = function (root, sum = 0) {
	if (!root) return 0;
	let sum2 = sum * 10 + root.val;
	if (!root.left && !root.right) return sum2;
	return sumNumbers(root.left, sum2) + sumNumbers(root.right, sum2);
};
// @lc code=end
