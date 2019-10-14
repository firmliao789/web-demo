"use strict";
/**
 * 1、从数列中挑出一个元素，称为"基准"（pivot），
 * 2、重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（
 相同的数可以到任何一边）。在这个分区结束之后，该基准就处于数列的中间位置。
 这个称为分区（partition）操作。
 * 3、递归地把小于基准值元素的子数列和大于基准值元素的子数列排序。
 * @param arr
 */

const swap = (arr, i, j) => {
    let k = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
}

const quickSort = (arr, left, right) => {
    if (right < left)
        return;

    //默认开始的基准位置为起点位置
    let index = left,
        //方便遍历使用最后一个值 循环right处就不用加一了
        flg = arr[right];

    for (let i = left; i < right; i++) {
        //如果小于 则将当前数值与基准数替换 并记录下一次的基准位置
        if (arr[i] <= flg) {
            swap(arr, i, index);
            index++;
        }
    }

    //每次循环对比完成后 将基准index值替换为基准的数值
    swap(arr, right, index);
    //对index前面的数组进行排序
    quickSort(arr, left, index - 1);
    //对index后面的数排序
    quickSort(arr, index + 1, right);

    return arr;
}


export const quickSortTest = function () {
    let arr = [1, 3, 52, 54, 6, 2];
    console.log(quickSort(arr, 0, arr.length - 1));
}