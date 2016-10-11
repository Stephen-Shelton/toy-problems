//selection sort
  //find the index with the minimal value, compare it to value at i, if minIndex !== i, then swap them
  //basically find min val, put at 0, then 2nd min val, put at 1, then 3rd min val, put at 2, etc.
  //complexity is O(N^2)
function selectionSort(array) {
  for(var i = 0; i < array.length-1; i++) {
  	var minIndex = i;
    for(var j = i; j < array.length; j++) {
      if(array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    if(i !== minIndex) {
			[array[minIndex], array[i]] = [array[i], array[minIndex]];
    }
  }
  return array;
}
