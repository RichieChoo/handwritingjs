/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
	let i = 1,
		start = head;
	cur = head;
	while (i < left) {
		start = cur;
		cur = cur.next;
		i++;
	}

	let pre = null,
		tail = cur;
	while (i <= right) {
		let next = cur.next;
		cur.next = pre;
		pre = cur;
		cur = next;
		i++;
	}

	start.next = pre;
	tail.next = cur;

	return left === 1 ? pre : head;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reverseBetween;
// @after-stub-for-debug-end
