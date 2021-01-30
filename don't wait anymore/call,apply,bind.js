// 手动实现call,apply,bind
// 1。call
Function.prototype.myCall2 = function () {
    const [ctx, ...args] = [...arguments]
    if (typeof ctx === 'undefined' || ctx === null) {
        ctx = window
    }
    ctx.fn = this
    let result = ctx.fn(args)
    delete ctx.fn
    return result
}
let a = {
    name: "a",
    fn:{
        name: "b",
        test:function(){
            console.log(this.name)
        }
    }
}

a.fn.test.myCall2(a)
console.log(a)