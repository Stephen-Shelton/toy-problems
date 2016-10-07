/*
# You are tasked with writing a function that takes an array of integers. If any 3 integers in the array sum up to equal 0, return them. If not, return nil.
*/

//any 3 elements sum up to 0, return those 3 elements
//can only use an element once
//can use an element as many times as it appears in the array
//[0,0]
// [1,2,3] -> null
// [0,0,1] -> null
// [-5, 5, 0] -> [-5, 5, 0]
// [1,2,3,4,5,-5,-4,-3,-2,-1] // [1,2,-3]

//n^3 solution
function sumZero(arr) {
  for(var i = 0; i<arr.length; i++) {
    for(var j = i+1; j<arr.length; j++) {
      for(var k = j+1; k<arr.length; k++) {
        if((arr[i] + arr[j] + arr[k]) === 0) {
          return [arr[i], arr[j], arr[k]];
        }
      }
    }
  }
  return null;
}

console.log(sumZero([1,2,3])); //null
console.log(sumZero([-5, 5, 0, 4, 2])); //return array
console.log(sumZero([1,2,3,4,5,-5,-4,-3,-2,-1])); //return array
console.log(sumZero([-1,-2,-3])); //null
console.log(sumZero([1,2,3,4,5,6,7,8,9])); //null
console.log(sumZero([-1,-2,-3,-4,-5,-6,-7,-8,-9])); //null
console.log(sumZero([-1,-2,3,100])); //return [-1,-2,3]

//use data structure to make runtime n^2
//use a hash
  //key should be sum of a pair, 2 elements, value is array with those 2 elements

//console.log(sumZero([-5, 5, 0, 4, 2])); //return array
//pairs
  //[-5, 5],[-5, 0], [-5, 4], [-5, 2], [5, 0],
  //[5, 4], [5, 2], [0, 4], [0, 2], [4, 2] => 10 pairs
//pair values could be indices

function pairsHash(arr) {
  var hash = {};
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      var sum = arr[i] + arr[j];
        hash[sum] = [i, j];
    }
  }
  return hash;
}

console.log(pairsHash([-5, 5, 0, 4, 2]));

//n solution using pairHash helper function
function sumZero(arr) {
  var hash = pairsHash(arr);

  for(var a = 0; a < arr.length; a++) {
    var inverse = -1 * arr[a];
    if(hash[inverse] && !hash[inverse].includes(a)) {
      return [arr[a], arr[hash[inverse][0]], arr[hash[inverse][1]]];
    }
  }
  return null;
}

console.log(sumZero([1,2,3])); //null
console.log(sumZero([-5, 5, 0, 4, 2])); //return array
console.log(sumZero([1,2,3,4,5,-5,-4,-3,-2,-1])); //return array
console.log(sumZero([-1,-2,-3])); //null
console.log(sumZero([1,2,3,4,5,6,7,8,9])); //null
console.log(sumZero([-1,-2,-3,-4,-5,-6,-7,-8,-9])); //null
console.log(sumZero([-1,-2,3,100])); //return [-1,-2,3]
