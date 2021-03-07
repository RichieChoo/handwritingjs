/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// var exist = function (board, word) {
// 	let m = board.length;
// 	if (!m) return false;
// 	let n = board[0].length;
// 	if (!n) return false;
// 	let res = [];
// 	let directions = [
// 		[0, 1],
// 		[0, -1],
// 		[1, 0],
// 		[-1, 0],
// 	];
// 	const cWord = () => word.charAt(res.length);
// 	function push(i, j) {
// 		res.push(board[i][j]);
// 		board[i][j] = "*";
// 	}
// 	function go(i, j) {
// 		if (board[i][j] == cWord()) push(i, j);
// 		for (const [x, y] of directions) {
// 			if (i + x >= 0 && i + x < m && j + y >= 0 && j + y < n) {
// 				if (board[i + x][j + y] === cWord()) push(i + x, j + y);
// 			}
// 		}
// 	}

// 	for (let i = 0; i < m; i++) {
// 		for (let j = 0; j < n; j++) {
// 			if (res.length < word.length) {
// 				go(i, j);
// 			}
// 		}
// 	}
// 	return res.join("") === word;
// };

var exist = function(board, word) {
    const h = board.length, w = board[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = new Array(h);
    for (let i = 0; i < visited.length; ++i) {
        visited[i] = new Array(w).fill(false);
    }
    const check = (i, j, s, k) => {
        if (board[i][j] != s.charAt(k)) {
            return false;
        } else if (k == s.length - 1) {
            return true;
        }
        visited[i][j] = true;
        let result = false;
        for (const [dx, dy] of directions) {
            let newi = i + dx, newj = j + dy;
            if (newi >= 0 && newi < h && newj >= 0 && newj < w) {
                if (!visited[newi][newj]) {
                    const flag = check(newi, newj, s, k + 1);
                    if (flag) {
                        result = true;
                        break;
                    }
                }
            }
        }
        visited[i][j] = false;
        return result;
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const flag = check(i, j, word, 0);
            if (flag) {
                return true;
            }
        }
    }
    return false;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = exist;
// @after-stub-for-debug-end
