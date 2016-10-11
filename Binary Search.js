//binary search
  //faster than sequential search, but only works if array is sorted
  var binarySearch = function(array, target){
    array = quickSort(array);

    var low = 0;
    var high = array.length - 1;
    var mid;
    var itemAtMid;

    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      itemAtMid = array[mid];
      if (itemAtMid < target) {
        low = mid + 1;
      } else if (itemAtMid > target) {
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  };
