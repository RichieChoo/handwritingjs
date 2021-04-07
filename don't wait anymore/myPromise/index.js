/*
1. Pending/Fulfilled/Rejected
2. 立即执行Promise参数Fn，传入resolve,reject
3.thenable
4.value
5.reason
*/

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
	constructor(executor) {
		try {
			executor(this.resolve, this.reject);
		} catch (error) {
			this.reject(error);
		}
	}
	status = PENDING;
	value = null;
	reason = null;
	onFulfilledCallbacks = [];
	onRejectedCallbacks = [];
	resolve = value => {
		if (this.status !== PENDING) return;
		this.status = FULFILLED;
		this.value = value;
		this.handle("onFulfilledCallbacks", value);
	};
	reject = reason => {
		if (this.status !== PENDING) return;
		this.status = REJECTED;
		this.reason = reason;
		this.handle("onRejectedCallbacks", reason);
	};
	handle(cbType, val) {
		if (!this[cbType] && !this[cbType].length) return;
		while (this[cbType].length) {
			this[cbType].shift()(val);
		}
	}
	then(onFulfilled, onRejected) {
		const realOnFulfilled =
			typeof onFulfilled === "function" ? onFulfilled : val => val;
		const realOnRejected =
			typeof onRejected === "function"
				? onRejected
				: reason => {
						throw reason;
				  };
		let promise2 = new MyPromise((resolve, reject) => {
			const fulfilledMicrotask = () => {
				queueMicrotask(() => {
					try {
						const x = realOnFulfilled(this.value);
						resolvePromise(promise2, x, resolve, reject);
					} catch (error) {
						reject(error);
					}
				});
			};
			const rejectedMicrotask = () => {
				queueMicrotask(() => {
					try {
						const x = realOnRejected(this.reason);
						resolvePromise(promise2, x, resolve, reject);
					} catch (error) {
						reject(error);
					}
				});
			};
			if (this.status === FULFILLED) {
				fulfilledMicrotask();
			} else if (this.status === REJECTED) {
				rejectedMicrotask();
			} else if (this.status === PENDING) {
				this.onFulfilledCallbacks.push(fulfilledMicrotask);
				this.onRejectedCallbacks.push(rejectedMicrotask);
			}
		});
		return promise2;
	}
	static resolve(val) {
		if (val instanceof MyPromise) return param;
		return new MyPromise(resolve => {
			resolve(val);
		});
	}
	static reject = reason =>
		new MyPromise((resolve, reject) => {
			reject(reason);
		});
	static all = arr => {
		return new MyPromise((resolve, reject) => {
			if (!Array.isArray(arr)) {
				throw new Error("is not iterable");
			}
			let res = [];
			let count = 0;
			arr.forEach(v => {
				v.then(res => {
					count++;
					res.push(res);
				});
			});
			if (res.length === count) {
				resolve(res);
			}
		});
	};
}

function resolvePromise(temp, x, resolve, reject) {
	if (temp === x) {
		return reject(
			new TypeError("Chaining cycle detected for promise #<Promise>"),
		);
	}
	if (x && ["object", "function"].includes(typeof x)) {
		let then;
		try {
			then = x.then;
		} catch (error) {
			return reject(error);
		}
		if (typeof then === "function") {
			let called = false;
			try {
				then.call(
					x, // this 指向 x
					y => {
						if (called) return;
						called = true;
						resolvePromise(temp, y, resolve, reject);
					},
					r => {
						if (called) return;
						called = true;
						reject(r);
					},
				);
			} catch (error) {
				if (called) return;
				reject(error);
			}
		} else {
			resolve(x);
		}
	} else resolve(x);
}

MyPromise.deferred = function () {
	var result = {};
	result.promise = new MyPromise(function (resolve, reject) {
		result.resolve = resolve;
		result.reject = reject;
	});

	return result;
};
module.exports = MyPromise;
