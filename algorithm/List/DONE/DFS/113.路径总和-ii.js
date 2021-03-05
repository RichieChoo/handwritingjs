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
var pathSum = function (root, targetSum) {
	let res = [];
	function traverse(root, target, path = []) {
		if (!root) return;
		path.push(root.val);
		let diff = target - root.val;
		if (!root.left && !root.right) {
			diff === 0 && res.push(path.slice());
		} else {
			traverse(root.left, diff, path);
			traverse(root.right, diff, path);
		}
		path.pop();
	}
	traverse(root, targetSum, []);
	return res;
};
// var pathSum = function (root, targetSum, path = []) {
// 	if (!root) return [];
// 	let diff = targetSum - root.val;
// 	if (!root.left && !root.right) {
// 		return diff === 0 ? [path.concat(root.val)] : [];
// 	}
// 	return [
// 		...pathSum(root.left, diff, path.concat(root.val)),
// 		...pathSum(root.right, diff, path.concat(root.val)),
// 	];
// };

// @lc code=end
