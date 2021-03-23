/*
实现 debounce 防抖
*/

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
