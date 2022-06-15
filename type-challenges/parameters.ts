/**
 * 
 * 实现内置的 Parameters 类型  
 * 
 * 实现的效果： @see https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype 
 * 
 *   
 * 
 */

type test2 = (...args:any)=>number;

const test2Function:test2 = (b:string)=>{return +b};

console.log(typeof test2Function)


// 看了Return type的定义才有了思路  
// 迷迷糊糊写对了
// TODO: 展开符号+变量，类型为什么会系数组？ 
type MyParameters<T extends (...args: any) => any> = 
    T extends (...args: infer R) => any ? R : never;

    

// type a1 = MyParameters<typeof test2Function>;


// type a2<T extends number[]> = [...T];

// type t2 = a2<[1,2,3]>;

