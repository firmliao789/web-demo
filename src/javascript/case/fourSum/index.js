"use strict";

/**
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，
 * 判断 nums 中是否存在四个元素 a，b，c 和 d ，
 * 使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 1、先对数组从小到大排序
 * 2、第一层循环获取第一个数 如果当前index大于零，判断是否和前一个数重复，如果重复直接跳过
 * 3、第二层循环获取第二个数 如果当前index大于i+1，判断是否和前一个数重复，如果重复直接跳过
 * 4、第三层循环，分别从数组k=j+1开始获取第三个数，从c=len-1开始向前获取第4个数，
 * 当k>j+1判断第k和k-1是否重复，重复则跳过，当c<len-1时，判断第c和c+1是否重复，重复则跳过
 **/

const fourSum = (nums, target) => {
    //先由小到大排序
    nums = nums.sort((a, b) => a - b);
    let len = nums.length,
        result = [];
    for (let i = 0; i < len; i++) {
        //判断当前数是否大于目标 则不符合条件 跳出循环
        if (i > 0 && nums[i - 1] === nums[i])
            continue;
        for (let j = i + 1; j < len; j++) {
            if (j > i + 1 && nums[j - 1] === nums[j])
                continue;
            let k = j + 1, c = len - 1;
            while ((k < len - 1) && k < c) {
                if (c < len - 1 && nums[c] === nums[c + 1]) {
                    c--;
                    continue;
                }
                if (k > j + 1 && nums[k] === nums[k - 1]) {
                    k++;
                    continue;
                }
                let sum = nums[i] + nums[j] + nums[k] + nums[c];
                if (sum === target) {
                    console.log(i, j, k, c);
                    result.push([nums[i], nums[j], nums[k], nums[c]]);
                    k++;
                    c--;
                } else if (sum > target) {
                    c--;
                } else {
                    k++;
                }
            }
        }
    }
    return result;
}
export const fourSumTest = function () {
    let nums = [1, -2, -5, -4, -3, 3, 3, 5]
    console.log(fourSum(nums, -11));
}
