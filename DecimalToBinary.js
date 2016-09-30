//Convert decimal to binary representation not using toString.
  //e.g. if number is 10. cannot do:
  var num = 10;
  num = num.toString(2); //'1010'
  num = parseInt(num); //1010

/*
can divide number by 2 until division results in 0 or less than 0.
e.g. start with 10. remainder, put 1, no remainder, put 0.
  10/2 is 5. remainder is 0. becomes 0.
  5/2 is 2. remainder is 1. becomes 10.
  2/2 is 1. remainer is 0. becomes 010.
  1/2 is 0. remainder is 1. becomes 1010.

  answer is 1010;
*/

function divideBy2(decNumber) {
  var stack = [];
  var remainder;
  var binaryString = '';

  while(decNumber > 0) {
    remainder = Math.floor(decNumber % 2);
    stack.push(remainder);
    decNumber = Math.floor(decNumber / 2);
  }

  while(stack.length > 0) {
    binaryString += stack.pop().toString();
  }
  return binaryString;
}
