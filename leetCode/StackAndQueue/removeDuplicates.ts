/**
 *    1047. 删除字符串中的所有相邻重复项
 *  给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们 
 * @param s 
 */
function removeDuplicates(s: string): string {

    const stack: string[] = [];
    // 感觉相邻的可以用 栈  
    for (const char of s) {
        // console.log(stack)
        const preChar = stack[stack.length-1];
        // 在 栈为空或者前一个元素与当前遍历的元素不相等时候，才推入
        if (preChar == undefined || preChar != char) {
            stack.push(char);
        }else{
            // 记得将相等的前一个元素 从栈中删除
            stack.pop();            
        }
       
    }
    return stack.join('');
};

console.log(removeDuplicates("cddcabb"));