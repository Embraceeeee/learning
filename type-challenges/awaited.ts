/**
 * 
 * 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，
 * 我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
 * 比如：Promise<ExampleType>，请你返回 ExampleType 类型。
 * 
 * 
 * 看了题解说要求我们来展开类型，从另一个类型里面提取类型，比如Promise<string> 返回string，Promise<Promise<string>> 返回string  
 * 
 * 注明： Typescript已实现Awaited() @see: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#the-awaited-type-and-promise-improvements  
 * 
 */


// try: 报错了
// type MyAwaited2<T> = MyAwaited2<T extends Promise<infer R> ? R :T>;


// 题解
// 下面的只能实现一层的，如果多层嵌套promise的，看了题解可能需要循环调用
type MyAwaited1<T> = T extends Promise<infer R> ? R :T;

type test1 = MyAwaited1<"aaa">;


// 写成下面才行，上面的不太ok，会疯狂循环，下面的话当T不为Promise的话，不会再进入到循环了
type MyAwaited2<T> = T extends Promise<infer R> ? MyAwaited2<R> : T;

type test2 = MyAwaited2< boolean | Promise<number> >;




