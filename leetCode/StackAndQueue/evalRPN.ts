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




// 加餐：   中缀表达式转后缀表达式  
function transfer(tokens: string[]) {

    // 如 ((a+b)*c)+d*e == > ab+c*de*+  

    const operatorsStack: string[] = [];
    const result: string[] = [];
    for (const token of tokens) {
        console.log("operatorsStack:",operatorsStack)
        console.log("result:",result)
        if (token != "+"
            && token != "-"
            && token != "*"
            && token != "/"
            && token != "("
            && token != ")"

        ) {
            // 数字或者( 就推入 
            result.push(token);
        } else if (token == "(") { 
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
            // 运算符的那么做一个比较优先级
            if (operatorsStack.length == 0) {
                operatorsStack.push(token);
            } else {

                let topValue = operatorsStack[operatorsStack.length - 1];
                if (
                     (topValue == "+" || topValue == "-" )
                     && 
                     (token == "*" || token == "/") ) {
                    // 这两个优先级都挺高的 
                    operatorsStack.push(token);
                } else if (topValue == "(") {  
                    // 假设这个为 ( 那么我们直接推入运算符
                    operatorsStack.push(token);
                }else{
                    topValue = operatorsStack.pop() as string;
                    result.push(operatorsStack.pop() as string );
                    operatorsStack.push(token);

                }

            }


        }


    }

    return result;



}

console.log(transfer("2*(9+6/3-5)+4".split("")))