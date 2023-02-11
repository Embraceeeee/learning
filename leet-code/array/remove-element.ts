/**
 *
 * 移除元素
 * @see https://www.programmercarl.com/0027.%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0.html
 * @param nums
 * @param val
 * @returns 移除元素后的数组长度
 */

function removeElement(nums: number[], val: number): number {
  console.log("nums:", nums);
  let left = 0,
    right = nums.length - 1;
  // 遍历数组
  for (left = 0; left <= right; left++) {
    // 当发现 遍历到的值为 val值时， 做交换
    if (nums[left] == val) {
      // 从尾元素 开始遍历，如果尾元素的值也是val，那不做交换，right--跳过该元素
      while (nums[right] == val) {
        right--;
      }
      // 当 right 大于 left的时候才交换
      right > left && swap(nums, left, right);
    }
  }
  console.log("left:", left, "right:", right, "val:", val);
  return right + 1;
}

function swap(nums: number[], leftIndex: number, rightIndex: number) {
  [nums[leftIndex], nums[rightIndex]] = [nums[rightIndex], nums[leftIndex]];
}
console.log("---remove element ");
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([3, 3], 2));
console.log(removeElement([5, 2, 3, 5, 5], 5));
console.log("---remove element ");

// 题解部分有一道中做法和这个相似，感觉可以复现

function removeElement1(nums: number[], val: number): number {
  console.log("nums:", nums);
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    // 由左边开始找，等于val的值（下面while 不等于的话跳过）
    while (left <= right && nums[left] != val) {
      ++left;
    }

    // 由右边开始找，不等于 val的值（下面while 不等于的话跳过）
    while (left <= right && nums[right] == val) {
      --right;
    }

    // 两者交换 将右边不等于val的元素覆盖左边等于val的 元素
    if (left < right) {
      // [nums[left], nums[right]] = [nums[right], nums[left]];
      nums[left++] = nums[right--];
    }
  }
  console.log("left:", left, "right:", right, "val:", val);

  //  这个时候左索引即等于 移除元素后的数组长度
  return left;
}
console.log("---remove element 1 ");
console.log(removeElement1([3, 2, 2, 3], 3));
console.log(removeElement1([3, 3], 2));
console.log(removeElement1([5, 2, 3, 5, 5], 5));
console.log("---remove element 1");
