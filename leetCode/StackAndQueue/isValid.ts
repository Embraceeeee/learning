/**
 *  第20题：  判断一下字符串是否有效： 一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s  
 *   
 * 	  左括号必须用相同类型的右括号闭合。
 *    左括号必须以正确的顺序闭合。
 * @param s  
 */
function isValid(s: string): boolean {

    // 如果是奇数 ，那么直接排除 
    if (s.length % 2 != 0) {
        return false;
    }

    const stack: string[] = [];
    // 循环遍历每个字符
    for (const char of s) {
        
        // 当出现不是 左字符 的时候，并且 栈内有元素 
        if (stack.length != 0 && !isLeftChar(char)) {
            //  取出上一个元素准备去做比较  
            const preChar = stack.pop() as string;
            // 比较两个元素是否为一对 ，如果不是，我们可以直接返回false
            if (!isCouple(preChar, char)) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length==0;
  
};


function isCouple(leftChar: string, rightChar: string): boolean {

    switch (leftChar) {
        case '(': { return rightChar == ")"; }
        case '{': { return rightChar == "}"; }
        case '[': { return rightChar == "]"; }
        default: { 
            // 有可能用户输入其他字符或者输入左右都是 右类型字符
             return false; 
            }
    }
}

function isLeftChar(char: string) {

    if (char == '(' || char == '{' || char == '[') {
        return true;
    }
    return false;

}

console.log(isValid("(((("))