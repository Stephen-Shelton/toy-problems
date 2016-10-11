//Radix sort
var radixSort = function(array, radixBase=10){
  var i,
      minValue = findMinValue(array),
      maxValue = findMaxValue(array);

  // Perform counting sort for each significant digit), starting at 1
  var significantDigit = 1;
  while (((maxValue - minValue) / significantDigit) >= 1) {
    console.log('radix sort for digit ' + significantDigit);
    array = countingSortForRadix(array, radixBase, significantDigit, minValue);
    console.log(array.join());
    significantDigit *= radixBase;
  }
  return array;
};

var countingSortForRadix = function(array, radixBase, significantDigit, minValue){
  var i, countsIndex,
      counts = new Array(radixBase),
      aux = new Array(radixBase);
  for (i = 0; i < radixBase; i++) {
    counts[i] = 0;
  }
  for (i = 0; i < array.length; i++) {
    countsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
    counts[countsIndex]++;
  }
  for (i = 1; i < radixBase; i++) {
    counts[i] += counts[i - 1];
  }
  for (i = array.length - 1; i >= 0; i--) {
    countsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
    aux[--counts[countsIndex]] = array[i];
  }
  for (i = 0; i < array.length; i++) {
    array[i] = aux[i];
  }
  return array;
};

//helper function
var findMaxValue = function(array){
  var max = array[0];
  for (var i=1; i<array.length; i++){
    if (max < array[i]){
      max = array[i];
    }
  }
  return max;
};
//helper function
var findMinValue = function(array){
  var min = array[0];
  for (var i=1; i<array.length; i++){
    if (min > array[i]){
      min = array[i];
    }
  }
  return min;
};
