"use strict";

const myCall = function (obj) {
    obj.fn = this;
    const ret = obj.fn(...Array.from(arguments).slice(1, arguments.length));
    delete obj.fn;
    return ret;
}

Function.prototype.myCall = myCall;

const fn = function (a, b, n) {
    console.log(this.r, a, b, n);
    return a + b + n;
}

let obj = {
    r: 345
}

console.log(fn.myCall(obj, 3, 4, 5));
