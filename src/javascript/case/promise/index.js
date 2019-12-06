let PENDING = 0,
    FULFILLED = 1,
    REJECTED = 2;

class Promise {
    constructor(f) {
        this._state = PENDING;
        this.result = null;
        this.resolveCallBacks = [];
        this.rejectCallBacks = [];

        f(this.resolve.bind(this), this.reject.bind(this))
    }

    resolve(ret) {
        if (this._state === PENDING) {
            this._state = FULFILLED;
            this.result = ret;
        }
        this.handleCalBack();
    }

    reject(error) {
        if (this._state === PENDING) {
            this._state = REJECTED;
            this.result = error;
        }
        this.handleCalBack();
    }

    handleCalBack() {
        if (this._state === FULFILLED) {
            this.resolveCallBacks.forEach((cb) => {
                cb && cb(this.result)
            })
        }
        if (this._state === REJECTED) {
            this.rejectCallBacks.forEach((cb) => {
                cb && cb(this.result)
            })
        }
    }

    then(resolveCallback, rejectCallBack) {
        //方便多次then链式调用 并兼容resolve reject返回的是promise类型 返回一个promise
        if (this._state === PENDING) {
            return new Promise((resolve, reject) => {
                this.resolveCallBacks.push(function (ret) {
                    resolve(ret);
                })
                this.rejectCallBacks.push(function (error) {
                    reject(error);
                })
            })
        }

        if (this._state === FULFILLED)
            return new Promise((resolve, reject) => {
                let result = resolveCallback(this.result);
                if (result instanceof Promise)
                    result.then(resolve, reject);
                else
                    resolve(result);
            })

        if (this._state === REJECTED)
            return new Promise((resolve, reject) => {
                let result = rejectCallBack(this.result);
                if (result instanceof Promise)
                    result.then(resolve, reject)
                else
                    reject(result);
            })

    }
}

export const promiseTest = function () {
    new Promise((resolve, reject) => {
        resolve(666)
    }).then((data) => {
        console.log('resolve1:' + data)
        return new Promise((resolve, reject) => {
            resolve(999)
        })
    }).then((data) => {
        console.log('resolve2:' + data)
    })
}

