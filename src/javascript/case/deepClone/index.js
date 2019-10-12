import {isArray, isObject} from '../type'

/**
 * 数组深度拷贝
 * @param obj
 * @returns {*}
 */
const deepClone = (obj) => {
    let result = obj,
        isArr = isArray(obj),
        isObj = isObject(obj);
    if (isArr) {
        result = [];
        for (let i = 0; i < obj.length; i++) {
            if (isArray(obj[i]) || isObject(obj[i]))
                result.push(deepClone(obj[i]))
            else
                result.push(obj[i]);
        }
    }
    else if (isObj) {
        result = {};
        for (let key in obj) {
            if (isArray(obj[key]) || isObject(obj[key]))
                result[key] = deepClone(obj[key])
            else
                result[key] = obj[key];
        }
    }
    return result;
}

export const deepCloneTest = function () {
    let o = {
        a: 1,
        b: 2,
        c: {
            c1: 1,
            c2: function () {

            },
            c3: [1, 2, 3]
        },
        d: [
            {
                d11: 1,
                d33: 4,
                d44: {
                    d441: {}
                }
            }
        ],
        f: function () {
            console.log(2323)
        }
    }

    console.log(deepClone(o));

    o.d[0].d11 = 4569089;
}
