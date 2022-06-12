/**
 *   逆波兰表达式    Reverse Polish Notation 
 *   后缀表达式（ 运算符号写在后面 ）
 *   符号在前一点的表示优先
 *   ( 1 + 2 ) * ( 3 + 4 ) ==>  ( ( 1 2 + ) ( 3 4 + ) * )  ==> 1 2 + 3 4 + *   
 *  
 * @param tokens 
 * @returns 
 */
function evalRPN(tokens: string[]): number {

    const stack: number[] = [];
    tokens.forEach((token) => {
        //  如果是运算符，计算并推入值   
        if (token == '+' || token == '-' || token == '*' || token == '/') {
            computeAndpushNumber(stack, token);
        } else {
            // 否则直接推入
            stack.push(+token);
        }
    });

    return stack.pop() as number;

};


/**
 *  取出栈顶两个元素计算后并推入栈中
 * @param stack 
 * @param operator 
 * @returns 
 */
function computeAndpushNumber(
    stack: number[],
    operator: string
): void {

    if (stack.length < 2) {
        throw new Error('input is invalid');

    }
    const afterNumber = stack.pop() as number;
    const preNumber = stack.pop() as number;
    switch (operator) {

        case '+': { stack.push(preNumber + afterNumber); break; };
        case '-': { stack.push(preNumber - afterNumber); break; };
        case '*': { stack.push(preNumber * afterNumber); break; };
        case '/': { stack.push(parseInt((preNumber / afterNumber).toString())); break; };
        default: { return; };
    }
}

// console.log(evalRPN(["4", "13", "5", "/", "+"]));


/**
 * // 加餐： 中缀表达式转后缀表达式  
 * @param tokens 
 * @returns 
 */
function transferPostfixExpression(tokens: string[]) {

    // 如 ((a+b)*c)+d*e == > ab+c*de*+  
    const operatorsStack: string[] = [];
    const result: string[] = [];
    for (const token of tokens) {
        console.log("operatorsStack:", operatorsStack)
        console.log("result:", result)
        if (token != "+"
            && token != "-"
            && token != "*"
            && token != "/"
            && token != "("
            && token != ")"

        ) {
            // 数字就输出 result 
            result.push(token);
        } else if (token == "(") {
            // 左括号就 入栈  
            operatorsStack.push(token);
        }
        else if (token == ")") {

            let topValue = operatorsStack.pop() as string;
            // 循环拿出 ( 前面的 运算符
            while (topValue != "(") {
                result.push(topValue);
                topValue = operatorsStack.pop() as string;
            }

        } else {
            // token 只剩下 +、-、*、/  
            // 运算符比较优先级 ， 相应出栈、输出 result         
            let topValue = operatorsStack[operatorsStack.length - 1];
            //  将栈顶的元素，比自己优先级高或者相等的，就出栈并 输出至  result 
            while (operatorsStack.length > 0 && !isHighPriority(topValue, token)) {
                result.push(operatorsStack.pop() as string);
                topValue = operatorsStack[operatorsStack.length - 1];
            }
            // 运算符号要入栈，为了后面遇到下一个运算符时候能排到数字后面
            operatorsStack.push(token);
        }
    }
    // 栈内剩余运算符统一出栈并输出  
    while (operatorsStack.length != 0) {
        result.push(operatorsStack.pop() as string);
    }
    return result;

}



/**
 *  判断后一个运算符是否比前运算符的优先级更高  
 * @param frontOperator 
 * @param backOperator 
 * @returns 
 */
function isHighPriority(
    frontOperator: string,
    backOperator: string
): boolean {


    if (frontOperator == "(") {
        return true;
    }
    else if (frontOperator == "*" || frontOperator == "/") {
        if (backOperator == "*" || backOperator == "/") {
            return false;
        } else {
            return false;
        }
    } else if (frontOperator == "+" || frontOperator == "-") {
        if (backOperator == "*" || backOperator == "/") {
            return true;
        } else {
            return false;
        }
    } else {

        throw new Error('栈内元素不满足规则，出现除+-*/(以外的元素~');
    }



}

console.log(transferPostfixExpression("a+b*c+(d*e+f)*g".split("")))