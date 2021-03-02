/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
	let pre = null;
	let cur = head;
	while (cur !== null) {
		const next = cur.next;
		cur.next = pre;
		pre = cur;
		cur = next;
	}
	return pre;
};
// var reverseList = function (head) {
// 	if (!head || !head.next) return head;
// 	let res = reverseList(head.next);
// 	head.next.next = head;
// 	head.next = null;
// 	return res;
// };
// @lc code=end
