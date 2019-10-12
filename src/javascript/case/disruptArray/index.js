"use strict";
/**
 * 数组乱序
 * @param arr
 */
const disruptArray = (arr) => arr.sort(() => Math.random() > .5 ? -1 : 1)


export const disruptArrayTest = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    console.log(disruptArray(arr));
}
