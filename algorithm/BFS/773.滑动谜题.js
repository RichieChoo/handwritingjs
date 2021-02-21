/*
 * @lc app=leetcode.cn id=773 lang=javascript
 *
 * [773] 滑动谜题
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
	/*
    0 1 2
    3 4 5
    */
	const map = {
		0: [1, 3],
		1: [0, 2, 4],
		2: [1, 5],
		3: [0, 4],
		4: [1, 3, 5],
		5: [2, 4],
	};
	function swap(s, pos, next) {
		const arr = s.split("");
		[arr[pos], arr[next]] = [arr[next], arr[pos]];
		return arr.join("");
	}

	let s = "";
	board.forEach(v => (s += v.join("")));

	const visited = new Set(s);

	const q = [];
	q.push([s, s.indexOf("0"), 0]);
	while (q.length !== 0) {
		let size = q.length;
		for (let i = 0; i < size; i++) {
			const [s, pos, moves] = q.shift();
			if (s === "123450") return moves;
			for (let next of map[pos]) {
				const newS = swap(s, pos, next);
				if (visited.has(newS)) continue;
				visited.add(newS);
				q.push([newS, next, moves + 1]);
			}
		}
	}
	return -1;
};
// @lc code=end
