/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
	if (!root) return [];
	let res = [],
		q = [];
	q.push(root);
	while (q.length) {
		let size = q.length;
		let cPath = [];
		for (let i = 0; i < size; i++) {
			let cur = q.shift();
			cur.left && q.push(cur.left);
			cur.right && q.push(cur.right);
			cPath.push(cur.val);
		}
		res.push(cPath);
	}
	return res;
};
// @lc code=end
