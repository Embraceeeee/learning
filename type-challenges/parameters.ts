/**
 * 
 * 实现内置的 Parameters 类型  
 * 
 * 实现的效果： @see https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype 
 * 
 *   
 * 
 */



// ... args 这种 rest 变量需为数组类型，args为数组类型，正好利用rest变量、infer、条件类型来求得函数的参数类型（用[]包起来的）
type MyParameters<T extends (...args: any) => any> =
    T extends (...args: infer R) => any ? R : never;







