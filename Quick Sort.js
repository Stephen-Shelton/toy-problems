//quick sort
  //chrome uses a variation of quick sort for its implementation of Array.prototype.sort
  //also n log n, very commonly used sorting algorithm
var quickSort = function(array) {
  quick(array, 0, array.length - 1);
};

var partition = function(array, left, right) {
  var pivot = array[Math.floor((right + left) / 2)]; //select the middle item as the pivot
  var i = left; //left pointer, 1st starts at 0
  var j = right; //right pointer, 1st starts at array.length-1

  console.log('pivot is ' + pivot + '; left is ' + left + '; right is ' + right);

  while (i <= j) { //condition where i and j haven't crossed each other
    while (array[i] < pivot) { //items at i should be less than val at pivot. stop shifting i until val at i > pivot.
      i++;
      console.log('i = ' + i);
    }
    while (array[j] > pivot) { //items at j should be greater than val at pivot. stop shifting j until val at j < pivot
      j--;
      console.log('j = ' + j);
    }
    if (i <= j) { //if i <= j, see values at i and j, then shift vals for i and j
      console.log('swap ' + array[i] + ' with ' + array[j]);
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }
  return i; //return left pointer, will be used to create subarrays in quick helper function
};

var quick = function(array, left, right) {
  var index; //index helps us separate the subarray with smaller and greater values so that we can recursively call the quick function again

  if (array.length > 1) { //array with 1 element is already sorted, need to sort when > 1 element
    index = partition(array, left, right); //index assigned to returned value of partition function
    if (left < index - 1) {
      quick(array, left, index - 1);
    }
    if (index < right) {
      quick(array, index, right);
    }
  }
  return array;
};

// variation of quicksort
function quickSort(arr) {

  if(arr.length === 0) {
    return [];
  }

  let pivot = arr[0];
  let small = [];
  let big = [];

  for(var i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      small.push(arr[i]);
    } else {
      big.push(arr[i]);
    }
  }

  return [...quickSort(small), pivot, ...quickSort(big)];
}
