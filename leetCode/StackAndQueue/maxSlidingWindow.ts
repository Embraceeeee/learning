/**
 *  单调队列  （队列中元素为滑动窗口内的少部分元素，并严格按照大到小排序）
 */
class MonotoneQueue {

    queue: number[] = [];

    /**
     * 滑动窗口要移除的元素的函数  
     *  
     * @param value 
     */
    pop(value: number) {
        // 在队列不为空的情况下 以及待移除的元素是否为队列头部元素，若是那就移除，不是就不操作
        if (this.queue.length != 0 && value == this.front()) {
            this.queue.shift();
        }

    }

    /**
     * 滑动窗口要移入的元素的函数   
     * @param value  
     */
    push(value: number) {

        // 移除队列末尾元素，当遇到比value大的就不移除了，小的就移除掉，保证队列的单调从大到小  
        while (this.queue.length != 0 && value > this.queue[this.queue.length - 1]) {
            this.queue.pop();
        }
        this.queue.push(value);

    }

    /**
     * 获取队列的第一个元素  
     * @returns 
     */
    front() {
        return this.queue[0];
    }

}

/**
 *  # 239 题目  
 *  给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
 *  你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 *  返回滑动窗口中的最大值。
 * @param nums 
 * @param k 
 * @returns 
 */
function maxSlidingWindow(nums: number[], k: number): number[] {

    const queue: MonotoneQueue = new MonotoneQueue();  
    const result:number[] = [];
    for (let i = 0; i < k; i++) {  
        queue.push(nums[i]);
    }
    result.push(queue.front());
    for (let i = k; i < nums.length; i++) { 
        // 滑动窗口加入后面元素 
        queue.push(nums[i]);
        // 滑动窗口移除前面元素
        queue.pop(nums[i-k]);
        // 记录对应最大值
        result.push(queue.front());
    }
    return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));



/**
 *  第一次写的超时版本  ￣へ￣
 * @param nums 
 * @param k 
 * @returns 
 */
function maxSlidingWindow_timeout(nums: number[], k: number): number[] {

    //   尝试用一下 队列  (这样超出了时间限制  )
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






