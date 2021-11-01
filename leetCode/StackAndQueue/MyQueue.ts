// 用栈(push、pop方法)实现队列

class MyQueue {
  
  constructor() {

  }

  // 存储
  private stackIn:number[] = [];
  // 取值
  private stackOut:number[] = [];
  

  /**
   *  入队
   * @param x 
   */
  push(x: number): void {

    this.stackIn.push(x);

  }

  /**
   * 出队（返回第一个元素）
   * @returns 
   */
  pop(): number { 
  
    // 只有当 stackOut 为空的时候，再从 stackIn 里导入数据（导入  stackIn  全部数据）
    if(this.stackOut.length===0){
      this.transferAllElement(this.stackIn,this.stackOut);
    }
    // 既然out栈里面还有值，那么咱们直接pop就是顶部元素了
    return this.stackOut.pop() as number;
  }

  /**
   *  查看队的第一个元素
   * @returns 
   */
  peek(): number {
  
    // 这里不直接用this.stackOut.pop()而直接用现有函数了
    const x = this.pop();
    // 推会头元素进到out栈
    this.stackOut.push(x);
    return x;

  }

  empty(): boolean {
    // return this.stackIn.length===0?true:false;
    return this.stackIn.length===0 && this.stackOut.length===0;
  }


  /**
   * 栈内元素的转移，并且执行后empty会是full的倒序
   *  用栈模拟队列的核心
   * @param full 
   * @param empty 
   * 
   */
  transferAllElement(stackIn:number[],stackOut:number[]):void{
    while(stackIn.length>0){
      stackOut.push(stackIn.pop() as number);
    }

  }
}