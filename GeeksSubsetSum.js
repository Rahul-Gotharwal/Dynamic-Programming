//---------------Recursion----------------//
// function subsetSum(array, n, target) {
//   if (target === 0) return true; // Check the copy NOTE
// Base case: If no more elements left, check if the single element equals the target
//   if (n === 0) return array[0] === target; // this will also return the true and false// if the n is 0 then the element itself is found at the given target
//   // exclude the current element
//   let exclude = subsetSum(array, n - 1, target);
//   //// Include the current element (if it's less than or equal to the target)
//   let include = false;
//   if (array[n] <= target) {
//     include = subsetSum(array, n - 1, target - array[n]);
//   }
//   return exclude || include;
// }
// let arr = [1, 2, 3, 4];
// let target = 5;
// console.log(subsetSum(arr, arr.length - 1, target)); // true

//---------------Memoization (Top-Down DP)------------------//
// function subsetSum(
//   array,
//   n,
//   target,
//   dp = Array.from({ length: array.length }, () =>
//     Array(target + 1).fill(undefined)
//   )
// ) {
//   if (target === 0) return true;
//   if (n === 0) return array[0] === target; // this will also return the true and false// if the n is 0 then the element itself is found at the given target
//   if (dp[n][target] !== undefined) return dp[n][target];
//   // exclude the current element
//   let exclude = subsetSum(array, n - 1, target);
//   //// Include the current element (if it's less than or equal to the target)
//   let include = false;
//   if (array[n] <= target) {
//     include = subsetSum(array, n - 1, target - array[n]);
//   }
//   dp[n][target] = exclude || include;
//   return dp[n][target];
// }
// let arr = [1, 2, 3, 4];
// let target = 5;
// console.log(subsetSum(arr, arr.length - 1, target)); // true

// //----------------Memoization (Top-Down DP)2--------------//
// function subsetSumMemo(arr, n, target, dp) {
//   if (target === 0) return true; // Base case: target is met
//   // n mtlb k index
//   if (n === 0) return arr[0] === target; // Base case: only one element to consider

//   if (dp[n][target] !== undefined) return dp[n][target]; // Return cached result

//   // Exclude the current element
//   let exclude = subsetSumMemo(arr, n - 1, target, dp);

//   // Include the current element (if it's less than or equal to the target)
//   let include = false;
//   if (arr[n] <= target) {
//     include = subsetSumMemo(arr, n - 1, target - arr[n], dp);
//   }

//   // Cache and return the result
//   return (dp[n][target] = exclude || include);
// }

// // Usage
// let arr = [1, 2, 3, 4];
// let target = 5;
// let dp = Array(arr.length)
//   .fill()
//   .map(() => Array(target + 1));
// console.log(subsetSumMemo(arr, arr.length - 1, target, dp)); // true

//------------Tabulation----------------//
// wathc video on dp -> https://www.youtube.com/watch?v=tRpkluGqINc (it is the memoization video)
function subsetSum(arr, target) {
  let n = arr.length;
  let dp = Array(n)
    .fill()
    .map(() => Array(target + 1).fill(false));
  // if any index target is 0 //dp[i][0] = true for all i because the target of 0 can be achieved by selecting no elements.
  for (let i = 0; i < n; i++) dp[i][0] = true; // Target 0 can be met by taking no elements
  // agar arr[0] target se chota hoga tbhi to hum aage target ko form krenge
  if (arr[0] <= target) dp[0][arr[0]] = true; // dp[0][1] will true thats why in dry run we have true at 0,1
  // fill the dp
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= target; j++) {
      // j is our target here , because at the end we rach till the target
      // exclude the current element
      let exclude = dp[i - 1][j]; // copy the recurrences like index piche gya or traget j is same
      // incude the current element if it is not longer then the j
      let include = j >= arr[i] ? dp[i - 1][j - arr[i]] : false;
      dp[i][j] = exclude || include;
    }
  }
  return dp[n - 1][target];
}
let arr = [1, 2, 3, 4];
let target = 5;
let n = arr.length;
console.log(subsetSum(arr, target)); // true
// base case explanation
/**
 * When the target is 0 (i.e., dp[i][0] = true):

Explanation: If the target sum is 0, it can always be achieved by taking no elements. This is why we set dp[i][0] = true for all i.
Dry Run: For any subproblem where we want to check if a sum of 0 can be achieved, we say yes because by taking no elements, the sum is 0.
Dry Run of the Example
Initialization:

dp[i][0] = true for all i because the target of 0 can be achieved by selecting no elements.
dp[0][arr[0]] = true, so dp[0][1] = true because arr[0] = 1.
Initial dp table:

arduino
Copy code
dp = [
    [true, true, false, false, false, false],  // Considering only arr[0] = 1
    [true, false, false, false, false, false], // Considering arr[0] and arr[1]
    [true, false, false, false, false, false], // Considering arr[0], arr[1], and arr[2]
    [true, false, false, false, false, false], // Considering arr[0], arr[1], arr[2], and arr[3]
]
Filling the table:

For i = 1 (considering the first two elements [1, 2]):
dp[1][1]: Exclude 2, so dp[1][1] = dp[0][1] = true.
dp[1][2]: Include 2, so dp[1][2] = true.
dp[1][3]: Include 2, so dp[1][3] = dp[0][1] = true.
arduino
Copy code
dp = [
    [true, true, false, false, false, false],
    [true, true, true, true, false, false],
    [true, false, false, false, false, false],
    [true, false, false, false, false, false],
]
For i = 2 (considering the first three elements [1, 2, 3]):
dp[2][1]: Exclude 3, so dp[2][1] = dp[1][1] = true.
dp[2][2]: Exclude 3, so dp[2][2] = dp[1][2] = true.
dp[2][3]: Include 3, so dp[2][3] = dp[1][0] = true.
dp[2][4]: Include 3, so dp[2][4] = dp[1][1] = true.
dp[2][5]: Include 3, so dp[2][5] = dp[1][2] = true.
arduino
Copy code
dp = [
    [true, true, false, false, false, false],
    [true, true, true, true, false, false],
    [true, true, true, true, true, true],
    [true, false, false, false, false, false],
]
For i = 3 (considering all four elements [1, 2, 3, 4]):
dp[3][1]: Exclude 4, so dp[3][1] = dp[2][1] = true.
dp[3][2]: Exclude 4, so dp[3][2] = dp[2][2] = true.
dp[3][3]: Exclude 4, so dp[3][3] = dp[2][3] = true.
dp[3][4]: Include 4, so dp[3][4] = dp[2][0] = true.
dp[3][5]: Include 4, so dp[3][5] = dp[2][1] = true.
arduino
Copy code
dp = [
    [true, true, false, false, false, false],
    [true, true, true, true, false, false],
    [true, true, true, true, true, true],
    [true, true, true, true, true, true],
]
Final answer: dp[3][5] = true indicates that there is a subset of [1, 2, 3, 4] that sums to 5.

*/
