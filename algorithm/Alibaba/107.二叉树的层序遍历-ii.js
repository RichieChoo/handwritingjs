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
	let res = [];
	let q = [];
	q.push(root);
	while (q.length) {
		const size = q.length;
		const cPath = [];
		for (let i = 0; i < size; i++) {
			const cur = q.shift();
			if (!cur) return;
			cPath.push(cur.val);
			cur.left && q.push(cur.left);
			cur.right && q.push(cur.right);
		}
		res.unshift(cPath);
	}
	return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = levelOrderBottom;
// @after-stub-for-debug-end