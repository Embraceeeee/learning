/**
 *
 *
 * 实现一个通用Pop<T>，它接受一个数组T并返回一个没有最后一个元素的数组。
 *
 * type arr1 = ['a', 'b', 'c', 'd']
 * type arr2 = [3, 2, 1]
 * type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
 * type re2 = Pop<arr2> // expected to be [3, 2]
 *
 * 额外：同样，您也可以实现Shift，Push和Unshift吗？
 *
 */

// 一开始写成这个样子，感觉可以优化的，比如 L类型本来就是数组了
// type Pop<T extends any[]> = T extends [...infer L, infer R] ? [...L] : never;

type Pop<T extends any[]> = T extends [...infer L, infer R] ? L : never;

type arr1 = ["a", "b", "c", "d"];

type Unshift<T extends any[]> = T extends [infer L, ...infer R] ? R : never;

type Push<T extends any[], V> = [...T, V];
type Shift<T extends any[], V> = [V, ...T];

type re1 = Pop<arr1>;
type re2 = Unshift<arr1>;

type re3 = Push<arr1, 2>;
