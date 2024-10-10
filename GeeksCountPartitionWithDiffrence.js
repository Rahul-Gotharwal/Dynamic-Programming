const MOD = 1e9 + 7;
//----------------Solution only in the tabulation(Below in  tabulation code )--------------//
// Recursive Approach
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
//     return (dp[n][sum] =
//       (solveMem(arr, n - 1, sum - arr[n - 1], dp) +
//         solveMem(arr, n - 1, sum, dp)) %
//       MOD);
//   } else {
//     return (dp[n][sum] = solveMem(arr, n - 1, sum, dp) % MOD);
//   }
// }
/**
 * 
 * et’s say you partition the array into two subsets S1 and S2.
The goal is to find two subsets where the difference between their sums is equal to d.
Mathematically, we want:
 S1−S2=d
 We also know that the total sum of the array is totSum, so
 S1+S2=totSum
 Now, adding these two equations:
 (S1−S2)+(S1+S2)=d+totSum⟹2S1=d+totSum
 S1= d+totSum/2
This means we need to find how many subsets in the array sum to S1 = (d + totSum) / 2. If we can find that, we can infer that the rest of the array elements would sum to S2, and their difference would be d.
 */

//---------Tabulation Approach------------//
// NOW here this function return the number of subsets that equal the given target 
function solveTab(arr, n, sum) {
  const dp = Array.from({ length: n + 1 }, () => Array(sum + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1; // There's always one way to achieve sum 0 (empty subset)
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= sum; j++) {
      if (arr[i - 1] <= j) {
        dp[i][j] = (dp[i - 1][j - arr[i - 1]] + dp[i - 1][j]) % MOD;
      } else {
        dp[i][j] = dp[i - 1][j] % MOD;
      }
    }
  }
  return dp[n][sum] % MOD;
}

// Main function to call
function perfectSum(arr, n, sum) {
  // Uncomment one of the following lines to test the different approaches
  // return solve(arr, n, sum); // Recursive approach
  // const dp = Array.from({ length: n + 1 }, () => Array(sum + 1).fill(-1));
  // return solveMem(arr, n, sum, dp); // Memoization approach
  return solveTab(arr, n, sum); // Tabulation approach
}
// this function is divide the array into the two partions by according to the target and above fucntions tells us the number of  subsets which is equal to the given target
function countPartitions(arr, n, d) {
  let initialValue = 0;
  totSum = arr.reduce(
    (accumulator, currentvalue) => accumulator + currentvalue,
    initialValue
  );
  if (totSum -d< 0 || (totSum -d) % 2 !== 0) return false;
  // We need to find subsets with sum (totSum - d) / 2
  const targetSum = (totSum +d) / 2;
  return perfectSum(arr, n, targetSum);
}
n = 4;
d = 3; 
arr = [5, 2, 6, 4];
console.log(
  "  subsets that diffrence is equal to  d  :" + countPartitions(arr, n, d)
);

//-----------------Tabulation(Geeks )----------------//
// class Solution {
//   constructor() {
//     this.MOD = 1e9 + 7;
//   }

//   countPartitions(n, d, arr) {
//     // Calculate total sum of the array
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//       sum += arr[i];
//     }

//     // If total sum < d or (sum - d) is odd, return 0
//     if (sum < d || (sum - d) % 2 !== 0) return 0;

//     // Calculate the required subset sum
//     let req = (sum - d) / 2;

//     // Initialize DP table (2D array)
//     let dp = Array.from({ length: n + 1 }, () => Array(req + 1).fill(0));
//     dp[n][0] = 1; // Base case: There's one way to make sum 0 with no elements

//     // Populate the DP table
//     for (let idx = n - 1; idx >= 0; idx--) {
//       for (let target = 0; target <= req; target++) {
//         let notPick = dp[idx + 1][target] % this.MOD;
//         let pick =
//           target >= arr[idx] ? dp[idx + 1][target - arr[idx]] % this.MOD : 0;
//         dp[idx][target] = (pick + notPick) % this.MOD;
//       }
//     }

//     // The answer is the number of ways to partition the array to get the target sum
//     return dp[0][req];
//   }
// }

// // Example usage
// const solution = new Solution();
// let n = 4;
// let d = 3;
// let arr = [5, 2, 6, 4];

// console.log(solution.countPartitions(n, d, arr)); // Output: 1
