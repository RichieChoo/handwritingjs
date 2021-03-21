/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	let res = [];
	function traverse(root) {
		if (!root) return;
		traverse(root.left);
		res.push(root.val);
		traverse(root.right);
	}
	traverse(root);
	return res;
};
var inorderTraversal = function (root) {
	let res = [];
	let stack = [];
	while (root || stack.length) {
		if (root) {
			stack.push(root);
			root = root.left;
		} else {
			root = stack.pop();
			res.push(root.val);
			root = root.right;
		}
	}
	return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = inorderTraversal;
// @after-stub-for-debug-end
