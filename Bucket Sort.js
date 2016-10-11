//Bucket sort
var bucketSort = function(array, bucketSize) {
var i,
    minValue = findMinValue(array),
    maxValue = findMaxValue(array),
    BUCKET_SIZE = 5;

console.log('minValue ' + minValue);
console.log('maxValue ' + maxValue);

bucketSize = bucketSize || BUCKET_SIZE;
var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
var buckets = new Array(bucketCount);
console.log('bucketSize = ' + bucketCount);
for (i = 0; i < buckets.length; i++) {
  buckets[i] = [];
}

for (i = 0; i < array.length; i++) {
  buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  console.log('pushing item ' + array[i] + ' to bucket index ' + Math.floor((array[i] - minValue) / bucketSize));
}

array = [];
for (i = 0; i < buckets.length; i++) {
  insertionSort(buckets[i]);
  console.log('bucket sorted ' + i + ': ' + buckets[i].join());
  for (var j = 0; j < buckets[i].length; j++) {
    array.push(buckets[i][j]);
  }
}
return array;
};

//helper functions
var findMaxValue = function(array){
  var max = array[0];
  for (var i=1; i<array.length; i++){
    if (max < array[i]){
      max = array[i];
    }
  }
  return max;
};

var findMinValue = function(array){
  var min = array[0];
  for (var i=1; i<array.length; i++){
    if (min > array[i]){
      min = array[i];
    }
  }
  return min;
};

function insertionSort(array) {
  for(var i = 1; i < array.length-1; i++) {
    var j = i; //save copy of i that we can change
    var current = array[i]; //save copy of current val at i
    while (j>0 && array[j-1] > current) { //see if previous val is > current val
      array[j] = array[j-1]; //move value at j-1 up one spot at j
      j--;
    }
    array[j] = current;
    console.log(array);
  }
  return array;
}
