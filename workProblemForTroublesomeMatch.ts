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
 * 主函数 （版本2） 
 * @param inputArray 
 * @returns 
 */
export function convertAllErrorArray2(inputArray: InputItem[]): ErrorItem[] {

  const coreErrorNames = cloneArray<string>(CORE_ERROR_NAMES);
  const allErrorNames = cloneArray<string>(ALL_ERROR_NAMES);

  const outPutArray: ErrorItem[] = [];
  let totalErrorAmount=0;
  let otherErrorAmount=0;

  inputArray.forEach((input)=>{
    totalErrorAmount += input.amount;
    otherErrorAmount += input.amount;
  });

  // 七种核心异常的推入
  coreErrorNames.forEach((errorName)=>{ 
    const amount = getCoreErrorAmount(inputArray, errorName);
    outPutArray.push(
      {
        error:errorName,
        amount
      }
    ); 
    // 用做减法的形式避免了getOtherErrorAmount函数里的循环
    otherErrorAmount-=amount; 
  });
   // 总异常的推入
   outPutArray.unshift({
    error:allErrorNames[0],
    amount:totalErrorAmount
  });
  // 其他异常的推入
  outPutArray.push({
    error:allErrorNames[allErrorNames.length-1],
    amount:otherErrorAmount
  });

  return outPutArray;
}



/**
 * 主函数(版本1)
 * @param inputArray 
 * @returns 返回API待实现的异常结果数组
 */
export function convertAllErrorArray1(inputArray: InputItem[]): ErrorItem[] {

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
  return coreErrorNames.map((errorName): ErrorItem => {
    return {
      error:errorName,
      amount: getCoreErrorAmount(inputArray, errorName)
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
console.log("result:", convertAllErrorArray2([
  { error: "A", amount: 550, headNo: 1 },
  { error: "B", amount: 150, headNo: 1 },
  { error: "C", amount: 267, headNo: 1 },
  { error: "D", amount: 233, headNo: 1 },
  { error: "K", amount: 212, headNo: 1 }
]));

