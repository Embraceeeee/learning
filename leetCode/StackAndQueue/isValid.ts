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

        // 当出现不是 左字符 的时候，并且 栈内有元素 才比较 
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
    return stack.length == 0;

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

console.log(isValid("(((("));




/**
 * 用新的方式来做，这种直接推入右括号的，遇到右括号字符就判断是否相等即可  
 * @param s 
 * @returns 
 */
function isValid_improved(s: string): boolean {

    const stack: string[] = [];
    for (const char of s) {
        if (char == '(') {
            stack.push(')');
        } else if (char == '{') {
            stack.push('}');
        } else if (char == '[') {
            stack.push(']');
            // 第三种情况：右边出现多余字符（还在遍历，但是栈已经空了）
            // 第二种情况：遍历字符串匹配的过程中，发现栈里没有我们要匹配的字符。所以return false （两个字符不等）
        } else if (stack.length == 0 || stack[stack.length - 1] != char) {
            return false;
        } else {
            //  遇到右括号，并且能够找得到前面对应的左括号的情况，栈弹出元素
            stack.pop();
        }

    }

    // 第一种情况，左边出现多余字符（无字符遍历了，但是栈不为空）  
    return stack.length == 0;
}