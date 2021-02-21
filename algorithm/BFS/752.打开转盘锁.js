/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
	const q = [];
	const visited = new Set([]);
	q.push("0000");
	visited.add("0000");
	let count = 0;
	while (q.length !== 0) {
		let size = q.length;
		for (let i = 0; i < size; i++) {
			let cur = q.shift();

			if (deadends.includes(cur)) {
				continue;
			}
			//终止条件
			if (cur === target) {
				return count;
			}

			for (let j = 0; j < cur.length; j++) {
				let up = plus(cur, j);
				if (!visited.has(up)) {
					q.push(up);
					visited.add(up);
				}
				let down = plus(cur, j, true);
				if (!visited.has(down)) {
					q.push(down);
					visited.add(down);
				}
			}
		}
		count++;
	}
	return -1;
};

function plus(s, j, minus = false) {
	let temp = parseInt(s.charAt(j));
	temp = (temp + (minus ? 9 : 1)) % 10;
	return s.substring(0, j) + temp + s.substring(j + 1);
}
// @lc code=end
