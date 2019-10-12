"use strict";
/**
 * new 方法
 * 1.创建一个空对象
 * 2.链接到原型
 * 3.绑定this值
 * 4.返回新对象
 */
import {log} from '../../log/index'

const myNew = function (f) {
    //创建一个空对象 链接到原型
    let obj = {'__proto__': f.prototype};
    //绑定this值
    f.apply(obj, arguments);
    //返回新对象
    return obj;
}

let fun = function (a) {
    log(a)
}

let f1 = myNew(fun);
let f2 = new fun(1);

log(f1)
log(f2)
log(fun.__proto__)
log(fun.prototype);
log(f1.__proto__)
log(f2.__proto__)
