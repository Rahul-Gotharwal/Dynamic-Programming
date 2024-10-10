// //-----------By using the recursion----------------//
// var rob = function(arr){
//     const n = arr.length
//     function sumOfNonAdhacent(ind , arr) {
//         // base case
//         if(ind===0) return arr[0];
//         if(ind<0) return 0;  
//        // Calculate the maximum value by either picking or not picking the current element
//          const pick = arr[ind] + sumOfNonAdhacent(ind-2  , arr );
//          const nonPick = 0 + sumOfNonAdhacent(ind-1 ,arr);
//          return Math.max(pick , nonPick);
//     }
//      return sumOfNonAdhacent(n-1 , arr); 

// }
// let arr = [1,2,3,1];
// console.log(rob(arr))


// --------------by using the Memorizarion----------------//

// var rob = function(arr){
//     const n = arr.length
//     let dp = new Array(n+1).fill(-1)
//     function sumOfNonAdhacent(ind , arr) {
//         // base case
//         if(ind===0) return arr[0];
//         if(ind<0) return 0;  
//         if(dp[ind]!==-1) return dp[ind]
//        // Calculate the maximum value by either picking or not picking the current element
//          const pick = arr[ind] + sumOfNonAdhacent(ind-2  , arr );
//          const nonPick = 0 + sumOfNonAdhacent(ind-1 ,arr);
//          dp[ind] =  Math.max(pick , nonPick);
//          return dp[ind]
//     }
//      return sumOfNonAdhacent(n-1 , arr); 
// }
// let arr = [1,2,3,1];
// console.log(rob(arr))


// //------------------Using the tabulation ---------------//

// var rob = function(arr){
//     const n = arr.length
//     let dp = new Array(n+1)
//     function sumOfNonAdhacent(ind , arr) {
//         dp[0] = arr[0];

//     // Loop through the array to fill the dp array
//     for (let i = 1; i < n; i++) {
//         // Calculate the maximum value when picking the current element
//         let pick = arr[i];
//         if (i > 1) { // out of bound condition like i-2 will be -1 when 1 is i like 1-2 = > -1 ,so we use the precations
         // NOTE - check its dry run in the next question same as it is -> 213
//             pick += dp[i - 2];
//         }
//         // Calculate the maximum value when not picking the current element
//         const nonPick = dp[i - 1] + 0;// i-1 se same element dp me jate rhnege

//         // Store the maximum of pick and nonPick in dp
//         dp[i] = Math.max(pick, nonPick);
//     }

//     // Return the result, which is the last element of dp
//     return dp[n - 1];
//     }
//      return sumOfNonAdhacent(n-1 , arr); 
// }
// let arr = [1,2,3,1];
// console.log(rob(arr))


// //------------------Using the tabulation again ---------------//
// var rob = function(arr){
//     const n = arr.length
//     let dp = new Array(n).fill(0)
//     function sumOfNonAdhacent(ind , arr) {
//         // base case
//         // store the base cases into the dp
//        dp[0] = arr[0]   
//        dp[1] = Math.max(arr[0], arr[1]) // 0 or 1 ka maximum nikal rhe he
//        // Calculate the maximum value by either picking or not picking the current element
//        for(let i =2 ; i< n ; i++){
//         let pick = arr[i] + dp[i-2]
//         let nonPick = dp[i-1] + 0
//         dp[i] = Math.max(pick , nonPick)
//        }
//        console.log(dp[n-1])
//        return dp[n-1]
       
//     }
//      return sumOfNonAdhacent(n-1 , arr); 
// }
// let arr = [1,2,3,1];
// console.log(rob(arr))


//--------------------space optimization----------------//
var rob = function(arr){
    const n = arr.length
    function sumOfNonAdhacent(ind , arr) {
        // base case
        // store the base cases into the dp
       prev1 = arr[0]   
       prev2 = Math.max(arr[0], arr[1]) // 0 or 1 ka maximum nikal rhe he
       // Calculate the maximum value by either picking or not picking the current element
       for(let i =2 ; i< n ; i++){
        let pick = arr[i] + prev1
        let nonPick = prev2
        const curr_i = Math.max(pick , nonPick);
        prev1 = prev2;
        prev2 = curr_i
       }
    return prev2
    }
     return sumOfNonAdhacent(n-1, arr); 
}
let arr = [1,2,3,1];
console.log(rob(arr))
 