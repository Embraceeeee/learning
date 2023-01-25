/**
 * 二分查找
 * @see https://programmercarl.com/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html#_704-%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE
 * @param nums 排序好的number类型数组
 * @param target 目前值，以找到该值对应的索引
 *
 */
function search(nums: number[], target: number): number {
  // left、right取边缘值(开区间)
  let left = -1,
    right = nums.length;

  while (left < right - 1 ) {

    const middle = left + ((right - left)>>1);
    const middleValue = nums[middle];
    console.log(left,middle,right)
    if (target == middleValue) {
      return middle;
    } else if (target < middleValue) {
      right = middle;
    } else if (target > middleValue) {
      left = middle;
    }   
  }
  return -1;
}
console.log(search([-1,0,3,5,9,12], 9));
