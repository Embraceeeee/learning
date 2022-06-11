/**
 * 1. pick 实现
 * 
 * 
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
 *
 *
 */

// try: 感觉得写成type才行  看了一下好像有，ReturnType 用法 （https://www.typescriptlang.org/docs/handbook/2/typeof-types.html）
// type MyPickProcess = (a: any)=>boolean;
// type MyPick = ReturnType<typeof MyPickProcess>;

// 还以为要自己写函数，发现不用，感觉得知道keyof，in的用法，索引访问类型 Type['xxxAttr'] = xxxAttr Type;
// in 用来遍历枚举类型
// keyof 会将对象属性返回 联合类型（"xxx1"|"xxx2"|"xxx3"...）

// 题解
type MyPick<T extends Object, PA extends keyof T> = {
  [A in PA]: T[A];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

console.log(typeof todo);
