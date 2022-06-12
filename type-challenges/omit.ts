/**
 * 
 * Omit 
 * 
 * interface Todo {
    title: string
    description: string
    completed: boolean
    }

    type TodoPreview = MyOmit<Todo, 'description' | 'title'>

    const todo: TodoPreview = {
      completed: false,
    }
 *
 * 
 */





// try: 会报错： P不能作为类型T的索引
// type MyExclude<T, K> = T extends K ? never : T;
// type MyOmit<T,K extends keyof T> = {
//    [P in keyof MyExclude<keyof T,K>]: T[P]
// };

// ts官方内部的系使用 Pick
type OfficialOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;


// 根据题解写的，很奇怪，能减是能减，但是属性类型变成联合类型了
// 想到了，因为P会遍历T的键值，然后P只是在[]里面被as了，它在T[P]的时候还是其他键值
// type MyOmit1<T,K> = {
//     [P in keyof T as MyExclude<keyof T,K>]: T[P]
// };
// 但是这样写就不会
/**
 * 
type RemoveKindField<T> = {
    [K in keyof T as Exclude<K, "kind">]: T[K]
};
interface Circle {
    kind: "circle";
    radius: number;
}
 
type KindlessCircle = RemoveKindField<Circle>;
 */


// 题解
type MyOmit2<T, K> = { [P in keyof T as P extends K ? never : P]: T[P] };

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview1 = MyOmit2<Todo, "description" | "title">;


