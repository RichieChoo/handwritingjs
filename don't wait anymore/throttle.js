/*
实现 throttle 节流
*/

function throttle(fn, delay) {
	let last = 0,
		timer = null;
	return function () {
		let ctx = this;
		let args = arguments;
		let now = Date.now();
		if (now - last > delay) {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
			last = now;
			fn.apply(ctx, args);
		} else if (!timer) {
			timer = setTimeout(function () {
				last = Date.now();
				timer = null;
				fn.apply(ctx, args);
			}, delay - (now - last));
		}
	};
}
