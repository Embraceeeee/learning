/**
 * 实现一个泛型 AppendArgument<Fn, A>，对于给定的函数类型 Fn，以及一个任意类型 A，返回一个新的函数 G。G 拥有 Fn 的所有参数并在末尾追加类型为 A 的参数。
 * 
 * type Fn = (a: number, b: string) => number
 * type Result = AppendArgument<Fn, boolean> 
 * // 期望是 (a: number, b: string, x: boolean) => number   
 * 
 * 
 */





// 卡在不知道如何获取函数参数部分，其实可以用 rest parameters
//  define functions that take an unbounded number of arguments using rest parameters.

type AppendArgument<F, A> = F extends (...args: [...infer P]) => infer R ? (...args: [...P,A]) => R : never;

type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;

