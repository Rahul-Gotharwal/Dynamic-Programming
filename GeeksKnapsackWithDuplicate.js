//--------------Recursion-----------//
// function unboundedKnapsack(n, bagW, val, wt) {
//   function knapsackUtil(ind, bagW) {
//     if (ind === 0) {
//       return Math.floor((bagW / wt[0]) * val[0]);
//     }
//     let notTaken = 0 + knapsackUtil(ind - 1, bagW);
//     let taken = -Infinity;
//     if (wt[ind] <= bagW) {
//       taken = val[ind] + knapsackUtil(ind, bagW - wt[ind]);
//     }
//     return Math.max(notTaken, taken);
//   }
//   return knapsackUtil(n - 1, bagW);
// }
// const wt = [1,3,4,5];
// const val = [6,1,7,7];
// const bagW = 8;
// const n = wt.length;
// console.log(unboundedKnapsack(n,bagW,val,wt))


// -----------Memoization---------//
// function unboundedKnapsack(n, bagW, val, wt) {
//   const dp = new Array(n+1).fill(0).map(()=>new Array(bagW+1).fill(-1))
//   function knapsackUtil(ind, bagW,dp) {
//     if (ind === 0) {
//       return Math.floor((bagW / wt[0]) * val[0]);
//     }
//     if(dp[n][bagW]!==-1) return dp[n][bagW]
//     let notTaken = 0 + knapsackUtil(ind - 1, bagW,dp);
//     let taken = -Infinity;
//     if (wt[ind] <= bagW) {
//       taken = val[ind] + knapsackUtil(ind, bagW - wt[ind],dp);
//     }
//     dp[n][bagW] =  Math.max(notTaken, taken);
//     return dp[n][bagW]
//   }
//   return knapsackUtil(n - 1, bagW,dp);
// }
// const wt = [1,3,4,5];
// const val = [6,1,7,7];
// const bagW = 8;
// const n = wt.length;
// console.log(unboundedKnapsack(n,bagW,val,wt))

//--------------------Tabulation-----------------------//
// function unboundedKnapsack(n,bagW,val,wt){
//   const dp = Array.from({length:n},()=>Array(bagW+1).fill(0));
//   // store the value that we return in the recursion
//   for(let w = wt[0] ; w<=bagW ; w++){
//     dp[0][w] = Math.floor(w/wt[0])*val[0]
//   }
//   // fill the dp
//   for(let ind = 1 ; ind< n ; ind++){
//     for(let capacity = 0 ; capacity<=bagW;capacity++){
//       const notTaken = dp[ind-1][capacity]
//       let taken = -Infinity;
//       if(wt[ind]<=capacity){
//         taken = val[ind]+dp[ind][capacity-wt[ind]];
//       }
   
//       dp[ind][capacity] = Math.max(taken,notTaken)
//     }
    
//   }
//   return dp[n-1][bagW]
// }
// const wt = [1,3,4,5];
// const val = [6,1,7,7];
// const bagW = 8;
// const n = wt.length;
// console.log(unboundedKnapsack(n,bagW,val,wt))


//--------------------space optimization------------------//

function unboundedKnapsack(n, W, val, wt) {
  // Initialize an array 'cur' to store dynamic programming results, initialized with 0
  const cur = new Array(W + 1).fill(0);

  // Initializing the base condition for the first item in the array
  for (let i = wt[0]; i <= W; i++) {
      cur[i] = Math.floor(i / wt[0]) * val[0];
  }

  // Populating the 'cur' array using nested loops
  for (let ind = 1; ind < n; ind++) {
      for (let cap = 0; cap <= W; cap++) {
          const notTaken = cur[cap];

          let taken = -Infinity;
          if (wt[ind] <= cap)
              taken = val[ind] + cur[cap - wt[ind]];

          cur[cap] = Math.max(notTaken, taken);
      }
  }

  // The result is stored in the last element of the 'cur' array
  return cur[W];
}

// Main function
function main() {
  const wt = [2, 4, 6];
  const val = [5, 11, 13];
  const W = 10;
  const n = wt.length;

  // Call the unboundedKnapsack function and print the result
  console.log("The Maximum value of items the thief can steal is " + unboundedKnapsack(n, W, val, wt));
}

// Call the main function to start the program
main();

