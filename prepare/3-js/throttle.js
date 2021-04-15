function throttle(fn, delay) {
	let last = 0;
	let timer;
	return function () {
		let now = new Date();
		let ctx = this;
		let args = arguments;
		if (now - last > delay) {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
			last = now;
			fn.apply(ctx, args);
		} else if (!timer) {
			timer = setTimeout(function () {
				last = new Date();
				timer = null;
				fn.apply(ctx, args);
			}, delay - (now - last));
		}
	};
}
