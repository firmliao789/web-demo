import {log} from '../../log/index'

/**
 *javascript MDN描述
 *bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用
 * @param context 需要将函数this绑定到新的对象 默认值为window对象
 * @param * 其他预制参数
 * @returns {fBound} 返回this绑定后的函数
 */
Function.prototype.myBind = function (context = window) {
    //如果绑定的不是一个function直接抛出错误
    if (typeof this !== 'function')
        throw new TypeError('this 必须是一个函数');
    //保留绑定时的函数
    let self = this,
        //保留绑定时的参数 arguments为类数组 先转为数组 再去掉第一个参数context
        args = Array.from(arguments).slice(1),
        //创建一个空的function 用来中转 将self的原型赋给fBound
        //直接fBound.prototype=self.prototype 也能达到效果 但是会出现原型被修改的错误
        fNop = function () {
        },
        fBound = function () {
            //合并预制参数和调用时的参数
            const finalArgs = [...args, ...Array.from(arguments)];
            console.log(this);
            //判断绑定函数 是否使用new，fBound作为构造函数
            return self.apply(this instanceof fBound ? this : context, finalArgs);
        };
    //原型赋值
    if (self.prototype) {
        fNop.prototype = self.prototype;
    }
    //防止原型被修改
    fBound.prototype = new fNop();

    // fBound.prototype = self.prototype;

    return fBound;
}
let a = {
    b: 5
};
let test = function () {
    log('99'+this.b);
}
test.prototype.indent = 1;

//一般调用
let t1 = test.myBind(a);
t1(1); //1
// log(t1.prototype) //{constructor: ƒ}

//
let t2 = test.myBind(a);
t2(2);
t1.prototype.indent = 3;

let t3 = new t2();
// console.log(t3);
// console.log(t2.prototype);
