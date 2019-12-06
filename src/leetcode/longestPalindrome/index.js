"use strict";

/**
 * 最长回文子串
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 */

const longestPalindrome = (str = '') => {
    let len = str.length,
        i = 0,
        result = str.slice(0, 1);
    while (i < len) {
        let j = 1,
            s = str.slice(i, i + 1),
            s0 = '';
        while (true) {
            let s1 = null,
                s2 = null;
            if (i - j >= 0)
                s1 = str.slice(i - j, i - j + 1);
            if (i + j <= len)
                s2 = str.slice(i + j, i + j + 1);
            if (!s1 || !s2)
                break;
            if (s1 === s2)
                s = `${s1}${s}${s2}`;
            else
                break;
            j++;
        }
        j = 1;
        while (true) {
            let s3 = null,
                s4 = null;
            if (i + j <= len)
                s4 = str.slice(i + j, i + j + 1);
            if (i - j + 1 >= 0)
                s3 = str.slice(i - j + 1, i - j + 2);
            if (!s3 || !s4)
                break;
            if (s3 === s4)
                s0 = `${s3}${s0}${s4}`;
            else
                break;
            j++;
        }
        if (s0.length > s.length)
            s = s0;
        if (result.length < s.length)
            result = s;
        i++;
    }
    return result;
}
let test = "abcda";
console.log(longestPalindrome(test));