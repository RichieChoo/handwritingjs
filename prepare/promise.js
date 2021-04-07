const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class MyPromise {
	constructor(executor) {
		executor(this.resolve, this.reject);
	}
	status = PENDING;
	value = null;
	reason = null;
	fulfilledCallbacks = [];
	rejectedCallbacks = [];

	handle(type, val) {
		if (!this[type] || !this[type].length) return;
		let len = this[type].length;
		while (len) {
			this[type].shift()(val);
			len--;
		}
	}
	resolve = val => {
		if (this.status !== PENDING) return;
		this.status = FULFILLED;
		this.handle("fulfilledCallbacks", val);
	};
	reject = reason => {
		if (this.status !== PENDING) return;
		this.status = REJECTED;
		this.handle("rejectedCallbacks", reason);
	};
	then(onFulfilled, onRejected) {
		let resolv;
		let promise2 = new MyPromise();
	}
	static resolve(param) {}
	static reject(param) {}
}
