/**
 * 不使用 ReturnType 实现 TypeScript 的 ReturnType<T> 泛型。
 * 
 * const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
    }
    type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
 * 
 */

// 源码：type ReturnType<T extends (...args: any) => any> = 
// T extends (...args: any) => infer R ? R : any;
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a1 = MyReturnType<typeof fn>;


