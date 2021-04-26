function repeat(func, times, wait) {
	let args;
	function fn() {
		args = arguments;
		setTimeout(() => {
			func(...args);
			if (--times !== 0) {
				fn(...args);
			}
		}, wait);
	}
	return fn;
}
const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("hello world");
