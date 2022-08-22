/**
 *  计算字符串的长度，类似于 String#length 。
 */

// type LengthOfString<T extends string > = T['length'];

// type test = LengthOfString<'AAA'>;

// 闪过一个念头：把字符串转成数组，然后用数组的length可以拿到长度
// 看了一眼答案发现真的如此

type ToArray<T extends string> = T extends `${infer F}${infer R}`
  ? [F, ...ToArray<R>]
  : [];

type LengthOfString<T> = T extends string ? ToArray<T>["length"] : 0;

type length = LengthOfString<"AAA">;

// 解答是这样写的：
type LengthOfString1<
  T extends string,
  A extends string[] = []
> = T extends `${infer F}${infer R}`
  ? LengthOfString1<R, [F, ...A]>
  : A["length"];


type length1 = LengthOfString1<"AAACA">;

// 递归到最深处拿值，最后返回一个数值，结束就是T不再是一个有F和R组成的字符串即为空串，然后返回A的长度


