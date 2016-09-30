//The long way
function parenthesesChecker(symbols){

    let stack = new Stack(),
        balanced = true,
        index = 0,
        symbol, top,
        opens = "([{",
        closers = ")]}";

    while (index < symbols.length && balanced){
        symbol = symbols.charAt(index);
        if (opens.indexOf(symbol) >= 0){
            stack.push(symbol);
            console.log(`open symbol - stacking ${symbol}`);
        } else {
            console.log(`close symbol ${symbol}`);
            if (stack.isEmpty()){
                balanced = false;
                console.log('Stack is empty, no more symbols to pop and compare');
            } else {
                top = stack.pop();
                //if (!matches(top, symbol)){
                if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
                    balanced = false;
                    console.log(`poping symbol ${top} - is not a match compared to ${symbol}`);
                } else {
                    console.log(`poping symbol ${top} - is is a match compared to ${symbol}`);
                }
            }
        }
        index++;
    }
    if (balanced && stack.isEmpty()){
        return true;
    }
    return false;
}

console.log(parenthesesChecker('{([])}')); //true
console.log(parenthesesChecker('{{([][])}()}')); //true
console.log(parenthesesChecker('[{()]')); //false

//Shorter way
function parenthesesChecker(str) {
  var brackets = {
    open: { "{": true, "[": true, "(": true },
    closed: { ")": "(", "}": "{", "]": "[" }
  };

  var stack = [];

  for(var i = 0; i<str.length; i++) {
    var char = str[i];
    if(brackets.open[char]) {
      stack.push(char);
    }
    if(brackets.closed[char]) {
      if(brackets.closed[char] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
