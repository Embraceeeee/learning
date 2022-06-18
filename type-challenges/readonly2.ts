/**
 * 实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。
 * K指定应设置为Readonly的T的属性集。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。
 * 
 * interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK
 */


// 想到两种类型 做 & 的方式 还可以设置 原始类型，如下 = keyof T，当没有
// 输入第二个类型时候则于readonly效果相同
type MyReadOnly2<T extends Object, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & {
  [P in keyof T as P extends K ? never : P]: T[P];
};











// 这样写的话，全部属性都会readonly 并且没在K里的属性会位never类型
// readonly [P in keyof T]: P extends K ? T[P] : never;

// Test
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}


// type todo2 = MyReadOnly2<Todo, "title" | "description">;

const todo2: MyReadOnly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo2.completed = true;
// todo2.description = ""; // error
