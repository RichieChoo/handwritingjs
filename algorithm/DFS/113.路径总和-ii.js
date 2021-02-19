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
	let diff = targetSum - root.val;
	if (!root.left && !root.right) {
		return diff === 0 ? [path.concat(root.val)] : [];
	}
	return [
		...pathSum(root.left, diff, path.concat(root.val)),
		...pathSum(root.right, diff, path.concat(root.val)),
	];
};

// var pathSum = function (root, targetSum) {
// 	let res = [];
// 	let cur = [];
// 	function traverse(root, targetSum) {
// 		if (!root) return;
// 		let diff = targetSum - root.val;
// 		cur.push(root.val);
// 		if (!root.left && !root.right) {
// 			if (diff === 0) {
// 				res.push(cur);
// 			}
// 			cur.splice(0);
// 			return;
// 		}
// 		traverse(root.left, diff);
// 		traverse(root.right, diff);
// 	}
// 	traverse(root, targetSum);

// 	return res;
// };
// @lc code=end
