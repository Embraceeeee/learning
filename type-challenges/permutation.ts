/**
 *  实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。 
 *  type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']     
 * 
 * 
 */




// 卡在不知道如何将联合类型转tuple，哎好像之前做过tuple转union的，好家伙系一个 T[number] 实现的 
// 目前想到的是 Distributive Conditional Types， 不过不知道怎么组装成数组进去
// type Permutation<T> = T extends (infer R)[number] ? [...R] : never;
// type perm = Permutation<'A' | 'B'>;



// 感觉这太有点难，用到了Distributive和递归，敲敲看看吧 
type Permutation<T, U = T> = [T] extends [never] ? [] : T extends U ? [T, ...Permutation<Exclude<U, T>>] : never;
type perm = Permutation<'A' | 'B'|'C' >;

// T extends U ==> 'A' extends 'A'|'B' ==> ['A',...Permutation<'B'>] ==> ['A','B']  |  'B' extends 'A'|'B' ==> ['B',...Permutation<'A'>] ==> ['B','A']     


type test = Exclude<'A'|'B','B'>