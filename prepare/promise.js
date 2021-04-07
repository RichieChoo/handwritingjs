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
							throw new Error(reaso);
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
		return new Promise(resolve => {
			resolve(param);
		});
	}
	static reject(param) {
		return new Promise((resolve, reject) => {
			reject(param);
		});
	}
	static all(param) {
		return new Promise((resolve, reject) => {
			if (params == null || typeof params[Symbol.iterator] !== "function";) {
				throw new Error("must be iterable");
				reject("must be iterable");
			}
			let count = param.length;
			let res = [];
			param.forEach((p, i)=> {
				p.then(function (x) {
					res[i] = x;
				}, reject).then(s{
					if (--count === 0) resolve(res);
				});
			});
		});
	}
}
