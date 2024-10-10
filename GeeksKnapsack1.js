//----------- recursive appraoch-----------//
// function knapsackRecursion(index, bagW, weights, values) {
//   if (index === 0) {
//     if (weights[0] <= bagW) return values[0];
//     else return 0;
//   }

//   const notTake = knapsackRecursion(index - 1, bagW, weights, values);
//   let take = -Infinity;
//   if (weights[index] <= bagW) {
   
//     take =values[index] +
//       knapsackRecursion(index - 1, bagW - weights[index], weights, values);
//   }
//   return Math.max(take, notTake);
// }
// const weights = [3, 4, 5];
// const values = [30, 50, 60];
// const W = 8;
// const n = weights.length;

// console.log(knapsackRecursion(n - 1, W, weights, values));


//--------------------Memoization-----------------//
// function knapsackMemoization(index, bagW, weights, values , dp) {
//   if (index === 0) {
//     if (weights[0] <= bagW) return values[0];
//     else return 0;
//   }
//  if(dp[index][bagW]!==-1) return dp[index][bagW]
//   const notTake = knapsackMemoization(index - 1, bagW, weights, values,dp);
//   let take = -Infinity;
//   if (weights[index] <= bagW) {
   
//     take =values[index] +
//     knapsackMemoization(index - 1, bagW - weights[index], weights, values,dp);
//   }
//   return dp[index][bagW]= Math.max(take, notTake);
// }
// const weights = [3, 4, 5];
// const values = [30, 50, 60];
// const W = 8;
// const n = weights.length;
// let dp = Array(n).fill().map(()=>Array(W+1).fill(-1))
// console.log(knapsackMemoization(n - 1, W, weights, values , dp));

//---------------------Tabulation---------------//
// function knapsackTabulation(bagW , weights , values){
//   const n = weights.length;
//   const dp = Array(n).fill().map(() => Array(bagW + 1).fill(0));
//   // initilaize the base case 
//   for(let w = weights[0]; w<=bagW;w++){
//     // changing perameter is w , not the index beccause according to the above condtion when index is 0 then we retrun value ,so we store the at dp[0]
//     // jese uper hum value[0] ko return kar rhe he yha pe usko store krwa lo ,vo hi 0th index pe
//     dp[0][w] = values[0] // we store the values[0] in the dp and by adding them we move forward
//   }
//   for(let i =1 ; i<n ; i++){
//     for(let w = 0 ; w<=bagW ;w++){
//       const notTake = dp[i-1][w];
//       let take = -Infinity;
//       if(weights[i]<=w){
//         take = values[i]+dp[i-1][w-weights[i]]
//       }
//       dp[i][w] = Math.max(notTake,take)
//     }
//   }
//   return dp[n-1][bagW]
// }
// const weights = [3, 4, 5];
// const values = [30, 50, 60];
// const W = 8;

// console.log(knapsackTabulation(W, weights, values));

//----------------Space-Optimization-----------------//
function knapsackSpaceOptimized(W, weights, values) {
  const n = weights.length;
  const dp = Array(W + 1).fill(0);

  // Initialize base case
  for (let w = weights[0]; w <= W; w++) {
      dp[w] = values[0];
  }

  for (let i = 1; i < n; i++) {
      for (let w = W; w >= 0; w--) {
          let take = -Infinity;
          if (weights[i] <= w) {
              take = values[i] + dp[w - weights[i]];
          }
          dp[w] = Math.max(dp[w], take);
      }
  }

  return dp[W];
}

// Usage
const weights4 = [3, 4, 5];
const values4 = [30, 50, 60];
const W4 = 8;

console.log(knapsackSpaceOptimized(W4, weights4, values4));
