//almost the same as Decimal to Binary
function baseConverter(decNumber, base) {
  var stack = [];
  var remainder;
  var baseString = '';
  var digits = '0123456789ABCDEF'; //in case of hexadecimal

  while(decNumber > 0) {
    remainder = Math.floor(decNumber % base);
    stack.push(remainder);
    decNumber = Math.floor(decNumber / base);
  }

  while(stack.length > 0) {
    baseString += digits[stack.pop()];
  }
  return baseString;
}
