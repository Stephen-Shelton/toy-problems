//merge sort
  //complexity O(n log n)
  //firefox uses merge sort for its implementation of Array.prototype.sort
  //divide original array into smaller arrays until each small array only has 1 position, then merge them back as sorted
  //merge doesn't happen until there's 1 element in each array from mergeSort
  //deconstructs and reassembles left before doing the same for the right
var merge = function(left, right) { //helper function for mergeSort
  var result = [],
      il = 0,
      ir = 0;

  while(il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else{
      result.push(right[ir++]);
    }
  }
  while (il < left.length) { //push remaining items in left if they exist
    result.push(left[il++]);
  }
  while (ir < right.length) { //push remaining items in right if they exist
    result.push(right[ir++]);
  }
  console.log(result);
  return result;
};

var mergeSort = function(array) {
  var length = array.length;
  //base case to return array
  if (length === 1) {
	  console.log(array);
	  return array;
  }

  var mid = Math.floor(length / 2),
      left = array.slice(0, mid),
      right = array.slice(mid, length);

  return merge(mergeSort(left), mergeSort(right)); //break down array then reassemble sorted
};
