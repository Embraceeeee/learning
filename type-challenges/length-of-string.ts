/**
 *  计算字符串的长度，类似于 String#length 。 
 */


// type LengthOfString<T extends string > = T['length'];


// type test = LengthOfString<'AAA'>;


// 闪过一个念头：把字符串转成数组，然后用数组的length可以拿到长度
// 看了一眼答案发现真的如此

// TODO: 待调整

type ToArray<T extends string> =  T extends `${infer F}${infer R}` ? [F,...LengthOfString<R>] : [];

type LengthOfString<T> = T extends string ? ToArray<T>['length']:0;

type length = LengthOfString<'ab'>;
