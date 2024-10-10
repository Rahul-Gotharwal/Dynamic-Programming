// function countWaysToMakeChangeUtil(arr , ind , T){
//   function helper(ind,T){
//     if (T === 0) return 1; // base case: if total amount is 0, there's 1 way to make change (using no coins)
//     if(ind===0)return (T%arr[0]===0) ?1:0;
//     let notTake = helper(ind-1,T);
//     let take = 0 ;
//     if(arr[ind]<=T){
//       take = helper(ind,T-arr[ind])
//     }
//     return take+notTake
//   }
//  return  helper(ind-1,T)
// }
// let amount = 5, coins = [1,2,5];
// const n = coins.length
// console.log(countWaysToMakeChangeUtil(coins,n,amount))


//------------Memoization----------//
// function countWaysToMakeChangeUtil(arr , ind , T){
//   const dp = Array.from({length:ind},()=> Array(T+1).fill(-1));
//   function helper(ind,T,dp){
//     if (T === 0) return 1; // base case: if total amount is 0, there's 1 way to make change (using no coins)
//     if(ind===0)return (T%arr[0]===0) ?1:0;
//     if(dp[ind][T]!==-1)return dp[ind][T];
//     let notTake = helper(ind-1,T,dp);
//     let take = 0 ;
//     if(arr[ind]<=T){
//       take = helper(ind,T-arr[ind],dp)
//     }
//     dp[ind][T] = take+notTake;
//     return dp[ind][T]
//   }
//  return  helper(ind-1,T,dp)
// }
// let amount = 5, coins = [1,2,5];
// const n = coins.length
// console.log(countWaysToMakeChangeUtil(coins,n,amount))

//-----------------Tabulation-----------------//
function countWaysToMakeChangeUtil(arr, n , T){
const dp  = new Array(n).fill(0).map(()=>new Array(T+1).fill(0));
// Initializing the base condition for the first coin in the array
// for the given index target can be anything , and for that we returning the condtion (T%arr[0]===0) ,but here we store it 
// index is the constant and changing perameter is the targert
// jisko return kar rhe he usko store karwa lo(thumb rule of tabulation)or can say accoring to the condition, or change kya ho rha he mtlb tarh=ert humara change ho rha he according to the index
for(let t = 0 ; t<=T ; t++){
if(t%arr[0]===0) 
  dp[0][t] = 1  
}
for(let ind = 1 ; ind<n ; ind++){
  for(let targert = 0 ; targert<=T ; targert++){
    const notTake = dp[ind-1][targert];;
    let take = 0 ;
    if(arr[ind]<=targert){
      take = dp[ind][targert-arr[ind]];
    }
    dp[ind][targert] = notTake+take
  }
}
return dp[n - 1][T];
}
let amount = 5, coins = [1,2,5];
const n = coins.length
console.log(countWaysToMakeChangeUtil(coins,n,amount))
//-------------------Leetcode Test pass code tabuaktion ---------------//
var change = function(amount, coins) {
  const n = coins.length;
  
  // Initialize dp array where dp[i][j] represents the number of ways to make amount j using the first i+1 coins
  const dp = Array.from({ length: n }, () => new Array(amount + 1).fill(0));
  
  // Base case: for each coin, the number of ways to make amount 0 is 1 (by taking no coins)
  for (let i = 0; i < n; i++) {
      dp[i][0] = 1;
  }
  
  // Fill the dp table
  for (let i = 0; i < n; i++) {
      for (let j = 1; j <= amount; j++) {
          // Option 1: Not taking the current coin
          const notTake = i > 0 ? dp[i - 1][j] : 0;
          
          // Option 2: Taking the current coin (if it can contribute to the amount)
          const take = (j >= coins[i]) ? dp[i][j - coins[i]] : 0;
          
          dp[i][j] = notTake + take;
      }
  }
  
  return dp[n - 1][amount];
};

// Test cases
console.log(change(5, [1, 2, 5]));  // Output: 4
console.log(change(3, [2]));        // Output: 0
console.log(change(10, [10]));      // Output: 1


//------------------Space -optimizatoin--------------//

// function countWaysToMakeChange(arr, n, T) {
//   // Initialize an array 'prev' to store dynamic programming results, initialized with 0
//   let prev = new Array(T + 1).fill(0);
  
//   // Initializing the base condition for the first coin in the array
//   for (let i = 0; i <= T; i++) {
//       if (i % arr[0] === 0)
//           prev[i] = 1;
//       // Else condition is automatically fulfilled,
//       // as 'prev' array is initialized to zero
//   }
  
//   // Populating the 'cur' array using nested loops
//   for (let ind = 1; ind < n; ind++) {
//       // Initialize an array 'cur' for the current iteration
//       let cur = new Array(T + 1).fill(0);
//       for (let target = 0; target <= T; target++) {
//           const notTaken = prev[target];
          
//           let taken = 0;
//           if (arr[ind] <= target)
//               taken = cur[target - arr[ind]];
              
//           cur[target] = notTaken + taken;
//       }
//       // Update 'prev' to be the same as 'cur' for the next iteration
//       prev = [...cur];
//   }
  
//   // The result is stored in the last element of the 'prev' array
//   return prev[T];
// }

// // Main function
// function main() {
//   const arr = [1, 2, 3];
//   const target = 4;
//   const n = arr.length;

//   // Call the countWaysToMakeChange function and print the result
//   console.log("The total number of ways is " + countWaysToMakeChange(arr, n, target));
// }

// // Call the main function to start the program
// main();

//-----------ChatGpt code --------------//
// var change = function(amount, coins) {
//   const n = coins.length;
  
//   // Initialize dp array where dp[i] represents the number of ways to make amount i
//   const dp = new Array(amount + 1).fill(0);
  
//   // Base case: There is 1 way to make the amount 0 (by taking no coins)
//   dp[0] = 1;
  
//   // Iterate through each coin
//   for (let i = 0; i < n; i++) {
//       // For each coin, update the dp array for all amounts from the coin value to the target amount
//       for (let t = coins[i]; t <= amount; t++) {
//           dp[t] += dp[t - coins[i]];
//       }
//   }
  
//   return dp[amount];
// };

// // Test cases
// console.log(change(5, [1, 2, 5]));  // Output: 4
// console.log(change(3, [2]));        // Output: 0
// console.log(change(10, [10]));      // Output: 1
