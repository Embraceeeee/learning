/**
 * 有序数组的平方
 * @see https://www.programmercarl.com/0977.%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E5%B9%B3%E6%96%B9.html#%E6%9A%B4%E5%8A%9B%E6%8E%92%E5%BA%8F
 *
 * 查了下额外的小知识：非递减顺序排列即是数列递减，但不是单调递减，中间可以有重复。
 */

// 很想 看看如何原地弄出来呢 不用开辟其他的数组


/*
function sortedSquares(nums: number[]): number[] {
  // 感觉也是比较和交换，可以先这样，
  // 找到第一个大于0的那个临界值
  let right = nums.findIndex((num) => {
    if (num > 0) {
      return true;
    }
  });
  let left = right - 1;
  //   排序
  while (left > 0 && right < nums.length) {
    const leftValue = nums[left] * nums[left];
    const rightValue = nums[right] * nums[right];
    if (leftValue < rightValue) {
      left--;
    } else {
      right++;
      [nums[left], nums[right]] = [rightValue, leftValue];
    }
  }

  // 再统一取平放值
  return nums.map((num) => num * num);
}
*/



function sortedSquares1(nums: number[]): number[] {
  let left = 0,
    right = nums.length - 1;

  const result: number[] = [];

  while (left <= right) {
    const leftValue = nums[left] * nums[left];
    const rightValue = nums[right] * nums[right];

    if (leftValue < rightValue) {
      result.unshift(rightValue);
      right--;
    } else {
      result.unshift(leftValue);
      left++;
    }
  }
  return result;

}console.log(sortedSquares1( [-4,-1,0,3,10]) )
