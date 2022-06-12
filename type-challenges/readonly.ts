/**
 * 
interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
 * 
 */



// 题解
type MyReadonly<T> = {
    +readonly [P in keyof T]: T[P];
  };
  
  interface Todo1 {
    title: string;
    description: string;
  }
  
  const todo1: MyReadonly<Todo1> = {
    title: "Hey",
    description: "foobar",
  };
  
  
  
  