/**
 *  59. 螺旋矩阵 II
 *  @see
 *  给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix。
 */

function generateMatrix(n: number): number[][] {
  const array = new Array<number>(n)
    .fill(-1)
    .map((item) => new Array<number>(n).fill(-1));

  // 突然想到用一个可累加的数据递增就好了，我还去想它要怎么计算
  let count = 1;
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    //  上
    for (let j = i; j < n - 1 - i; j++) {
      array[i][j] = count++;
    }
    // 右
    for (let j = i; j < n - 1 - i; j++) {
      array[j][n - 1 - i] = count++;
    }
    // 下
    for (let j = n - i - 1; j > i; j--) {
      array[n - 1 - i][j] = count++;
    }

    // 左
    for (let j = n - i - 1; j > i; j--) {
      array[j][i] = count++;
    }
  }
  if (n % 2 != 0) {
    // 除2 取整数的做法: >> 1 
    array[n >>1][n >> 1] = count;
  }
  return array;
}
console.log(generateMatrix(5));
