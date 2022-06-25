/**
 * Promise.all
 * 键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise<T>，其中T是解析的结果数组。
 * 
 * const promise1 = Promise.resolve(3);
 * const promise2 = 42;
 * const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = Promise.all([promise1, promise2, promise3] as const)  
 * 
 * 
 */

// type PromiseAll<T extends any[]> = T[number] extends Promise<infer R>
//   ? R
//   : T[number];

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});
// type pt = PromiseAll<[typeof promise1, typeof promise2, typeof promise3]>;

// 类型可能没问题，但是要携程函数的
declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>;

const t1 = PromiseAll([promise1, promise2, promise3] as const);





// 返回数组带值的类型

// type ArrBk<T extends number[]> = { [K in keyof T]: T[K] };

// type t3 = ArrBk<[1,2,3]>;

// keyof 一个数组 返回索引的联合类型

// type  Arr<T extends number[]> = keyof T;

// type t2 = Arr<[1,2,5]>

// const n:t2 = 0|1|5; // 0|1|5 也能过很奇怪

// T[number] 返回值的联合类型

// type T5<T extends any[]> = T[number];

// type aaa = T5<[1,2,5]>

// const o:aaa = 1;
