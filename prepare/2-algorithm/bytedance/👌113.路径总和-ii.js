/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum, path = []) {
	if (!root) return [];
	let dif = targetSum - root.val;
	if (!root.left && !root.right) {
		return dif === 0 ? [path.concat(root.val)] : [];
	}
	let left = pathSum(root.left, dif, path.concat(root.val));
	let right = pathSum(root.right, dif, path.concat(root.val));
	return [...left, ...right];
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = pathSum;
// @after-stub-for-debug-end
