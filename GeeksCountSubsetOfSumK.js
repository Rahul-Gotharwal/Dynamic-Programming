//------------------STRIVER give the solution of it because it has some problme in the base cases
// we will cahnge the below code in futurea as acoording to it or Geeks   solution below is correct way to do it
// function perfectSum(arr, n, sum) {
//   if (sum === 0 && arr[0]===0) return 2;
//   if (sum === 0 || sum===arr[0]) return 1;
//   else return 0
//   const notTaken = perfectSum(arr, n - 1, sum);
//   let taken = 0;
//   if (arr[n] <= sum) {
//     taken = perfectSum(arr, n - 1, sum - arr[n-1]);
//   }
//   return notTaken + taken;
// }

// const arr = [5, 2, 3, 10, 6, 8];
// const n = arr.length;
// const sum = 10;
// console.log(perfectSum(arr, n, sum));

// -------------Memoiaztion  ---------------//
/**why modulo
 * Negative Output: You're getting -4 because JavaScript can handle very large numbers, but when you add large integers, it can overflow, and without modulo, the result can become negative.
 */
// const MOD = 1e9 + 7; // Modulo to avoid overflow
// function findWaysUtil(ind, target, arr, dp) {
//   // Base case: if target is 0, there's always 1 way (empty subset)
//   if (target === 0) return 1;

//   // If only one element is left, check if it's equal to the target
//   if (ind === 0) return arr[0] === target ? 1 : 0;

//   // If already computed, return the stored result
//   if (dp[ind][target] !== -1) return dp[ind][target];

//   // Explore the not-taken case (exclude current element)
//   const notTaken = findWaysUtil(ind - 1, target, arr, dp) % MOD;

//   // Explore the taken case (include current element, if valid)
//   let taken = 0;
//   if (arr[ind] <= target)
//     taken = findWaysUtil(ind - 1, target - arr[ind], arr, dp) % MOD;

//   // Store the result in the DP table
//   return (dp[ind][target] = notTaken + taken);
// }

// // Function to find the number of subsets with the given sum 'k'
// function findWays(num, k) {
//   const n = num.length;

//   // Using Array.from() to create a 2D dp array
//   const dp = Array.from({ length: n }, () => Array(k + 1).fill(-1));

//   return findWaysUtil(n - 1, k, num, dp);
// }

// // Main function
// function main() {
//   const arr = [1, 2, 2, 3];
//   const k = 3;

//   console.log("The number of subsets found are: " + findWays(arr, k));
// }

// // Run the main function
// main();

//-----------------------Tabulation-----------------//
const MOD = 1e9 + 7; // Modulo to prevent overflow
function findWays(num, k) {
  const n = num.length;
  // create a 2d dp array
  const dp = Array.from({ length: n }, () => Array(k + 1).fill(0));
  for (let i = 0; i < n; i++) {
    dp[i][0] = 1; // at any index if the target is 0 for that we store the 1
  }
  //if (num[0] <= k) dp[0][num[0]] = 1; ensures that the first element is handled correctly if it equals the target.
  // store the base case
  // kyuki jese uper jab index 0 pe agar arr[0]=== target he to hum 1 return krwa rhe he, vese hi dp[0] mtlb index 0 , pe hum num[0] ko as count 1 store krwa lenge mtlb hum man lenege ki num[0] abhi target k equal he to 1 store kardo
  if (num[0] <= k) dp[0][num[0]] = 1;
  // fill the dp
  for (let ind = 1; ind < n; ind++) {
    for (let target = 1; target <= k; target++) {
      // Exclude the current element
      const notTaken = dp[ind - 1][target] % MOD;

      // Include the current element if it's <= target
      let taken = 0;
      if (num[ind] <= target) {
        taken = dp[ind - 1][target - num[ind]] % MOD;
      }
      dp[ind][target] = (notTaken + taken) % MOD;
    }
  }
  return dp[n - 1][k];
}
function main() {
  const arr = [5, 2, 3, 10, 6, 8];
  const k = 10;

  console.log("The number of subsets found are: " + findWays(arr, k));
}

// Run the main function
main();
//--------------------Geeks solution ---------------//
// const MOD = 1e9 + 7;

// // Recursive Approach
// function solve(arr, n, sum) {
//   if (n === 0 && sum !== 0) return 0;
//   if (n === 0 && sum === 0) return 1;

//   if (arr[n - 1] <= sum) {
//     return (solve(arr, n - 1, sum - arr[n - 1]) + solve(arr, n - 1, sum)) % MOD;
//   } else {
//     return solve(arr, n - 1, sum) % MOD;
//   }
// }

// // Memoization Approach
// function solveMem(arr, n, sum, dp) {
//   if (n === 0 && sum !== 0) return 0;
//   if (n === 0 && sum === 0) return 1;

//   if (dp[n][sum] !== -1) return dp[n][sum];

//   if (arr[n - 1] <= sum) {
//     return dp[n][sum] = (solveMem(arr, n - 1, sum - arr[n - 1], dp) + solveMem(arr, n - 1, sum, dp)) % MOD;
//   } else {
//     return dp[n][sum] = solveMem(arr, n - 1, sum, dp) % MOD;
//   }
// }

// Tabulation Approach
// function solveTab(arr, n, sum) {
//   const dp = Array.from({ length: n + 1 }, () => Array(sum + 1).fill(0));

//   for (let i = 0; i <= n; i++) {
//     dp[i][0] = 1; // There's always one way to achieve sum 0 (empty subset)
//   }

//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j <= sum; j++) {
//       if (arr[i - 1] <= j) {
//         dp[i][j] = (dp[i - 1][j - arr[i - 1]] + dp[i - 1][j]) % MOD;
//       } else {
//         dp[i][j] = dp[i - 1][j] % MOD;
//       }
//     }
//   }
//   return dp[n][sum] % MOD;
// }

// // Main function to call
// function perfectSum(arr, n, sum) {
//   // Uncomment one of the following lines to test the different approaches
//   // return solve(arr, n, sum); // Recursive approach
//   // const dp = Array.from({ length: n + 1 }, () => Array(sum + 1).fill(-1));
//   // return solveMem(arr, n, sum, dp); // Memoization approach
//   return solveTab(arr, n, sum); // Tabulation approach
// }

// // Example usage
// const arr = [5, 2, 3, 10, 6, 8];
// const sum = 10;
// const n = arr.length;

// console.log("The number of subsets found are: " + perfectSum(arr, n, sum));
