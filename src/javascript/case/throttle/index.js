const throttle = (fn, delay = 200) => {
    let timer = null;
    return function () {
        if (timer)
            return false;
        fn.apply(this, arguments);
        timer = setTimeout(() => {
            timer = null;
        }, delay)
    }
}

function test(a) {
    console.log(a);
    console.log(this.a);
}

export const throttleTest = function () {
    const f = throttle(test);
    let o = {a: 123}
    o.f = f;
    setInterval(() => o.f(), 2000);
}
