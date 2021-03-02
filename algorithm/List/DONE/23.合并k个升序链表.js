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
var mergeKLists = function (lists) {
	if (lists.length === 0) return null;
	function merge(a, b) {
		const dummy = new ListNode(0);
		let temp = dummy;
		while (a !== null && b !== null) {
			if (a.val < b.val) {
				temp.next = a;
				a = a.next;
			} else {
				temp.next = b;
				b = b.next;
			}
			temp = temp.next;
		}
		if (a !== null) {
			temp.next = a;
		}
		if (b !== null) {
			temp.next = b;
		}
		return dummy.next;
	}
	while (lists.length > 1) {
		const node1 = lists.shift();
		const node2 = lists.shift();
		const h = merge(node1, node2);
		lists.push(h);
	}
	return lists[0];
};
// @lc code=end
