/**
 * 
 * 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false。
 * 举例来说，
 * 
 * type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
 * 
 * 
 */



// T[number] ==> 返回数组值(字面量)的联合类型  
// 联合类型的extends 条件，那么会依次 extends 和 extends 和 extends 
// 如 1|2 extends 2 == > 1 extends 2 | 2 extends 2,但在这道题目里面，反过来了系 'xxx' extends 'xxx'|'aaa'|'bbb'
type Includes<T extends unknown[],  U> = U extends T[number] ? true : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>;









