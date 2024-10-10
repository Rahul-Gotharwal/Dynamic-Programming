// //--------------Recursive apparach---------------//
// function maxSumAfterPartitioning(arr, k) {
//   const n = arr.length;
//   function helper(ind) {
//     if (ind === n) return 0;
//     let len = 0;
//     let maxi = -Infinity;
//     let maxAns = -Infinity;
//     // j humara bdhega to +1 k according hi ,when condtion is false , because we do the J++
//     for (let j = ind; j < Math.min(ind + k, n); j++) {
//       len++;
//       maxi = Math.max(maxi, arr[j]);
//       // // Calculate the sum for the current partition and recursive call
//       const sum = len * maxi + helper(j + 1);
//       maxAns = Math.max(maxAns, sum);
//     }
//     return maxAns;
//   }
//   return helper(0);
// }

// const num = [1, 15, 7, 9, 2, 5, 10];
// const k = 3;
// const maxSum = maxSumAfterPartitioning(num, k);
// console.log("The maximum sum is:", maxSum);

//----------------Memoization---------------//
// function maxSumAfterPartitioning(arr, k) {
//     const n = arr.length;
//     const dp = new Array(n+1).fill(-1)
//     function helper(ind) {
//       if (ind === n) return 0;
//       if(dp[ind]!==-1) return dp[ind]
//       let len = 0;
//       let maxi = -Infinity;
//       let maxAns = -Infinity;

//       // j humara bdhega to +1 k according hi ,when condtion is false , because we do the J++
//       for (let j = ind; j < Math.min(ind + k, n); j++) {
//         len++;
//         maxi = Math.max(maxi, arr[j]);
//         // // Calculate the sum for the current partition and recursive call
//         const sum = len * maxi + helper(j + 1);
//         maxAns = Math.max(maxAns, sum);
//       }
//      return  dp[ind] =  maxAns;
//     }
//     return helper(0);
//   }
  
//   const num = [1, 15, 7, 9, 2, 5, 10];
//   const k = 3;
//   const maxSum = maxSumAfterPartitioning(num, k);
//   console.log("The maximum sum is:", maxSum);


//------------------Tabulation---------------//
function maxSumAfterPartitioning(arr , k ){
    const n = arr.length;
    const dp = new Array(n+1).fill(0);
    for(let ind = n-1 ; ind>=0 ; ind--){
        let len = 0;
        let maxi = -Infinity;
        let maxAns = -Infinity;
        for (let j = ind; j < Math.min(ind + k, n); j++) {
         len++;
         maxi = Math.max(maxi , arr[j]);
         const sum = len*maxi + dp[j+1];
         maxAns = Math.max(maxAns , sum)

        }
        dp[ind] = maxAns
    }
  return dp[0]
}
const num = [1, 15, 7, 9, 2, 5, 10];
const k = 3;
const maxSum = maxSumAfterPartitioning(num, k);
console.log("The maximum sum is:", maxSum);