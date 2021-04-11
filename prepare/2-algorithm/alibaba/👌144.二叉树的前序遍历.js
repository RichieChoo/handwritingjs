/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
	let res = [];
	function traverse(root) {
		if (!root) return;
		res.push(root.val);
		traverse(root.left);
		traverse(root.right);
	}
	traverse(root);
	return res;
};
//根左右
var preorderTraversal = function (root) {
	let res = [],
		stack = [];
	if (root) stack.push(root);
	while (stack.length) {
		let cur = stack.pop();
		res.push(cur.val);
		cur.right && stack.push(cur.right);
		cur.left && stack.push(cur.left);
	}
	return res;
};
// @lc code=end
