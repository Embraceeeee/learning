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

console.log(evalRPN(["4", "13", "5", "/", "+"]))