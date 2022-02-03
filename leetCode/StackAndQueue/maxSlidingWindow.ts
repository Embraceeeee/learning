/**
 *  给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 *  返回滑动窗口中的最大值。
 * @param nums 
 * @param k 
 * @returns 
 */
function maxSlidingWindow(nums: number[], k: number): number[] {

    //   尝试用一下 队列 
    const queue: number[] = new Array<number>(k);
    const result: number[] = [];
    // 直接返回里面的和  
    if (k >= nums.length) {

        return [Math.max(...nums)];
    }

    for (let i = 0; i < k; i++) { 
        queue[i] = nums[i];
    }
    console.log(queue)
    result.push(Math.max(...queue));         


    for (let i = k; i < nums.length; i++) {  

        queue.shift();
        queue.push(nums[i]);
        result.push(Math.max(...queue));        
    }

    return result;

};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));


