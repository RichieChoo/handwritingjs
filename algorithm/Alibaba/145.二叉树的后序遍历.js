/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
	let res = [];
	function traverse(root) {
		if (!root) return;
		traverse(root.left);
		traverse(root.right);
		res.push(root.val);
	}
	traverse(root);
	return res;
};

var postorderTraversal = function (root) {
	if (!root) return [];
	let res = [];
	let stack = [];
	if (root) stack.push(root);
	while (stack.length) {
		let cur = stack.pop();
		res.unshift(cur.val);
		cur.left && stack.push(cur.left);
		cur.right && stack.push(cur.right);
	}
	return res;
};
// @lc code=end
