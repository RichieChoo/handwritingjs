function sum(a, b) {
	let max = Math.max(a.length, b.length) + 1;
	a = a.padStart(max, "0");
	b = b.padStart(max, "0");
	let res = [],
		carry = 0;
	while (max >= 1) {
		let sum = parseInt(a[max - 1]) + parseInt(b[max - 1]) + carry;
		carry = Math.floor(sum / 10);
		sum %= 10;
		res.unshift(sum);
		max--;
	}
	res = res[0] === "0" ? res.slice(1) : res;
	return res.join("");
}

// 验证
sum("12312312312312312311", "999919239919291230");
