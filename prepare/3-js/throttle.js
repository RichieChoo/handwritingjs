function throttle(fn, delay) {
	let last = 0;
	return function () {
		let now = new Date();
		if (now - last > delay) {
			fn(...arguments);
			last = now;
		}
	};
}
