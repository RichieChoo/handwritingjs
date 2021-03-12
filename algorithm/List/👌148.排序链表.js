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
	if (!head || !head.next) return head;
	let [slow, fast] = [head, head];
	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	// left:list start->slow , right: slow.next -> list end
	const [left, right] = [head, slow.next];
	// 拆开 left , right;
	slow.next = null;
	let l1 = sortList(left);
	let l2 = sortList(right);

	//merge两个有序链表
	return merge(l1, l2);
};
function merge(l1, l2) {
	let empty = new ListNode(0);
	let cur = empty;
	while (l1 && l2) {
		if (l1.val >= l2.val) {
			cur.next = l2;
			l2 = l2.next;
		} else {
			cur.next = l1;
			l1 = l1.next;
		}
		cur = cur.next;
	}
	cur.next = l1 || l2;
	return empty.next;
}
// @lc code=end
