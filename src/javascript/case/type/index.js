const type = function (v) {
    return Object.prototype.toString.call(v);
}

export const isArray = (arr) => type(arr) === '[object Array]';
export const isObject = (arr) => type(arr) === '[object Object]';
