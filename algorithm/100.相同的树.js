/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	if (p && q) {
		let rootSame = p.val === q.val;
		if (!rootSame) return rootSame;
		let leftSame = isSameTree(p.left, q.left);
		let rightSame = isSameTree(p.right, q.right);
		return leftSame && rightSame;
	} else return p === q;
};
// @lc code=end
