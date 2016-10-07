//was solved in coderpad.io, where you can use a testing framework
//You are asked to write a function called max_slice which takes as an input an array of integers, and returns the slice with the largest sum of the elements.
//input is array of integers, returns slice with the largest sum of the elements
//can assume array always has values, and values are always integers
//return an array, not the sum

//answer is n^2, but can be solved in n.
function max_slice(arr) {
  var maxSlice = arr.slice(0,1);
  var maxSum = arr[0];

  for (var i = 0; i < arr.length; i++) {
    var tempSum = arr[i];
    if(tempSum > maxSum) {
      maxSum = tempSum;
      maxSlice = arr.slice(i,i+1);
    }
    for (var j = i+1; j < arr.length; j++) {
      tempSum += arr[j];
      if(tempSum > maxSum) {
        maxSum = tempSum;
        maxSlice = arr.slice(i, j+1);
      }
    }
  }
  return maxSlice;
}


//TESTS
var chai = require("chai");
var Mocha = require('mocha');
var assert = require('assert');
var mocha = new Mocha({ui: 'bdd'});
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("Test suite", function() {
  it('should return array if all elements positive', function() {
    assert.equal(max_slice([1,2,3,4,5]).toString(), [1,2,3,4,5]);
  });

  it('should return greatest value if all elements negative', function() {
    assert.equal(max_slice([-5,-4,-3,-2,-1]).toString(), [-1]);
  });

  it('should return largest number if next integers cancel each other', function() {
    assert.equal(max_slice([-3,3,-2,2,-1,1]).toString(), [3]);
  });

  it('should return largest positive slice if negatives > positive runs', function() {
    assert.equal(max_slice([10, 5, -16, 7, 9, -23]).toString(), [7,9]);
  });

  it('should return positives and negatives if positive > abs of previous negative vals', function() {
    assert.equal(max_slice([1, 4, -3, -1, 18, -15]).toString(), [1,4,-3,-1,18]);
  });

});

mocha.run(function() {});
