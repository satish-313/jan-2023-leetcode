/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

function findJudget(n, trust) {
  let ans = -1;
  let judges = new Map();

  for (let [a, b] of trust) {
    if (judges.has(b)) judges.set(b, judges.get(b).add(a));
    else judges.set(b, new Set([a]));
  }

  for (let [key, value] of judges) {
    if (value.size === n - 1) ans = key;
  }

  if (ans === -1) return -1;

  for (let values of judges.values()) {
    if (values.has(ans)) return -1;
  }

  return ans;
}

function findJudge(n, trust) {
  let trustCount = Array(n).fill(0);
  let trustedCount = Array(n).fill(0);

  for (let [a, b] of trust) {
    trustCount[a - 1]++;
    trustedCount[b - 1]++;
  }

  for (let i = 0; i < trustedCount.length; i++) {
    if (trustedCount[i] === n - 1 && trustCount[i] === 0) return i + 1;
  }

  return -1;
}

console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
);
console.log(findJudge(2, [[1, 2]]));
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);
