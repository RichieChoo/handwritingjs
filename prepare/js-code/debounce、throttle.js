function debounce(fn, delay) {
	let timer;
	return function () {
		let ctx = this;
		let args = arguments;
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(function () {
			fn.apply(ctx, args);
		}, delay);
	};
}

function throttle(fn, delay) {
	let timer;
	let last = 0;
	return function () {
		let ctx = this;
		let args = arguments;
		let now = new Date();
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
