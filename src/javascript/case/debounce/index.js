/**
 * @param fn 执行函数
 * @param delay 延迟参数
 * @returns {Function}
 */
const debounce = (fn, delay = 200) => {
    let timer = null;
    return function () {
        //延迟执行 多次执行 只执行一次
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}

function test(a) {
    console.log(this);
    console.log(a)
}


export const deBounceTest = function () {
    const deBounceFun = debounce(test);
    //模拟多次调用
    deBounceFun(1);
    deBounceFun(2);
    deBounceFun(3);

    let g = {a: 1}
    g.k = deBounceFun;
    //测试this是否绑定
    // g.k();
}
