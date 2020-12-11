// 柯里化+闭包实现

function add(a) {
    let b = 0;
    function sum() {
        b = [...arguments].reduce((p, c) => p + c, b);
        return sum
    }
    sum.toString = function () { // 重写toSting() 方法
        return b;
    }

    return sum.call(this, ...arguments)

}
const a = add(1)(2)(3)(4)(5)(6)(7)(8)(9);
console.log(a)
const b = add(1, 2, 3)(4, 5, 6)(7, 8)(9);
console.log(b).valueOf()