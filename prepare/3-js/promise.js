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
			let a = this[type].shift();
			a && a(val);
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
		let promise2 = new MyPromise((resolve, reject) => {
			let realOnFulfilled =
				typeof onFulfilled === "function" ? onFulfilled : val => val;
			let realOnRejected =
				typeof onRejected === "function"
					? onRejected
					: reason => {
							throw new Error(reason);
					  };
			const fulfilledMicrotask = () => {
				queueMicrotask(() => {
					let x = realOnFulfilled(this.value);
					resolve(x);
				});
			};
			const rejectedMicrotask = () => {
				queueMicrotask(() => {
					let x = realOnRejected(this.reason);
					reject(x);
				});
			};
			if (this.status === PENDING) {
				this.fulfilledCallbacks.push(fulfilledMicrotask);
				this.fulfilledCallbacks.push(rejectedMicrotask);
			} else if (this.status === FULFILLED) {
				fulfilledMicrotask();
			} else if (this.status === REJECTED) {
				rejectedMicrotask();
			}
		});
		return promise2;
	}
	static resolve(param) {
		return new MyPromise(resolve => {
			resolve(param);
		});
	}
	static reject(param) {
		return new MyPromise((resolve, reject) => {
			reject(param);
		});
	}
	static all(promises) {
		return new MyPromise((resolve, reject) => {
			if (promises == null || typeof promises[Symbol.iterator] !== "function") {
				throw new Error("must be iterable");
				reject("must be iterable");
			}
			let count = promises.length;
			let res = [];
			promises.forEach((p, i) => {
				p.then(function (x) {
					res[i] = x;
				}, reject).then(res => {
					if (--count === 0) resolve(res);
				});
			});
		});
	}
}
