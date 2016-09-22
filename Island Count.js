module.exports = function(str) {
  var count = 0;
  var mapped = [];
  str.split('\n').forEach(function(row) {mapped.push(row.split(''))});
  var height = mapped.length;
  var width = mapped[0].length;

  var recurse = function(row, column) {
    mapped[row][column] = '.'
    if(column+1 < width && mapped[row][column+1] === '0') {
      recurse(row, column + 1);
    }
    if(column-1 >= 0 && mapped[row][column-1] === '0') {
      recurse(row, column - 1);
    }
    if(row-1 >= 0 && mapped[row-1][column] === '0') {
      recurse(row-1, column);
    }
    if(row+1 < height && mapped[row+1][column] === '0') {
      recurse(row+1, column);
    }
  };

  mapped.forEach(function(row, i) {
    row.forEach(function(val, j) {
      if (val === '0') {
        count++;
        recurse(i, j);
      }
    })
  });

  return count;
}
