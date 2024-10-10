/**
 * Exclude the first house and include the last house.
Exclude the last house and include the first house.
 */

//----------------Recursion -----------------//
// var rob = function(arr) {
//     const n = arr.length;

//     // Helper function to calculate the maximum sum of non-adjacent elements
//     function sumOfNonAdjacent(ind, arr) {
//         // base case
//         if (ind === 0) return arr[0];
//         if (ind < 0) return 0;
//         // Calculate the maximum value by either picking or not picking the current element
//         const pick = arr[ind] + sumOfNonAdjacent(ind - 2, arr);
//         const nonPick = 0 + sumOfNonAdjacent(ind - 1, arr);
//         return Math.max(pick, nonPick);
//     }

//     // Edge case: if there's only one house
//     if (n === 1) return arr[0];

//     // Case 1: Exclude the last house
//     ///NOTE - Calling the fucntions or => link -> https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_slice_array
//     const excludeLast = sumOfNonAdjacent(n - 2, arr.slice(0, n - 1)); // arr.slice(start ,end) m start or end k beach wale eleemts bach jaynge
//     // Case 2: Exclude the first house
//     const excludeFirst = sumOfNonAdjacent(n - 2, arr.slice(1)); 

//     // Return the maximum of the two cases
//     return Math.max(excludeLast, excludeFirst);
// };

// let arr = [1, 2, 3, 1];
// console.log(rob(arr));  // Output: 4


//----------------Memorization -----------------//

// var rob = function(arr) {
//     const n = arr.length;
//     let dp = new Array(n).fill(-1)
//     // Helper function to calculate the maximum sum of non-adjacent elements
//     function sumOfNonAdjacent(ind, arr) {
//         // base case
//         if (ind === 0) return arr[0];
//         if (ind < 0) return 0;
//         if(dp[ind]!==-1) return dp[ind]
//         // Calculate the maximum value by either picking or not picking the current element
//         const pick = arr[ind] + sumOfNonAdjacent(ind - 2, arr);
//         const nonPick = 0 + sumOfNonAdjacent(ind - 1, arr);
//         dp[ind] =  Math.max(pick, nonPick);
//         return dp[ind]
//     }

//     // Edge case: if there's only one house
//     if (n === 1) return arr[0];

//     // Case 1: Exclude the last house
//     ///NOTE - Calling the fucntions or => link -> https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_slice_array
//     const excludeLast = sumOfNonAdjacent(n - 2, arr.slice(0, n - 1)); // arr.slice(start ,end) m start or end k beach wale eleemts bach jaynge
//     // Case 2: Exclude the first house
//     const excludeFirst = sumOfNonAdjacent(n - 2, arr.slice(1)); 

//     // Return the maximum of the two cases
//     return Math.max(excludeLast, excludeFirst);
// };

// let arr = [1, 2, 3, 1];
// console.log(rob(arr));  // Output: 4

//---------------------tabulation ----------------//
// var rob = function (arr) {
//     const n = arr.length;

//     // Helper function to calculate the maximum sum of non-adjacent elements
//     function sumOfNonAdjacent(arr) {
//         const m = arr.length;
//         let dp = new Array(m).fill(0); // Reset dp array for each call
//         dp[0] = arr[0];
//         for (let i = 1; i < m; i++) {
//             let pick = arr[i];
//             if (i > 1) { // it is check for the out of bounds state , like  i = 1, i-2 would be -1, which is out of bounds for the dp array. Accessing dp[-1] 
//                 pick += dp[i - 2];
//             }
//             // same time the dp[i-1] is also run , 
//             const nonPick = dp[i - 1] + 0;
//             dp[i] = Math.max(pick, nonPick);
//         }
//         return dp[m - 1];
//     }

//     // Edge case: if there's only one house
//     if (n === 1) return arr[0];

//     // Case 1: Exclude the last house
//     const excludeLast = sumOfNonAdjacent(arr.slice(0, n - 1));
//     // Case 2: Exclude the first house
//     const excludeFirst = sumOfNonAdjacent(arr.slice(1));

//     // Return the maximum of the two cases
//     return Math.max(excludeLast, excludeFirst);
// };

// let arr = [1, 2, 3, 1];
// console.log(rob(arr));  // Output: 4

/**
Input Array: [1, 2, 3, 1]
Length (n): 4
Step-by-Step Execution:
First if condition (if (n === 1) return arr[0];):

Check: 4 === 1 (This condition is false)
Action: Skip this block.
Case 1: Exclude the Last House (sumOfNonAdjacent(arr.slice(0, 3))):

Sliced Array: [1, 2, 3]
Length of Sliced Array (m): 3
Inside sumOfNonAdjacent([1, 2, 3]):

Initial dp Array: [0, 0, 0]
Set dp[0] = arr[0]; → dp[0] = 1
dp Array: [1, 0, 0]
Loop Iterations:

Iteration 1 (i = 1):
Pick: arr[1] = 2
Check if (i > 1): 1 > 1 is false, so skip adding dp[i-2].
Non-Pick: dp[i-1] = 1
Update dp[1]: dp[1] = Math.max(2, 1) = 2
dp Array: [1, 2, 0]
Iteration 2 (i = 2):
Pick: arr[2] = 3
Check if (i > 1): 2 > 1 is true, so add dp[i-2]: 3 + dp[0] = 3 + 1 = 4
Non-Pick: dp[i-1] = 2
Update dp[2]: dp[2] = Math.max(4, 2) = 4
dp Array: [1, 2, 4]
Return Value: dp[m-1] = dp[2] = 4
Result of Case 1 (excludeLast): 4
Case 2: Exclude the First House (sumOfNonAdjacent(arr.slice(1))):

Sliced Array: [2, 3, 1]
Length of Sliced Array (m): 3
Inside sumOfNonAdjacent([2, 3, 1]):

Initial dp Array: [0, 0, 0]
Set dp[0] = arr[0]; → dp[0] = 2
dp Array: [2, 0, 0]
Loop Iterations:

Iteration 1 (i = 1):
Pick: arr[1] = 3
Check if (i > 1): 1 > 1 is false, so skip adding dp[i-2].
Non-Pick: dp[i-1] = 2
Update dp[1]: dp[1] = Math.max(3, 2) = 3
dp Array: [2, 3, 0]
Iteration 2 (i = 2):
Pick: arr[2] = 1
Check if (i > 1): 2 > 1 is true, so add dp[i-2]: 1 + dp[0] = 1 + 2 = 3
Non-Pick: dp[i-1] = 3
Update dp[2]: dp[2] = Math.max(3, 3) = 3
dp Array: [2, 3, 3]
Return Value: dp[m-1] = dp[2] = 3
Result of Case 2 (excludeFirst): 3
Final Comparison:

Action: Math.max(excludeLast, excludeFirst)
Compare: Math.max(4, 3) = 4
Return Value: 4
 */


//-------------------Space-Optimization-------------//
var rob = function(arr) {
    const n = arr.length;

    function sumOfNonAdjacent(arr) {
        const m = arr.length;
        let prev1 = arr[0];
        let prev2 = Math.max(arr[0], arr[1]);

        // Calculate the maximum value by either picking or not picking the current element
        for (let i = 2; i < m; i++) {
            let pick = arr[i] + prev1;
            let nonPick = prev2;
            let curr_i = Math.max(pick, nonPick);
            prev1 = prev2;
            prev2 = curr_i;
        }
        return prev2;
    }

    if (n === 1) return arr[0];

    // Case 1: Exclude the last house
    const excludeLast = sumOfNonAdjacent(arr.slice(0, n - 1));

    // Case 2: Exclude the first house
    const excludeFirst = sumOfNonAdjacent(arr.slice(1));

    // Return the maximum of the two cases
    return Math.max(excludeLast, excludeFirst);
}

let arr = [1, 2, 3, 1];
console.log(rob(arr));  // Output: 4
