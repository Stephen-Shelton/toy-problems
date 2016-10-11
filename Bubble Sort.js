//bubble sort
function bubbleSort(array) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array.length - 1; j++) {
      if(array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
  return array;
}

//slightly improved bubble sort
  //avoids comparing numbers that are already in place
  //however still has O(N^2) complexity
function bubbleSort(array) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array.length-1-i; j++) {
      if(array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
  return array;
}
