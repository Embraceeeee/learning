// 用队列实现栈 （Array里的shift和shift）
// 使用两个队列实现栈
class MyStack {
  constructor() {
  }

  // 输入的队列
  queueIn: number[] = [];
  // 辅助队列，用来备份 
  queueTemp: number[] = [];


  /**
   * 入栈
   * @param x 
   */
  push(x: number): void {

    this.queueIn.push(x);
  }

  /**
   * 出栈
   * @returns 
   */
  pop(): number {

    this.transferElement(this.queueIn, this.queueTemp, 1);
    const x = this.queueIn.shift();
    this.transferElement(this.queueTemp, this.queueIn, 0);

    return x as number;
  }

  /**
   * 查看栈顶部元素
   * @returns 
   */
  top(): number {
    const x = this.pop();
    this.queueIn.push(x);
    return x;

  }

  /**
   * 判断栈是否为空
   * @returns 
   */
  empty(): boolean {

    return this.queueIn.length === 0;

  }

  /**
   * 队列元素转移
   * @param queueFull 有元素的队列
   * @param queueEmpty 空队列
   * @param remainLength 转移后在queueFull的剩余数量
   */
  transferElement(
    queueFull: number[],
    queueEmpty: number[],
    remainLength: number
  ): void {
    while (queueFull.length > remainLength) {
      queueEmpty.push(queueFull.shift() as number);
    }

  }

}


/**
 *  使用一个队列实现栈
 */
class MyStack1 {
  constructor() {
  }

  queueIn: number[] = [];

  /**
   * 入栈
   * @param x 
   */
  push(x: number): void {

    this.queueIn.push(x);
  }
  
  /**
   * 出栈
   * @returns 
   */
  pop(): number {

    let length = this.queueIn.length;
    while (length-- > 1) {
      this.queueIn.push(this.queueIn.shift() as number);
    }
    return this.queueIn.shift() as number;

  }
  /**
   * 查看栈顶部元素
   * @returns 
   */
  top(): number {
    const x = this.pop();
    this.queueIn.push(x);
    return x;
  }
  /**
   * 判断栈是否为空
   * @returns 
   */
  empty(): boolean {
    // 0 为 false
    return !this.queueIn.length;
  }



}