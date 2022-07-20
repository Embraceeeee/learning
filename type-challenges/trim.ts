/**
 *
 * 实现Trim<T>，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。
 * 例如
 * type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
 *
 *
 */

type Trim<T> = T extends ` ${infer R} ` | ` ${infer R}` | `${infer R} `
  ? Trim<R>
  : T;

type trimed1 = Trim<"  Hello World  ">;

// 看答案后的版本

type WhiteSpace = " " | "\n" | "\t";

// 先检查左边空格，再检查右边空格  
type TrimAn<T> = T extends `${WhiteSpace}${infer R}`
  ? TrimAn<R>
  : T extends `${infer L}${WhiteSpace}`
  ? TrimAn<L>
  : T;


  
type trimed2 = TrimAn<"  Hello World  ">;

