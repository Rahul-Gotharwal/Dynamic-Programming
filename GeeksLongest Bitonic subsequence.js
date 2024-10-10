
// //--------------this code is not pass the test cases because Strictly increasing and strictly decreasing subsequences:--------//
// // in this example [10,20,30 ] it give us the 3 , but it should be 0 , because it is only increasing
// function longestBitonicSequence(arr) {
//     let n = arr.length;

//     // Initialize two arrays to store the increasing and decreasing subsequences
//     let dp1 = new Array(n).fill(1); // dp1[i] stores the length of the longest increasing subsequence ending at arr[i]
//     let dp2 = new Array(n).fill(1); // dp2[i] stores the length of the longest decreasing subsequence starting at arr[i]

//     // Calculate the longest increasing subsequence
//     for (let i = 1; i < n; i++) {
//         for (let prev_index = 0; prev_index < i; prev_index++) {
//             if (arr[prev_index] < arr[i]) {
//                 dp1[i] = Math.max(dp1[i], 1 + dp1[prev_index]);
//             }
//         }
//     }
//      //console.log(dp1)
//     // Reverse the direction of nested loops to calculate the longest decreasing subsequence
//     for (let i = n - 1; i >= 0; i--) {
//         for (let prev_index = n - 1; prev_index > i; prev_index--) {
//             if (arr[prev_index] < arr[i]) {
//                 dp2[i] = Math.max(dp2[i], 1 + dp2[prev_index]);
                
//             }
//         }
//     }
//    // console.log(dp2)

//     // Find the maximum length of the bitonic subsequence
//     let maxi = -1;
//     for (let i = 0; i < n; i++) {
//         maxi = Math.max(maxi, dp1[i] + dp2[i] - 1);
//     }

//     return maxi;
// }

// // Example usage
// let arr = [1, 11, 2, 10, 4, 5, 2, 1];
// console.log("The length of the longest bitonic subsequence is " + longestBitonicSequence(arr));


//-------------------Correct Code ---------------------//
function longestBitonicSequence(arr) {
    let n = arr.length;
    // Edge case: If array length is less than 3, no bitonic subsequence can exist
    if (n < 3) return 0;
    // Initialize two arrays to store the increasing and decreasing subsequences
    let dp1 = new Array(n).fill(1); // dp1[i] stores the length of the longest strictly increasing subsequence ending at arr[i]
    let dp2 = new Array(n).fill(1); // dp2[i] stores the length of the longest strictly decreasing subsequence starting at arr[i]

    // Calculate the longest strictly increasing subsequence
    for (let i = 1; i < n; i++) {
        for (let prev_index = 0; prev_index < i; prev_index++) {
            if (arr[prev_index] < arr[i]) { // Ensure strictly increasing
                dp1[i] = Math.max(dp1[i], 1 + dp1[prev_index]);
            }
        }
    }

    // Calculate the longest strictly decreasing subsequence
    for (let i = n - 1; i >= 0; i--) {
        for (let prev_index = n - 1; prev_index > i; prev_index--) {
            if (arr[prev_index] < arr[i]) { // Ensure strictly decreasing
                dp2[i] = Math.max(dp2[i], 1 + dp2[prev_index]);
            }
        }
    }

    // Find the maximum length of the bitonic subsequence
    let maxi = 0;
    for (let i = 0; i < n; i++) {
        // check copy for why we use the >1 here
        if (dp1[i] > 1 && dp2[i] > 1) { // We need both an increasing and a decreasing part
            maxi = Math.max(maxi, dp1[i] + dp2[i] - 1);
        }
    }

    // Return 0 if no valid bitonic subsequence is found
    return maxi > 1 ? maxi : 0;
}

// Example usage with the test cases:
let arr2 = [1, 11, 2, 10, 4, 5, 2, 1];
console.log("The length of the longest bitonic subsequence is " + longestBitonicSequence(arr2)); // Output: 6

// let arr1 = [1, 2, 5, 3, 2];
// console.log("The length of the longest bitonic subsequence is " + longestBitonicSequence(arr1)); // Output: 5
// let arr3 = [10, 20, 30];
// console.log("The length of the longest bitonic subsequence is " + longestBitonicSequence(arr3)); // Output: 0

// let arr4 = [10, 10, 10];
// console.log("The length of the longest bitonic subsequence is " + longestBitonicSequence(arr4)); // Output: 0

/**
 * For the array `[10, 20, 30]`, the `dp1` array, which tracks the **strictly increasing** subsequences, would indeed be `[1, 2, 3]` because:

- `dp1[0] = 1`: The subsequence is just `[10]`, so the length is `1`.
- `dp1[1] = 2`: The subsequence is `[10, 20]`, so the length is `2`.
- `dp1[2] = 3`: The subsequence is `[10, 20, 30]`, so the length is `3`.

However, there is **no strictly decreasing subsequence** in this array. Hence, the `dp2` array (which tracks the longest **strictly decreasing** subsequences starting from each element) would be `[1, 1, 1]`.

### Summary:

- `dp1 = [1, 2, 3]` (because the array is strictly increasing).
- `dp2 = [1, 1, 1]` (because there is no decreasing subsequence).

### Why the output should be `0`:

In a valid **bitonic subsequence**, we need both a strictly increasing and a strictly decreasing part. Since there's no decreasing part in this array (`dp2` contains all 1s), there is **no valid bitonic subsequence**, and the correct output should be `0`. This is why the condition in the code checks that both `dp1[i] > 1` and `dp2[i] > 1` are required to form a valid bitonic sequence.

Thus, for the array `[10, 20, 30]`, even though `dp1` is `[1, 2, 3]`, the output will be `0` because no bitonic sequence exists (as there's no decreasing part).
 */