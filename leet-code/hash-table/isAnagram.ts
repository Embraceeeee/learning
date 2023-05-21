/**
 *   242 . 有效的字母异位词语
 *  https://programmercarl.com/0242.%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D.html#_242-%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D
 *
 * @param s
 * @param t
 */
function isAnagram(s: string, t: string): boolean {
  const sMap = getCountCharMapByString(s),
    tMap = getCountCharMapByString(t);

  return compareTwoCountCharMap(sMap, tMap);
}

interface CountCharMap {
  [char: string]: number;
}
function getCountCharMapByString(s: string): CountCharMap {
  const map: CountCharMap = {};
  for (const char of s) {
    if (map[char] != void 0) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }
  return map;
}

function compareTwoCountCharMap(sMap: CountCharMap, tMap: CountCharMap) {
  const sChars: string[] = Object.keys(sMap);
  const tChars: string[] = Object.keys(tMap);

  const chars = sChars.length > tChars.length ? sChars : tChars;

  for (const char of chars) {
    if (tMap[char] == void 0 || tMap[char] != sMap[char]) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("abcderqwq", "abcderqwq"));

function isAnagramBest(s: string, t: string): boolean {
  // 假设两个长度不相等，那肯定不会存在字符数量一致的情况
  if (s.length != t.length) {
    return false;
  }
  // 用数组来替代 hash map
  const map = new Array(26).fill(0);
  // a 字母的 ASCII 码为参照值
  const aCharCode = "a".charCodeAt(0);
  // 一边加加，一边减减，最后如果两边的所有字符数量一样的话，都为 0 的
  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i) - aCharCode]++;
    map[t.charCodeAt(i) - aCharCode]--;
  }

  return map.every((i) => i === 0);
}
console.log( isAnagramBest("abcderqwq", "abcderqwq"));
