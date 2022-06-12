/**
 * 
 * Exclude
 * 
 *  从联合类型T中排除U的类型成员，来构造一个新的类型。  
 * 
 *  type T0 = Exclude<"a" | "b" | "c", "a">;
 *  (type T0 = "b" | "c")
 *  type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
 *  (type T1 = "c")
 * 
 */



// try: 理解错了题目意思，以为要 排除属性的
// type MyExclude<T,K extends keyof T>  = {
//     [P in keyof T]:P extends K ? never: T[P]
// };


// 题解  
// TypeScript 中的条件类型是可分配的   
// 当你在写T extends U且T是联合类型时，实际上发生的是 TypeScript 遍历联合类型T并将条件应用到每个元素上。
type MyExclude1 <T,K>  = T extends K ? never : T;


type Test = "aaa"|"bbb"|"ccc";

type TestExclude = MyExclude1<Test,"aaa"|"bbb">;




  