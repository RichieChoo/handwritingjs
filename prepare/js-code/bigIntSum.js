function bigIntSum(s1, s2) {
	let max = Math.max(s1.length, s2.length) + 1;
	let [word1, word2] = [s1.padStart(max, 0), s2.padStart(max, 0)];
	let r = max,
		carry = 0,
		res = [],
		sum = 0;

	while (r > 0) {
		sum = carry + parseInt(word1[r - 1]) + parseInt(word2[r - 1]);
		carry = Math.floor(sum / 10);
		sum = sum % 10;
		res.unshift(sum);
		r--;
	}
	!res[0] && res.shift();
	return res.join("");
}
console.log(bigIntSum("123123251335135123512342", "12331255357803433435"));
