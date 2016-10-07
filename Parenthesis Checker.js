//check if brackets are properly balanced in a string
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
