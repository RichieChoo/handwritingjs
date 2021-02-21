/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (root === null) return [];
	let res = [];
	let q = [];
	q.push(root);

	while (q.length !== 0) {
		let size = q.length;
		let current = [];
		for (let i = 0; i < size; i++) {
			let cur = q.shift();
			if (cur.left !== null) {
				q.push(cur.left);
			}
			if (cur.right !== null) {
				q.push(cur.right);
			}
			current.push(cur.val);
		}
		res.push(current);
	}

	return res;
};

// @lc code=end
