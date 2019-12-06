"use strict";
/**
 * 两数之和
 *给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 **/

const twoSum = (arr, target) => {
    let map = new Map(),
        len = arr.length;
    for (let i = 0; i < len; i++) {
        map.set(arr[i], i);
    }
    for (let i = 0; i < len; i++) {
        let j = map.get(target - arr[i])
        if (j && j !== i) {
            return [i, j];
        }
    }
}

export const twoSumTest = function () {
    let arr = [2, 7, 8, 9, 10];
    console.log(twoSum(arr, 10));
}
