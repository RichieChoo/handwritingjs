/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
// DFS
var maxDepth = function (root) {
	if (!root) return 0;
	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// BFS
var maxDepth = function (root) {
	if (!root) return 0;
	let q = [],
		ans = 0;
	q.push(root);
	while (q.length) {
        let size = q.length;
		for (let i = 0; i < size; i++) {
			let cur = q.shift();
			cur.left && q.push(cur.left);
			cur.right && q.push(cur.right);
		}
		ans++;
	}
	return ans;
};

// @lc code=end
