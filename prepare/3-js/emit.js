class Emit {
	constructor() {
		this.events = {};
	}
	on(key, callback) {
		if (this.events[key]) {
			this.events[key].push(callback);
		} else {
			this.events[key] = [callback];
		}
	}
	off(key, callback) {
		if (this.events[key]) {
			if (!this.events[key].length) {
				delete this.events[key];
			} else {
				let index = this.events[key].findIndex(v => v === callback);
				console.log("off", index);
				this.events[key] = this.events[key].filter(v => v !== callback);
			}
		}
	}
	fire(key) {
		this.events[key] && this.events[key].forEach(v => v());
	}
	once(key, callback) {
		let self = this;
		let fn = function () {
			callback();
			self.off(key, fn);
		};
		this.on(key, fn);
	}
}

let emit = new Emit();
let a = function () {
	console.log("testaaa");
};
emit.on("test", a);
emit.fire("test");
emit.off("test", a);
console.log(emit.events.test.length);

emit.once("once11", function () {
	console.log("aa once11");
});
emit.fire("once11");
console.log(emit.events.once11.length);
