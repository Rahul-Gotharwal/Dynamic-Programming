
// -----------we use the same logic as the lcs (with the same s1 string by revrse of it and convert it into the s2 ,)
// so why the same logic is work because the lcs is give us the longest common subsec. and here we find the same thing when we revrse our string ,so when we going to comapre it according to the lcs code it will give the longest palindrome , because as we know we revrse the given string
//------------------tabulation----------------//
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

console.log("The Length of Longest Palindromic Subsequence is " + longestPalindromeSub(s1));


//------------------space -optimization---------------//

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

    // Return the length of the LCS
    return prev[m];
}

// Function to find the length of the Longest Palindromic Subsequence of a string
function longestPalindromeSubsequence(s) {
    // Create a copy of the input string and reverse it
    const t = s.split('').reverse().join('');

    // Find the LCS between the original and reversed strings
    return lcs(s, t);
}

// Main function
function main() {
    const s = "bbabcbcab";

    // Call the longestPalindromeSubsequence function and print the result
    console.log("The Length of Longest Palindromic Subsequence is " + longestPalindromeSubsequence(s));
}

// Call the main function to start the program
main();

