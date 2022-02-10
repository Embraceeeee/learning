/**
 * 
 *  遇到一个问题：需要合并两个数组，数组元素类型：{a:string,b?:string,c?:string}  
 *  限制： 数组A和数组B的 a和b的组合以及a和c的数字组合唯一 且a、b、c的值在各自的数组里是唯一的
 *  输入 
 *      数组A:[
 *          {a:1,b:1},
 *          {a:2,b:3},
 *          {a:3,b:5}
 *      ]，  
 *      数组B:[
 *          {a:1,c:1},
 *          {a:2,c:2},
 *          {a:6,c:3}
 *      ]
 * 
 *  输出
 *      [
 *          {a:1,b:1,c:1},
 *          {a:2,b:3,c:2}
 *          {a:3,b:5},
 *          {a:6,c:3}
 *      ]
 *  
 */

type ArrayType = {
    a: number,
    b?: number,
    c?: number
}[];


function merge(
    arrayA: ArrayType,
    arrayB: ArrayType
): ArrayType {









    return [];

}




