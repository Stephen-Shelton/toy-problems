//heap sort
  //another efficient sorting algorithm, sorts an array as if it were a binary tree
  //index 0 is root of tree
  //The parent of any node N is N/2 (with the exception of the root node)
  //The left-hand side child of a node L is 2*L
  //The right-hand child of a node R is 2*R+1
var heapSort = function(array) {
  var heapSize = array.length;
  buildHeap(array); //makes sure parent nodes are always > child nodes

  while (heapSize > 1) {
    heapSize--;
    [array[0], array[heapSize]] = [array[heapSize], array[0]];
    heapify(array, heapSize, 0);
  }
  return array;
};

var buildHeap = function(array) {
  var heapSize = array.length;
  for(var i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, heapSize, i);
  }
};

var heapify = function(array, heapSize, i){
  var left = i * 2 + 1;
  var right = i * 2 + 2;
  var largest = i;

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, heapSize, largest);
  }
};
