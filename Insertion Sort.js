//insertion sort
  //assumes 1st element is sorted, which is why we start at i=1 (array doesn't have to actually be sorted)
  //better performance than the selection and bubble sort algorithms when sorting small arrays
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
