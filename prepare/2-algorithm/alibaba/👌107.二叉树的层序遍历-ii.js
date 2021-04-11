/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
	if (!root) return [];
	let q = [],
		res = [];
	q.push(root);
	while (q.length) {
		let size = q.length;
		let cPath = [];
		for (let i = 0; i < size; i++) {
			let cur = q.shift();
			cPath.push(cur.val);
			cur.left && q.push(cur.left);
			cur.right && q.push(cur.right);
		}
		res.unshift(cPath);
	}
	return res;
};
// @lc code=end
