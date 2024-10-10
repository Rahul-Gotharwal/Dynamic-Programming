//------------------Recursion------------//
// function minCoinsRecursive(coins , n , target){
//   function helper(index,target){
//      // Base case: if target is 0, no coins are needed
//     if(target===0) return 0;
//     // Base case: if no coins left or target becomes negative, return a large number (infinity)
//     if(index===0) {
//       return target%coins[0]===0?target/coins[0]:Number.MAX_SAFE_INTEGER
//     } 
//     // dont take the coins then we added coin as 0;
//     let notTake = 0+helper(index-1,target);
//     let take = Number.MAX_SAFE_INTEGER;
//     if(coins[index]<=target){
//       take = 1+helper(index,target-coins[index])
//     }
//     return Math.min(take , notTake)
//   }
//   return helper(n-1 , target);
// }
// let coins = [1,2,5], amount = 11
// const n = coins.length;
// console.log(minCoinsRecursive(coins,n , amount))

//---------------Memoization----------------//
// function minCoinsMemoization(coins, n, target) {
//   let dp = Array(n).fill(null).map(() => Array(target + 1).fill(-1));
  
//   function helper(index, target) {
//       if (target === 0) return 0;
//       if (index === 0) {
//           return target % coins[0] === 0 ? target / coins[0] : Number.MAX_SAFE_INTEGER;
//       }
//       if (dp[index][target] !== -1) return dp[index][target];
      
//       let notTake = helper(index - 1, target);
//       let take = Number.MAX_SAFE_INTEGER;
//       if (coins[index] <= target) {
//           take = 1 + helper(index, target - coins[index]);
//       }
      
//       return dp[index][target] = Math.min(take, notTake);
//   }

//   return helper(n - 1, target);
// }
// let coins = [1,2,5], amount = 11
// const n = coins.length;
// console.log(minCoinsMemoization(coins,n , amount))

//----------------------Tabulation-----------------//
function minCoinsTabulation(coins, n, target) {
  let dp = Array(n).fill(null).map(() => Array(target + 1).fill(Number.MAX_SAFE_INTEGER));
  //-if target is 0 we need 0 coins 
  // here the index is the changing perameter
  for(let i =0 ; i<n ; i++) dp[i][0] = 0;
  // initiaize for the first coin (coins[0])
  // here the target is the changing perameter
  for(let t=1 ; t<=target ; t++){
    if(t%coins[0]===0) dp[0][t] = t/coins[0]
  }
  for(let i =1 ; i< n ; i++){
    for(t = 1 ; t<=target ; t++){
      let notTake = dp[i - 1][t];
      let take = Number.MAX_SAFE_INTEGER;
      if (coins[i] <= t) {
          take = 1 + dp[i][t - coins[i]];
      }
      dp[i][t] = Math.min(take, notTake);
    }
  }
  return dp[n - 1][target] === Number.MAX_SAFE_INTEGER ? -1 : dp[n - 1][target];
}
let coins = [1,2,5], amount = 11
const n = coins.length;
console.log(minCoinsTabulation(coins,n , amount))

//-------------------space -optimization--------------///
function minCoinsSpaceOptimized(coins, n, target) {
  let prev = Array(target + 1).fill(Number.MAX_SAFE_INTEGER);
  prev[0] = 0;

  // Initialize for the first coin
  for (let t = 1; t <= target; t++) {
      if (t % coins[0] === 0) prev[t] = t / coins[0];
  }

  for (let i = 1; i < n; i++) {
      let curr = Array(target + 1).fill(Number.MAX_SAFE_INTEGER);
      curr[0] = 0;
      for (let t = 1; t <= target; t++) {
          let notTake = prev[t];
          let take = Number.MAX_SAFE_INTEGER;
          if (coins[i] <= t) {
              take = 1 + curr[t - coins[i]];
          }
          curr[t] = Math.min(take, notTake);
      }
      prev = curr;  // Move to the next state
  }

  return prev[target] === Number.MAX_SAFE_INTEGER ? -1 : prev[target];
}
