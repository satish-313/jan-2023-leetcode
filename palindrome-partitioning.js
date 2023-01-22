/**
 * @param {string} s
 * @return {string[][]}
 */

function partition(s) {
  const r = [];
  const p = [];

  function isPalidrome(s, l, r) {
    while (l <= r) {
      if (s[l] !== s[r]) return false;
      l += 1;
      r -= 1;
    }

    return true;
  }

  function backTrack(idx) {
    if (s.length === idx) {
      r.push(p.slice());
      return;
    }

    for (let i = idx; i < s.length; i++) {
      if (isPalidrome(s, idx, i)) {
        p.push(s.slice(idx, i + 1));
        backTrack(i + 1);
        p.pop();
      }
    }
  }

  backTrack(0);

  return r;
}

console.log(partition("aab"));
