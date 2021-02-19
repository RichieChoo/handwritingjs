/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
	if (!root || !root.left) return root;
	root.left = getNodeNext(root, true);
	root.left = getNodeNext(root, false);
	connect(root.right);
	connect(root.left);
	return root;
};

function getNodeNext(root, isLeft) {
	let res = root.next
		? root.next.left
			? root.next.left
			: root.next.right
			? root.next.right
			: null
		: null;
	if (isLeft) {
		return root.right ? root.right : res;
	}
	return res;
}
// @lc code=end
