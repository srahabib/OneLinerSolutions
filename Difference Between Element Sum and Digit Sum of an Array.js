// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    return Math.abs(nums.reduce((partialSum, a) => partialSum + a, 0)-nums.reduce((partialSum, a) => partialSum + a.toString().split('').map(Number).reduce((a, b) =>a + b, 0), 0));
};