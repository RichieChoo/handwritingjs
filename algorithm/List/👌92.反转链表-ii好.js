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
	let start = head,
		cur = head;
	let i = 1;
	//找到开始反转的left位置
	while (i < left) {
		start = cur;
		cur = cur.next;
		i++;
	}
	let pre = null,
		tail = cur;
	// 反转到right位置
	while (i <= right) {
		let next = cur.next;
		cur.next = pre;
		pre = cur;
		cur = next;
		i++;
	}
	// start接上反转后的pre
	start.next = pre;
	// tail 接上反转后的cur
    tail.next = cur;

    //如果从第一位开始反转，则返回 pre，否走返回head即可
	return left === 1 ? pre : head;
};
// @lc code=end
