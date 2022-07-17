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

type MyDog = LookUp<Cat | Dog, "dog" >; 


// test1和test2 不生效但是 test3这样写就生效了，会不会只有泛型才能用extends       
// 所以上面第一次的写法之所以不行，是因为 ('cat'|'dog') extends 'cat' 这样的联合值extend的话是不会分布式的，会直接返回false
// 除非说像test3写入泛型里面，然后整个 T 去 extends； 我们传入T为 联合类型值  才有分布式  

type test1 = ('cat'|'dog') extends 'cat'?'cat':never;
type inputType = 'cat'|'dog';
type test2 = inputType extends 'cat'?'cat':never;

type P<T> = T extends 'cat' ?  'cat' : never;
type test3 = P<'cat'|'dog'> 


