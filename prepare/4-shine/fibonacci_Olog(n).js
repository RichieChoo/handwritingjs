function multiply_matrix(a, b) {
	var c = new Array();
	for (y = 0; y < a.length; y++) {
		c[y] = new Array();
		for (x = 0; x < b[0].length; x++) {
			sum = 0;
			for (i = 0; i < a[0].length; i++) {
				sum += a[y][i] * b[i][x];
			}
			c[y][x] = sum;
		}
	}
	return c;
}
function pow_matrix(a, n) {
	if (n == 1) {
		return a;
	}
	half = pow_matrix(a, (n - (n % 2)) / 2);
	ret = multiply_matrix(half, half);
	if (n % 2) {
		ret = multiply_matrix(ret, a);
	}
	return ret;
}
function fibonacci(n) {
	// [f(n+2), f(n+1)] = [[1,1], [1,0]] [f(n+1), f(n)];
	// [f(n+2), f(n+1)] = [[1,1], [1,0]]^n [1, 0];
	a = [
		[1, 1],
		[1, 0],
	];
	a_n = pow_matrix(a, n);
	start = [[1], [0]];
	end = multiply_matrix(a_n, start);
	return end[1][0];
}
console.log(fibonacci(100));
