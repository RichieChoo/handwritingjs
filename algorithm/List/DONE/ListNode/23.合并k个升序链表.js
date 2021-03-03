/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var merge = function (l1, l2) {
	let emty = new ListNode(0);
	let cur = emty;
	while (l1 && l2) {
		if (l1.val > l2.val) {
			cur.next = l2;
			l2 = l2.next;
		} else {
			cur.next = l1;
			l1 = l1.next;
		}
		cur = cur.next;
	}
	cur.next = l1 || l2;
	return emty.next;
};
var mergeKLists = function (lists) {
	if (lists.length === 0) return null;
	while (lists.length > 1) {
		const l1 = lists.shift();
		const l2 = lists.shift();
		const m = merge(l1, l2);
		lists.push(m);
	}
	return lists[0];
};
// @lc code=end
