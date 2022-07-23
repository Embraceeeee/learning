/**
 * 实现 Capitalize<T> 它将字符串的第一个字母转换为大写，其余字母保持原样。
 * 例如
 * type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
 */

// type Capitalize<T extends String> = T extends `${infer FirstLetter}${infer R}`
//   ? `${C["toLowerCase"]}${R}`
//   : never;

// 类型里面调用函数好像不太行，如上会报错

// 字典
type CapitalizedChars = {
  a: "A";
  b: "B";
  c: "C";
  d: "D";
  e: "E";
  f: "F";
  g: "G";
  h: "H";
  i: "I";
  j: "J";
  k: "K";
  l: "L";
  m: "M";
  n: "N";
  o: "O";
  p: "P";
  q: "Q";
  r: "R";
  s: "S";
  t: "T";
  u: "U";
  v: "V";
  w: "W";
  x: "X";
  y: "Y";
  z: "Z";
};

// 先取出首字母，然后堆首字母做判断——是否在字典里面，如果在，就为字典[key]=大写值，如果不在，那么不变
type Capitalize1<T> = T extends `${infer FirstLetter}${infer RestLetter}`
  ? `${FirstLetter extends keyof CapitalizedChars
      ? CapitalizedChars[FirstLetter]
      : FirstLetter}
      ${RestLetter}`
  : T;


  
type capitalized = Capitalize1<"hello world">;



