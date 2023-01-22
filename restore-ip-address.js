// topic string and backtraking
/** 
  @params {string} s
  @return {string[]}
**/

function restoreIp(s) {
  if (s.length > 12 || s.length < 4) return []; //check is valid max integer will be 12 and min 4
  const result = [];

  function backtrack(s, ip, c) {
    if (s.length === 0 && c === 0) result.push(ip);
    if (c === 0) return;

    for (let i = 0; i < 4; i++) {
      if (i >= s.length) break;
      let supIp = s.slice(0, i + 1);
      if (parseInt(supIp) > 255 || (supIp.length > 1 && supIp[0] === "0"))
        return;
      backtrack(s.slice(i + 1), ip + (c === 4 ? "" : ".") + supIp, c - 1);
    }
  }

  backtrack(s, "", 4);

  return result;
}

console.log(restoreIp("25525511135"));
console.log(restoreIp("0000"));
console.log(restoreIp("101023"));
