/**       
 *  第一个元素
 *  type arr1 = ['a', 'b', 'c']
 *  type arr2 = [3, 2, 1]
 *  type head1 = First<arr1> // expected to be 'a'
 *  type head2 = First<arr2> // expected to be 3 
 *
 *  
 */

// 题解

type First1<T extends readonly any[]> = T[0];

type arr2 = ['3', 2, 1]
type head2 =  First1<arr2> // expected to be 3


// 但是上面这种情况没考虑临界值 ，比如传入一个空数组, 之后类型会是 undefined  
type testEmptyArray = First1<[]>;

// 并且传入空数组我们是不能检测出错误的，返回类型也不是我们想要的
// 想想能否增加一个检查是否为空的判断
type First<T extends any[]>  = T extends [] ? never : T[0];

// infer @see : https://juejin.cn/post/6844904170353328135   
// 看到别人有用infer 定义待推断的类型的变量
type First_Infer<T extends any[]> = T extends [infer First, ... infer Rest ] ? First :never;
type testInfer =  First_Infer <[1]>;



