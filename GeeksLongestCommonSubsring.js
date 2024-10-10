//-----------------Recursion-----------------//

function lcsRecursive(s1, s2) {
    const n = s1.length;
    const m = s2.length;
    let ans = 0; // This will store the maximum length of the common substring

    function helper(ind1, ind2, count) {
        if (ind1 < 0 || ind2 < 0) {
            return count; // Return the current count (substring length)
        }

        // If characters match, increment the count and move both indices
        if (s1[ind1] === s2[ind2]) {
            count = helper(ind1 - 1, ind2 - 1, count + 1);
            ans = Math.max(ans, count); // Update the max answer
        }

        // Continue searching for other substrings starting from different points without resetting count
        helper(ind1 - 1, ind2, 0);
        helper(ind1, ind2 - 1, 0);

        return count;
    }

    helper(n - 1, m - 1, 0);

    // 'ans' will contain the length of the longest common substring
    return ans;
}

const s1 = "abcjklp";
const s2 = "acjkp";

console.log("The Length of Longest Common Substring is " + lcsRecursive(s1, s2));

//----------------tabulation----------------//
// function lcs(s1,s2){
//     const n = s1.length;
//     const m = s2.length;

//     // Create a 2D array 'dp' to store dynamic programming results, initialized with 0
//     const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
//     let ans = 0 ;
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= m; j++) {
//             // If the characters match, update 'dp' and 'ans'
//             if (s1[i - 1] === s2[j - 1]) {
//                 const val = 1 + dp[i - 1][j - 1];
//                 dp[i][j] = val;
//                 // we  update the ans and taking the ans varaible because the ans can be stored in the mid of the dp , so the ans is can store the max of all of theese prepperty an we just return ans insted of last of tabulation stored value like dp[n][m]
//                 ans = Math.max(ans, val); 
//             } else {
//                 // If characters don't match, set 'dp' to 0 for the current position
//                 dp[i][j] = 0;
//             }
//         }
//     }

//     // 'ans' now contains the length of the longest common substring
//     return ans;
// }

// const s1 = "abcjklp";
// const s2 = "acjkp";

// // Call the lcs function and print the result
// console.log("The Length of Longest Common Substring is " + lcs(s1, s2));

//------------------space -optimization----------------//

function lcs(s1, s2) {
    const n = s1.length;
    const m = s2.length;

    // Initialize arrays 'prev' and 'cur' to store dynamic programming results, both initialized with 0
    const prev = new Array(m + 1).fill(0);
    const cur = new Array(m + 1).fill(0);

    // Initialize a variable 'ans' to store the length of the longest common substring
    let ans = 0;

    // Use nested loops to iterate through the characters of both strings
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            // If the characters match, update 'cur' and 'ans'
            if (s1[i - 1] === s2[j - 1]) {
                const val = 1 + prev[j - 1];
                cur[j] = val;
                ans = Math.max(ans, val);
            } else {
                // If characters don't match, set 'cur' to 0 for the current position
                cur[j] = 0;
            }
        }
        // Update 'prev' with the values of 'cur' for the next iteration
        prev.splice(0, m + 1, ...cur);
    }

    // 'ans' now contains the length of the longest common substring
    return ans;
}

// Main function
function main() {
    const s1 = "abcjklp";
    const s2 = "acjkp";

    // Call the lcs function and print the result
    console.log("The Length of Longest Common Substring is " + lcs(s1, s2));
}

// Call the main function to start the program
main();

