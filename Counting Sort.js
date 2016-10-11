//Counting sort
var countingSort = function(array) {
  var i,
      maxValue = findMaxValue(array),
      sortedIndex = 0,
      counts = new Array(maxValue + 1);

  for (i = 0; i < array.length; i++) {
    if (!counts[array[i]]) {
      counts[array[i]] = 0;
    }
    counts[array[i]]++;
  }

  console.log('Frequencies: ' + counts.join());

  for (i = 0; i < counts.length; i++) {
    while (counts[i] > 0) {
      array[sortedIndex++] = i;
      counts[i]--;
    }
  }
  return array;
};

var findMaxValue = function(array){
  var max = array[0];
  for (var i=1; i<array.length; i++){
    if (max < array[i]){
      max = array[i];
    }
  }
  return max;
};
