//---------Tabulation--------------//
// why this is working because it return the longest palindrome and according to the logic we need to keep  the longest palindorme as intact , so it will help us to find it

function lcs(s1, s2) {
    // Get the lengths of the input strings
    const n = s1.length;
    const m = s2.length;

    // Create a 2D array to store the dynamic programming values
    const dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(-1));

    // Initialize the first row and first column with 0
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 0;
    }
    for (let i = 0; i <= m; i++) {
        dp[0][i] = 0;
    }

    // Fill the dp array using dynamic programming
    for (let ind1 = 1; ind1 <= n; ind1++) {
        for (let ind2 = 1; ind2 <= m; ind2++) {
            if (s1[ind1 - 1] === s2[ind2 - 1]) {
                dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
            } else {
                dp[ind1][ind2] = Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
            }
        }
    }

    // Return the length of the LCS
    return dp[n][m];
}
const s1 = "bbabcbcab"
function longestPalindromeSub(s1){
    const s2 = s1.split("").reverse().join('');
    return lcs(s1,s2)
}

function minInsertion(s){
    const n = s.length;
    const k = longestPalindromeSub(s);
    return n-k

}
const s = "abcaa";

// Call the minInsertion function and print the result
console.log("The Minimum insertions required to make the string palindrome: " + minInsertion(s));


//------------------space-optimization--------------//

function lcs(s1, s2) {
    // Get the lengths of the input strings
    const n = s1.length;
    const m = s2.length;

    // Create two arrays, prev and cur, to store dynamic programming values
    let prev = new Array(m + 1).fill(0);
    let cur = new Array(m + 1).fill(0);

    // Base case is covered as we have initialized prev and cur to 0.

    // Fill the cur array using dynamic programming
    for (let ind1 = 1; ind1 <= n; ind1++) {
        for (let ind2 = 1; ind2 <= m; ind2++) {
            if (s1[ind1 - 1] === s2[ind2 - 1]) {
                cur[ind2] = 1 + prev[ind2 - 1];
            } else {
                cur[ind2] = Math.max(prev[ind2], cur[ind2 - 1]);
            }
        }
        // Update prev array with the values from cur for the next iteration
        prev = [...cur];
    }

    return prev[m];
}

// Function to find the length of the Longest Palindromic Subsequence of a string
function longestPalindromeSubsequence(s) {
    // Create a copy of the input string and reverse it
    const t = s.split('').reverse().join('');

    // Find the LCS between the original and reversed strings
    return lcs(s, t);
}

// Function to find the minimum insertions required to make a string palindrome
function minInsertion(s) {
    const n = s.length;
    const k = longestPalindromeSubsequence(s);

    // The minimum insertions required is equal to the length of the string minus the length of its Longest Palindromic Subsequence
    return n - k;
}

// Main function
function main() {
    const s = "abcaa";

    // Call the minInsertion function and print the result
    console.log("The Minimum insertions required to make the string palindrome: " + minInsertion(s));
}

// Call the main function to start the program
main();

