/**
 * 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。  
 * 
 * const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
 * type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
 * 
 */  



// try:
// type TupleToObject<T> = {
//    [P in keyof T as `${string & T[P]}`]:T[P]
// };

// 没想到有index直接赋值number的用法  in T[number]  可以遍历数组  
type TupleToObject<T extends readonly any[]  >  = {
    [K in T[number]]:K;
 };
 
 
 const tuple = ['aaa','bbb'] as const;
 
 
 // tuple : keyof是,1  类型 'aaa' 
 
 console.log(tuple)
 
 type a = TupleToObject<typeof tuple>;
 
 