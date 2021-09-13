# 一个麻烦的匹配筛值的问题



问题来源：遇到一个需求，API需返回固定的八种异常值，如【"異常總數", "偏移", "缺件", "錯件", "反白", "極反", "側立", "翹腳或空焊", "其他"】和异常数目（需要按照特定顺序），但SQL中查询出来的值并没有刚好全部八种异常的值（DB中无该异常补0），那么如何实现呢？



```typescript
/*

可将问题简化如下，想要一个函数实现如下功能：

input:[
    { error: "A", amount: 550, headNo: 1 },
    { error: "B", amount: 150, headNo: 1 },
    { error: "C", amount: 267, headNo: 1 },
    { error: "D", amount: 233, headNo: 1 },
    { error: "K", amount: 212, headNo: 1 }
])
output: [
  { error: 'TotalError', amount: 1412 },
  { error: 'A', amount: 550 },
  { error: 'B', amount: 150 },
  { error: 'C', amount: 267 },
  { error: 'D', amount: 233 },
  { error: 'E', amount: 0 },
  { error: 'F', amount: 0 },
  { error: 'G', amount: 0 },
  { error: 'OtherError', amount: 212 }
]
(output为完整的异常值，input中没有的异常默认补0)

*/

export const CORE_ERROR_NAMES = ["A", "B", "C", "D", "E", "F", "G"];
export const ALL_ERROR_NAMES = ["TotalError", "A", "B", "C", "D", "E", "F", "G", "OtherError"];


/**
 * 主函数
 * @param inputArray 
 * @returns 返回API待实现的异常结果数组
 */
export function convertAllErrorArray(inputArray: InputItem[]): ErrorItem[] {

  const coreErrorNames = cloneArray<string>(CORE_ERROR_NAMES);
  const allErrorNames = cloneArray<string>(ALL_ERROR_NAMES);

  const outPutArray: ErrorItem[] = [];
  // 七种核心异常的推入
  outPutArray.push(...convertCoreErrorArray(
    inputArray,
    coreErrorNames
  ));
  // 其他异常的推入 
  outPutArray.push({
    error: allErrorNames[allErrorNames.length - 1],
    amount: getOtherErrorAmount(inputArray, coreErrorNames)
  });
  // 异常总数的推入
  outPutArray.unshift({
    error: allErrorNames[0],
    amount: sumAmountByErrorArray(outPutArray)
  });
  return outPutArray;
}


function convertCoreErrorArray(
  inputArray: InputItem[],
  coreErrorNames: string[]
): ErrorItem[] {
  // 七种核心异常的推入
  return coreErrorNames.map((error): ErrorItem => {
    return {
      error,
      amount: getCoreErrorAmount(inputArray, error)
    };
  });
}

function sumAmountByErrorArray(
  errorArray: ErrorItem[]
): number {
  return errorArray.reduce(
    (
      preError: ErrorItem,
      curError: ErrorItem
    ) => {
      return {
        error: '',
        amount: preError.amount + curError.amount
      };
    }).amount
}


function cloneArray<ItemType>(input: ItemType[]): ItemType[] {
  return JSON.parse(
    JSON.stringify(
      input
    )
  );
}

function getCoreErrorAmount(
  inputArray: InputItem[],
  coreError: string
) {
  let amount = 0;
  inputArray.forEach((input) => {
    if (input.error === coreError) {
      amount = input.amount;
    }
  })
  return amount;
}

function getOtherErrorAmount(
  inputArray: InputItem[],
  coreErrorNames: string[]
) {
  let amount = 0;
  inputArray.forEach((input) => {
    if (!coreErrorNames.includes(input.error)) {
      amount += input.amount;
    }
  })
  return amount;
}

interface InputItem {
  error: string,
  amount: number,
  [otherParms: string]: string | number
}
interface ErrorItem {
  error: string,
  amount: number
}


// 输出结果
console.log("result:", convertAllErrorArray([
  { error: "A", amount: 550, headNo: 1 },
  { error: "B", amount: 150, headNo: 1 },
  { error: "C", amount: 267, headNo: 1 },
  { error: "D", amount: 233, headNo: 1 },
  { error: "K", amount: 212, headNo: 1 }
]));
```



