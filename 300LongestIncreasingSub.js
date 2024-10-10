// function lengthOfLCS(nums) {
//   let n = nums.length;
//   function helper(ind, prev_Ind) {
//     if (ind === n) {
//       return 0;
//     }
//     // NaN error comes when we dont initialzed the variables by 0 like directly deiclare them (let take )
//     let take = 0,
//       notTake = 0;
//     notTake = 0 + helper(ind + 1, prev_Ind); //Not-Take
//     if (prev_Ind === -1 || nums[ind] > nums[prev_Ind]) {
//       take = 1 + helper(ind + 1, ind);
//     }
//     return Math.max(take, notTake);
//   }
//   return helper(0, -1);
// }
// let nums = [10, 9, 2, 5, 3, 7, 101, 18];
// console.log(lengthOfLCS(nums));


//----------------Memoization------------------//
// function lengthOfLCS(nums) {
//     let n = nums.length;
//     let dp = new Array(n+1).fill().map(()=>new Array(n+1).fill(-1))
//     function helper(ind, prev_Ind) {
//       if (ind === n) {
//         return 0;
//       }
//       if(dp[ind][prev_Ind+1]!==-1) return dp[ind][prev_Ind+1]
//       // NaN error comes when we dont initialzed the variables by 0 like directly deiclare them (let take )
//       let take = 0,
//         notTake = 0;
//       notTake = 0 + helper(ind + 1, prev_Ind); //Not-Take
//       if (prev_Ind === -1 || nums[ind] > nums[prev_Ind]) {
//         take = 1 + helper(ind + 1, ind); // we use the ind becasuse we count the length by doing +1
//       }
//     return  dp[ind][prev_Ind+1] = Math.max(take, notTake);
//     }
//     return helper(0, -1 , dp);
//   }
//   let nums = [10, 9, 2, 5, 3, 7, 101, 18];
//   console.log(lengthOfLCS(nums));

 //------------------Tabulation------------------//
// function lengthOfLCS(nums){
//     const n = nums.length;
//     const dp = Array.from({length:n+1},()=>Array(n+1).fill(0));;
//     // Iterate over the indices in reverse order
//     // recursion me index ko 0 se start kar rhe the yha pe hum usko n-1 se start krenge
//     for(let ind = n-1 ; ind>=0 ; ind-- ){
//         // prev_ind yha pe ind-1 se start hoga m, because we have to track of the prevind by just its prev 
//         for(let prev_Ind = ind-1 ; prev_Ind>=-1 ; prev_Ind--){
//                // Option 1: Don't take the current element
//             let notTake = 0  + dp[ind + 1][prev_Ind+1]; // we do the +1 because we shifted the index by the +1 (read the comment)
//             //-Option -2 Take the current element if valid
//             let take = 0 ;
//             if(prev_Ind === -1 || nums[ind]>nums[prev_Ind]){
//                 take = 1 + dp[ind+1][ind+1]
//             }
//            // store in dp 
//            dp[ind][prev_Ind+1] = Math.max(notTake , take)
//         }
//     }
//     return dp[0][0] // because of the 0 based indexing we done this so insted of taking helper(0,-1 ) we return the dp[0][0] insted -1
// }
// let nums = [10, 9, 2, 5, 3, 7, 101, 18];
// console.log("The length of the longest increasing subsequence is " + lengthOfLCS(nums));

//---------------------spcae-optimziation---------------//
// function lengthOfLCS(arr) {
//     let n = arr.length;
//     // Create two arrays `next` and `cur` initialized to 0
//     let next = new Array(n + 1).fill(0);
//     let cur = new Array(n + 1).fill(0);

//     // Iterate over the indices in reverse order
//     for (let ind = n - 1; ind >= 0; ind--) {
//         for (let prev_index = ind - 1; prev_index >= -1; prev_index--) {
//             // Option 1: Don't take the current element
//             let notTake = 0 + next[prev_index + 1];

//             // Option 2: Take the current element if valid
//             let take = 0;
//             if (prev_index === -1 || arr[ind] > arr[prev_index]) {
//                 take = 1 + next[ind + 1];
//             }

//             // Store the maximum of taking or not taking the element
//             cur[prev_index + 1] = Math.max(notTake, take);
//         }

//         // Update `next` to be `cur` for the next iteration
//         next = [...cur];  // Make a copy of `cur` for the next iteration
//     }

//     // The answer is stored in cur[0]
//     return cur[0];
// }

// // Example usage
// let arr = [10, 9, 2, 5, 3, 7, 101, 18];
// console.log("The length of the longest increasing subsequence is " + lengthOfLCS(arr));

//------------------------By looping --------------------//
function lengthOfLCS(arr) {
    let n = arr.length;

    // Create a DP array initialized with 1 (as each element is at least a subsequence of length 1)
    let dp = new Array(n).fill(1);

    // Compute the LIS values in a bottom-up manner
    for (let i = 0; i < n; i++) {
        for (let prev_index = 0; prev_index < i; prev_index++) {
            // If arr[prev_index] is less than arr[i], we can extend the subsequence
            if (arr[prev_index] < arr[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[prev_index]); // we +1 in the dp 
            }
        }
    }

    // Find the maximum value in dp array, which will be the length of the LIS
    let ans = Math.max(...dp);

    return ans;
}

// Example usage
let arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log("The length of the longest increasing subsequence is " + lengthOfLCS(arr));
