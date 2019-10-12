"use strict";
import {log} from '../../log/index'

/**
 * instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
 * @param L
 * @param R
 * @returns {boolean}
 */
const myInstanceOf = function (L, R) {
    L = L.__proto__;
    R = R.prototype;

    while (true) {
        log(L)
        if (L === null)
            return false;
        if (L === R)
            return true;
        //一层层查找
        L = L.__proto__;
    }
}

let fun = function () {

};

let f1 = new fun();

log(myInstanceOf(f1, fun))

log(myInstanceOf(f1, Object));
