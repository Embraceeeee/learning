/**
 *
 * 在这个挑战中，你需要写一个接受数组的类型，并且返回扁平化的数组类型。
 * 例如:
 *      type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
 *
 */

// 题解
type Flatten<T> = T extends []
  ? []
  : T extends [infer First, ...infer Rest]
  ? [...Flatten1<First>, ...Flatten1<Rest>]
  : [T];

// 想自己写一下加约束的 , 所以遍历数组只能用 extends [infer F,...infer R]
// 看起来好像都是靠 ... 来展开的
// 感觉题解会写得好一点，因为有明确的返回就是一个数组，而下面这种方式，有时候返回元素本身（其实也为数组），有时候返回数组的（看起来这样）

// 外层 （第一行）：判断这个A元素是否为空数组 或者仅有一个元素的数组，如果是则返回该数组，若不是的话进入内层
// 内层 （第二行）：判断第一个元素是否为数组，如果是 ，那么执行返回数组 [...Flatten<F>，...Flatten<R>] 若不是的话则 [F, ...Flatten<R>]
// 关键就是有...将type返回的 一维数组给展开; 嵌套很多层的话，是透过递归来解析，比如[[[5]]]] ，疯狂外层判断弄到 最后的 [5]
type FlattenConstraint<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...Flatten<F>, ...Flatten<R>] // 好像也可以写成 FlattenConstraint<[...F,...R]>
    : [F, ...FlattenConstraint<R>]
  : T;


// 题解
type Flatten1<T> = T extends []
  ? []
  : T extends [infer First, ...infer Rest]
  ? [...Flatten1<First>, ...Flatten1<Rest>]
  : [T];

type Flatten1Result = Flatten1<[1, 2, [3, 4], [[[5]]]]>;

type FlattenConstraintResult = FlattenConstraint<[1, 2, [3, 4], [[[5]]]]>;

// 看起来好像系递归，想想怎么做

type test = Flatten<[2, 3]>;
