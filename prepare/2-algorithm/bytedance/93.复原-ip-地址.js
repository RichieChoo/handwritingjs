/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=i
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = s => {
	let res = [];
	const backtrack = (cPath = [], i = 0) => {
		if (cPath.length == 4 && i == s.length) {
			res.push(cPath.join("."));
			return;
		}
		if (cPath.length == 4 && i < s.length) return;
		for (let len = 1; len <= 3; len++) {
			if (i + len - 1 >= s.length) return; // 加上要切的长度就越界，不能切这个长度
			if (len != 1 && s[i] == "0") return; // 不能切出'0x'、'0xx'

			const str = s.substring(i, i + len); // 当前选择切出的片段
			if (len == 3 && Number(str) > 255) return; // 不能超过255

			cPath.push(str);
			backtrack(cPath, i + len);
			cPath.pop();
		}
	};
	backtrack();
	return res;
};

// @lc code=end
