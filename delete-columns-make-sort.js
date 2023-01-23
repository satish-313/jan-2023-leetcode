/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let deleteColumn = 0;

  for (let str of strs) {
    if (str.split("").sort().join("") !== str) {
      console.log(str);
      deleteColumn += 1;
    }
  }

  return deleteColumn;
};
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let deleteColumn = 0;
  let col = strs[0].length;
  let row = strs.length;

  for (let i = 0; i < col; i++) {
    for (let j = 1; j < row; j++) {
      if (strs[j][i] < strs[j - 1][i]) {
        deleteColumn += 1;
        break;
      }
    }
  }

  return deleteColumn;
};

console.log(minDeletionSize(["cba", "daf", "ghi"]));
