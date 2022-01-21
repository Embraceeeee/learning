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

        console.log(stack);

        if (Object.is(Number(token),NaN)) {
        
            stack.push(+token);

        } else {
            if(stack.length<2){
                throw new Error('input is invalid');
            }

            const afterNumber = stack.pop() as number;
            const preNumber = stack.pop() as number;
            switch (token) {
                case '+': { stack.push(preNumber + afterNumber); break; };
                case '-': { stack.push(preNumber - afterNumber); break; };
                case '*': { stack.push(preNumber * afterNumber); break; };
                case '/': { stack.push(Math.floor(preNumber / afterNumber)); break; };
                default: { break; };
            }
        }
    });

    return stack.pop() as number;


};

console.log(evalRPN(["2", "1", "+", "3", "*"]))