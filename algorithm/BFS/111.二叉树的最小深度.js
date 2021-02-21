/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @description BFS 解法
 */
var minDepth = function (root) {
	if (!root) return 0;
	const q = [];
	q.push(root);
	let depth = 1;
	while (q.length !== 0) {
		let size = q.length;
		for (let i = 0; i < size; i++) {
			const cur = q.shift();

			//判断终点
			if (cur.left === null && cur.right === null) {
				return depth;
			}

			// 将 cur 的相邻节点加入队列
			if (cur.left !== null) {
				q.push(cur.left);
			}
			if (cur.right !== null) {
				q.push(cur.right);
			}
		}
		depth++;
	}
	return depth;
};
// @lc code=end
