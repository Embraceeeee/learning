/**
 * 
 * 
 * 有时，您可能希望根据某个属性在联合类型中查找类型。
 * 在此挑战中，我们想通过在联合类型Cat | Dog中搜索公共type字段来获取相应的类型。换句话说，
 * 在以下示例中，我们期望LookUp<Dog | Cat, 'dog'>获得Dog，LookUp<Dog | Cat, 'cat'>获得Cat。
 * 
 * interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog` 
 * 
 * 
 * 
 */

// 一开始的做法，但结果不对，不知道为啥为 never
// interface BaseAnimal {
//   type: string;
// }

// type LookUp<
//   T extends BaseAnimal ,
//   K extends T["type"]
// > = T["type"] extends K ? T:never;

type LookUp<T extends { type: string }, V extends T["type"]> = T extends {
  type: V;
}
  ? T
  : never;

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type MyDog = LookUp<Cat | Dog, "cat" >; 

// test 条件逻辑不生效但下面的P和A3  生效了                                
type test = ('cat'|'dog') extends 'cat'?'cat':never;

type P<T> = T extends 'cat' ?  'cat' : never;
type A3 = P<'cat' | 'y'>  // A3的类型是 string | number        