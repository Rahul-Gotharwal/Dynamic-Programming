//------------------using recursion---------------//
function subsetSum(array, n, target) {
  if (target === 0) return true; // Check t he copy NOTE
  //Base case: If no more elements left, check if the single element equals the target
  if (n === 0) return array[0] === target; // this will also return the true and false// if the n is 0 then the element itself is found at the given target
  // exclude the current element
  let exclude = subsetSum(array, n - 1, target);
  //// Include the current element (if it's less than or equal to the target)
  let include = false;
  if (array[n] <= target) {
    include = subsetSum(array, n - 1, target - array[n]);
  }
  return exclude || include;
}

function canPartition(nums, n) {
  let totSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totSum += nums[i];
  }
  console.log(totSum);
  if (totSum % 2 !== 0) return false;
  else {
    return subsetSum(nums, n, totSum / 2);
  }
}
let nums = [1, 5, 11, 5];
let n = nums.length;
console.log(canPartition(nums, n));

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
//   if (n === 0) return array[0] === target;
//   if (dp[n][target] !== undefined) return dp[n][target];
//   let exclude = subsetSum(array, n - 1, target);
//   let include = false;
//   if (array[n] <= target) {
//     include = subsetSum(array, n - 1, target - array[n]);
//   }
//   dp[n][target] = exclude || include;
//   return dp[n][target];
// }
// function canPartition(nums, n) {
//   let totSum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     totSum += nums[i];
//   }
//   if (totSum % 2 !== 0) return false;
//   else {
//     return subsetSum(nums, n - 1, totSum / 2);
//   }
// }
// let nums = [1, 5, 11, 5];
// let n = nums.length;
// console.log(canPartition(nums, n));

///-------------Tabulation-----------//
// function subsetSum(arr, target) {
//   let n = arr.length;
//   let dp = Array(n)
//     .fill()
//     .map(() => Array(target + 1).fill(false));

//   for (let i = 0; i < n; i++) dp[i][0] = true;
//   // agar arr[0] target se chota hoga tbhi to hum aage target ko form krenge
//   if (arr[0] <= target) dp[0][arr[0]] = true; // dp[0][1] will true thats why in dry run we have true at 0,1
//   // fill the dp
//   for (let i = 1; i < n; i++) {
//     for (let j = 1; j <= target; j++) {
//       let exclude = dp[i - 1][j];
//       let include = j >= arr[i] ? dp[i - 1][j - arr[i]] : false;
//       dp[i][j] = exclude || include;
//     }
//   }
//   return dp[n - 1][target];
// }
// function canPartition(nums) {
//   let totSum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     totSum += nums[i];
//   }
//   if (totSum % 2 !== 0) return false;
//   else {
//     return subsetSum(nums, totSum / 2);
//   }
// }
// let nums = [1, 5, 11, 5];
// console.log(canPartition(nums));
