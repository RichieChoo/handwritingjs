/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function (head) {
	let dummy = new ListNode(0);
	let temp = dummy;
	function sort(node) {}
	while (head.next !== null) {
		temp = temp.next;
		head = head.next;
	}
	return dummy.next;
};
// @lc code=end
