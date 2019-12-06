"use strict";

const fill = (idx, num) => {
    let arr = [];
    while (idx < num) {
        arr.push(s.slice(i, i + 1))
        i++;
    }
    return arr;
}

let convert = (s, numRows) => {
    let arr = [fill(0, numRows)],
        i = 0;
    while (i < numRows - 2) {
        let j = 0,
            ar = [];
        while (j < numRows - 2) {
            ar[j + 1] = s.slice(i+j,)
            j++;
        }
        i++;
    }

}