//Create a function that accepts an array, A, and an integer, D. The array's indices indicate stones/positions on a river, and its values indicate when those stones become available. e.g. A[3] = 1 means after 1 second, a stone becomes available at index 3 on the river. A[i] = -1 means a stone never surfaces at i. You start off at position -1, i.e. the bank of one side of the river. D indicates how far you can hop to get onto a stone to get to other side of the river. Return 0 if D is greater than the length of the river, i.e. A.length. If you can never hop across the river, return -1. Return the minimum amount of time required to hop across the river. To solve you need to use dynamic programming. 

function solution(A, D) {
  var X = A.length;
  var dp = new Array(X + 1);
  var earliestTime = {};
  earliestTime[0] = 0;
  earliestTime[X] = 0;
  for(var i = 0; i < A.length; i++) {
    if(!earliestTime[A[i]]) {
      earliestTime[A[i]] = i;
    }
  }
  dp[0] = 0;
  for(var i = 1; i < dp.length; i++) {
    if(!earliestTime[i]) {
      dp[i] = Number.MAX_SAFE_INTEGER;
      continue;
    }
    var result = Number.MAX_SAFE_INTEGER;
    var j = i - 1;
    while(j >= 0 && i - j <= D) {
      result = result < dp[j] ? result : dp[j];
      j--;
    }
    dp[i] = Math.max(earliestTime[i], result);
  }
  return dp[dp.length - 1];
}
