// function lcs(s1 , s2){
//     let n = s1.length;
//     let m = s2.length;

//     // create a 2d array;
//  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
//     for(let ind1 = 1 ; ind1<=n ; ind1++){
//         for(let ind2 = 1 ;ind2<= m ; ind2++){
//             if(s1[ind1-1] === s2[ind2-1]){
//                 dp[ind1][ind2] = 1 + dp[ind1-1][ind2-1];

//             }else{
//                 dp[ind1][ind2] = Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
//             }
//         }
//     }
//     let len = dp[n][m];
//     //console.log(len)
//     let i = n , j =m ;
//     let str = new Array(len).fill("$");
//     while(i>0 && j>0){
//         if(s1[i-1]===s2[j-1]){
//             str[len-1] = s1[i-1]; // this s1[i-1] , here the i is difrent from above i becasue we initilaize it with the i = n again , so it si not same as above
//             len--
//             i--;
//             j--
//         }else if(dp[i-1][j]>dp[i][j-1]){
//             i--
//         }
//         else{
//             j--
//         }
//     }
//     console.log(str.join(""))

// }
// let s1 = "abcde";
// let s2 = "bdgek";

// console.log("The Longest Common Subsequence is: ");
// lcs(s1, s2);

//---------------------strive explaiend problme is diffrent form geeks a some cases----------//
/**
 * The issue in your code arises because the current implementation only finds one of the longest common subsequences, but the problem expects all longest common subsequences.

Problem Breakdown:
Current Code Limitation: The current code performs a single backtracking pass and constructs only one LCS, but multiple subsequences of the same length can exist.

Expected Output: The problem expects all LCS variations, not just one. For example, for the input "abaaa" and "baabaca", the expected output includes sequences like "aaaa", "abaa", "baaa".

Approach to Solve:
Modify Backtracking to Find All LCS: When performing the backtracking step, you need to explore all possible valid paths. If both characters match (s1[i-1] == s2[j-1]), you add them to all subsequences. But when characters don't match, instead of choosing only one direction (i-1 or j-1), explore both if the values are equal in the dp table.

Use a Set for Unique Subsequences: You can store all the valid subsequences in a Set to avoid duplicates.
Key Changes:
Backtrack Function: The backtrack function is recursive and now explores all possible paths when building subsequences. If two characters match, we take the matching path. If they don't, both possible directions are explored based on the values in the dp table.

Set to Store Subsequences: The use of a Set ensures that duplicate subsequences are eliminated, and all unique LCS are collected.

Sort the Result: The result is sorted lexicographically before returning to match the expected output.

Output:
For input s1 = "abaaa" and s2 = "baabaca", the output will be:

 */

// class Solution {
//     /**
//      * @param {string} s1
//      * @param {string} s2
//      * @returns {string[]}
//      */
//     all_longest_common_subsequences(s1, s2) {
//         let n = s1.length;
//         let m = s2.length;

//         // Create a 2D array for dynamic programming
//         let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

//         // Build the dp array
//         for (let ind1 = 1; ind1 <= n; ind1++) {
//             for (let ind2 = 1; ind2 <= m; ind2++) {
//                 if (s1[ind1 - 1] === s2[ind2 - 1]) {
//                     dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
//                 } else {
//                     dp[ind1][ind2] = Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
//                 }
//             }
//         }

//         // Function to backtrack and find all LCS
//         function backtrack(i, j) {
//             if (i === 0 || j === 0) {
//                 return new Set([""]);
//             }

//             if (s1[i - 1] === s2[j - 1]) {
//                 let smallerSubsequences = backtrack(i - 1, j - 1);
//                 let resultSet = new Set();
//                 for (let seq of smallerSubsequences) {
//                     resultSet.add(seq + s1[i - 1]);
//                 }
//                 return resultSet;
//             } else {
//                 let resultSet = new Set();
//                 if (dp[i - 1][j] === dp[i][j]) {
//                     resultSet = new Set([...resultSet, ...backtrack(i - 1, j)]);
//                 }
//                 if (dp[i][j - 1] === dp[i][j]) {
//                     resultSet = new Set([...resultSet, ...backtrack(i, j - 1)]);
//                 }
//                 return resultSet;
//             }
//         }

//         // Get all LCS by backtracking
//         let allLCS = backtrack(n, m);

//         // Convert the set to an array and return it
//         return Array.from(allLCS).sort(); // Sort the results lexicographically
//     }
// }

// let s1 = "abaaa";
// let s2 = "baabaca";

// let solution = new Solution();
// let result = solution.all_longest_common_subsequences(s1, s2);
// console.log("The Longest Common Subsequences are: ", result);


//-----------------------non-recursicve appraoch -------------/
// class Solution {
//     /**
//      * @param {string} s1
//      * @param {string} s2
//      * @returns {string[]}
//      */
//     all_longest_common_subsequences(s1, s2) {
//         let n = s1.length;
//         let m = s2.length;

//         // Create a 2D array for dynamic programming
//         let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

//         // Build the dp array
//         for (let ind1 = 1; ind1 <= n; ind1++) {
//             for (let ind2 = 1; ind2 <= m; ind2++) {
//                 if (s1[ind1 - 1] === s2[ind2 - 1]) {
//                     dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
//                 } else {
//                     dp[ind1][ind2] = Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
//                 }
//             }
//         }

//         // Iterative backtracking to find all LCS
//         let queue = [{ i: n, j: m, lcs: "" }];
//         let resultSet = new Set();

//         while (queue.length > 0) {
//             let { i, j, lcs } = queue.shift();

//             if (i === 0 || j === 0) {
//                 resultSet.add(lcs.split("").reverse().join(""));
//                 continue;
//             }

//             if (s1[i - 1] === s2[j - 1]) {
//                 queue.push({ i: i - 1, j: j - 1, lcs: lcs + s1[i - 1] });
//             } else {
//                 if (dp[i - 1][j] === dp[i][j]) {
//                     queue.push({ i: i - 1, j: j, lcs: lcs });
//                 }
//                 if (dp[i][j - 1] === dp[i][j]) {
//                     queue.push({ i: i, j: j - 1, lcs: lcs });
//                 }
//             }
//         }

//         // Convert the set to an array and return it
//         return Array.from(resultSet).sort(); // Sort the results lexicographically
//     }
// }

// let s1 = "abaaa";
// let s2 = "baabaca";

// let solution = new Solution();
// let result = solution.all_longest_common_subsequences(s1, s2);
// console.log("The Longest Common Subsequences are: ", result);


//----------------memoization(test case passed)--------------//
class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @returns {string[]}
     */
    all_longest_common_subsequences(s1, s2) {
        let n = s1.length;
        let m = s2.length;

        // Create a 2D array for dynamic programming
        let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

        // Build the dp array
        for (let ind1 = 1; ind1 <= n; ind1++) {
            for (let ind2 = 1; ind2 <= m; ind2++) {
                if (s1[ind1 - 1] === s2[ind2 - 1]) {
                    dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
                } else {
                    dp[ind1][ind2] = Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
                }
            }
        }

        // Memoization map to cache results of intermediate states
        let memo = new Map();

        // DFS function to find all LCS
        function dfs(i, j) {
            // Base case
            if (i === 0 || j === 0) {
                return new Set([""]);
            }

            // Check if result is already in memo
            let key = `${i},${j}`;
            if (memo.has(key)) {
                return memo.get(key);
            }

            let resultSet = new Set();

            if (s1[i - 1] === s2[j - 1]) {
                let smallerSubsequences = dfs(i - 1, j - 1);
                for (let seq of smallerSubsequences) {
                    resultSet.add(seq + s1[i - 1]);
                }
            } else {
                if (dp[i - 1][j] === dp[i][j]) {
                    resultSet = new Set([...resultSet, ...dfs(i - 1, j)]);
                }
                if (dp[i][j - 1] === dp[i][j]) {
                    resultSet = new Set([...resultSet, ...dfs(i, j - 1)]);
                }
            }

            // Cache the result before returning
            memo.set(key, resultSet);
            return resultSet;
        }

        // Get all LCS by calling dfs
        let allLCS = dfs(n, m);

        // Convert the set to an array and return it
        return Array.from(allLCS).sort(); // Sort the results lexicographically
    }
}

let s1 = "abaaa";
let s2 = "baabaca";

let solution = new Solution();
let result = solution.all_longest_common_subsequences(s1, s2);
console.log("The Longest Common Subsequences are: ", result);
