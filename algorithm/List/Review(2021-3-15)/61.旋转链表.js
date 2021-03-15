/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
	if (!head || !head.next) return head;
	let cur = head,
		start = head,
		tail = head,
		length = 0;
	while (cur) {
        tail = cur;
		cur = cur.next;
		length++;
	}
	k = k % length;
	if (k === 0) return head;
	for (let i = 1; i < length - k; i++) {
		start = start.next;
	}
	tail.next = head;
	head = start.next;
	start.next = null;
	return head;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = rotateRight;
// @after-stub-for-debug-end
