/**
 * 209. 长度最小的子数组
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
 * @see https://programmercarl.com/0209.%E9%95%BF%E5%BA%A6%E6%9C%80%E5%B0%8F%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84.html#_209-%E9%95%BF%E5%BA%A6%E6%9C%80%E5%B0%8F%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84
 *
 *
 */
function minSubArrayLen(target: number, nums: number[]): number {
  // 最短的长度
  let minLen = 0;
  // 滑动窗口内部的值的和，该滑动窗口属于一个子数组
  let windowSum = nums[0] ?? 0;
  // 窗口左右边界（以数组索引表示）
  let windowRight = 0,
    windowLeft = 0;
  while (windowRight <= nums.length - 1) {
    if (windowSum >= target) {
      if (minLen == 0 || minLen > windowRight - windowLeft + 1) {
        minLen = windowRight - windowLeft + 1;
      }
      windowSum -= nums[windowLeft++];
    } else {
      windowSum += nums[++windowRight];
    }
  }
  return minLen;
}
console.log(minSubArrayLen(11, [1, 2]));

