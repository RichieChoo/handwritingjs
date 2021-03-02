/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	let map = new Map();
	while (head !== null) {
		if (map.get(head)) return true;
		map.set(head, true);
		head = head.next;
	}
	return false;
};

var hasCycle = function (head) {
	let fast = head;
	let slow = head;
	while (fast) {
		if (fast.next == null) return false;
		slow = slow.next;
		fast = fast.next.next;
		if (slow == fast) return true;
	}
	return false;
};

var hasCycle = (head) => {
    let cur1 = head;    // cur1指针
    let step1 = 0;      // cur1指针走的步数
    while (cur1) {
      step1++;
      let cur2 = head;  // cur2指针从头遍历
      let step2 = 0;    // cur2指针走的步数
      while (cur2) {
        step2++;
        if (cur1 == cur2) {     // cur1和cur2的元素相同
          if (step1 == step2) { // 如果走的步数一样，即走到了cur1这里
            break;              // 退出内层while
          } else {              // 相遇但步数不一样
            return true;        // 说明链表有环。cur1比cur2多走一个环
          }
        }
        cur2 = cur2.next;   // cur2一次走一步
      }
      cur1 = cur1.next;     // cur1一次走一步
    }
    return false;
  };
// @lc code=end
