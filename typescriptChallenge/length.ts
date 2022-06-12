/**
 * 
 * 获取元组长度
 *  
 * type tesla = ['tesla', 'model 3', 'model X', 'model Y']
 * type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
 * type teslaLength = Length<tesla> // expected 4
 * type spaceXLength = Length<spaceX> // expected 5
 * 
 *  
*/

// 题解
// 得限制 T 为 readonly 的 数组 才有 length 类型
type Length<T extends readonly any[]> = T['length']; 
type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type u = [];
type teslaLength = Length<u>;

