/**
 * 实现一个通用Last<T>，它接受一个数组T并返回其最后一个元素的类型。
 *
 *
 * type arr1 = ['a', 'b', 'c']
 * type arr2 = [3, 2, 1]
 *
 * type tail1 = Last<arr1> // expected to be 'c'
 * type tail2 = Last<arr2> // expected to be 1
 *
 *
 *
 *
 */

// 这样只能拿到undefined  发现Array interface里面的属性 可用T['属性名称'] 拿到其值
// type Last<T extends any[] > = T[ T['length']  ];

type Last<T extends any[]> = T extends [...infer F, infer R] ? R : never;
type tail1 = Last< [1,2,3] >;