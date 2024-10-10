// DP -14 code
// function subsetSumUtil(ind, target, arr) {
//   if (target === 0) return true;
//   if (ind === 0) return arr[0] === target;

//   const notTaken = subsetSumUtil(ind - 1, target, arr);
//   let taken = false;
//   if (arr[ind] <= target) {
//     taken = subsetSumUtil(ind - 1, target - arr[ind], arr);
//   }

//   return notTaken || taken;
// }

// function minSubsetSumDifference(arr) {
//   let n = arr.length;
//   // we can add the array values by using the for loop also but reduce method is easy to go
//   //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//   //let totSum = arr.reduce((acc, num) => acc + num, 0);
//   let initialValue = 0;
//   let totSum = arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
//   );
//   let mini = Infinity;
//   for (let i = 0; i <= totSum; i++) {
//     if (subsetSumUtil(n - 1, i, arr)) {
//       const diff = Math.abs(i - (totSum - i));
//       mini = Math.min(mini, diff);
//     }
//   }
//   return mini;
// }
// function main() {
//   const arr = [3, 9, 7, 3];
//   console.log(
//     "The minimum absolute difference is: " + minSubsetSumDifference(arr)
//   );
// }

// main();

//-------------Memoization-----------//
// function subsetSumUtil(ind, target, arr) {
//   if (target === 0) return true;
//   if (ind === 0) return arr[0] === target;

//   const notTaken = subsetSumUtil(ind - 1, target, arr);
//   let taken = false;
//   if (arr[ind] <= target) {
//     taken = subsetSumUtil(ind - 1, target - arr[ind], arr);
//   }

//   return notTaken || taken;
// }
// ye funciton till the totalsum tk call uper dega or jo bhi subset equal honge target (i) k vo uper wala fucniton hmko de dega fir hum min find krenge
// function minSubsetSumDifference(arr, n) {
//   let totSum = arr.reduce((acc, num) => acc + num, 0);
//   const dp = new Array(n).fill(0).map(() => new Array(totSum + 1).fill(-1));
//   for (let i = 0; i <= totSum; i++) {
// // we need only the last row
// // agar dp[n-1] km hoke 3 se 2 nhu hua or 2 pe value fill hui to bhi next recursive calls like till 22 we have then the dp table also have the value at the end which consist the all value we want
//     dp[n - 1][i] = subsetSumUtil(n - 1, i, arr); // storing the result in the dp
//   }
//   let mini = Infinity;
//   for (let i = 0; i <= totSum; i++) {
//     // (dp[n-1][i]) is true or can say it is only run for the cobinations which are posiible(like valid s1 are possible) at video 21:29
//     if (dp[n - 1][i]) {
//       // checkig the dp
// // i is not the index in array (it is the valus till the totsum) , or jo bhi i ki poosible values hong mlb jo funciton true return krege unke liye hi check krenge
//       const diff = Math.abs(i - (totSum - i));
//       mini = Math.min(mini, diff);
//     }
//   }
//   return mini;
// }

// function main() {
//   const arr = [3, 9, 7, 3];
//   const n = arr.length;

//   console.log(
//     "The minimum absolute difference is: " + minSubsetSumDifference(arr, n)
//   );
// }

// main();

//---------------------Tabulation----------------//
function minSubsetSumDifference(arr) {
  const n = arr.length;
  const totalSum = arr.reduce((sum, num) => sum + num, 0);
  // create and initialize a 2D Dp array;
  const dp = new Array(n).fill(0).map(() => new Array(totalSum + 1).fill());
  dp[0][0] = true; // at index 0 target is 0 in dp
  if (arr[0] <= totalSum) {
    dp[0][arr[0]] = true;
  }
  // fill the dp
  for (let ind = 1; ind < n; ind++) {
    for (let target = 0; target <= totalSum; target++) {
      const notTaken = dp[ind - 1][target];
      const taken = arr[ind] <= target ? dp[ind - 1][target - arr[ind]] : false;
      dp[ind][target] = notTaken || taken;
    }
  }
  let mini = Infinity;
  for (let i = 0; i <= totalSum / 2; i++) {
    if (dp[n - 1][i]) {
      // agar dp me true value exist krti he to
      const diff = Math.abs(i - (totalSum - i));
      mini = Math.min(mini, diff);
    }
  }
  return mini;
}

const arr = [3, 9, 7, 3];
console.log(
  "The minimum absolute difference is: " + minSubsetSumDifference(arr)
);

//--------------------space optimizaion--------------//
// function minSubsetSumDifference(arr) {
//   const n = arr.length;
//   const totSum = arr.reduce((sum, num) => sum + num, 0);

//   // Create a 1D DP array to keep track of achievable subset sums
//   let dp = new Array(n).fill(false);
//   // let dp = new Array(totSum + 1).fill(false);
//   dp[0] = true;
//   for (let num of arr) {
//     const newDp = [...dp]; // Create a new array to store the next state
//     for (let target = num; target <= totSum; target++) {
//       if (dp[target - num]) {
//         newDp[target] = true;
//       }
//     }
//     dp = newDp; // Update dp to the new state
//   }

//   // Find the minimum absolute difference
//   let mini = Infinity;
//   for (let i = 0; i <= totSum / 2; i++) {
//     if (dp[i]) {
//       const diff = Math.abs(i - (totSum - i));
//       mini = Math.min(mini, diff);
//     }
//   }
//   return mini;
// }

// // Main function
// const arr = [3, 9, 7, 3];
// console.log(
//   "The minimum absolute difference is: " + minSubsetSumDifference(arr)
// );
