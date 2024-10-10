// // Function to check if a substring is a palindrome.
// function isPalindrome(i, j, s) {
//   while (i < j) {
//     if (s[i] !== s[j]) return false;
//     //else i++ ,j--
//     i++ , j--
//   }
//   return true;
// }
// // Recursive function to find the minimum number of partitions to make palindromes.
// function minPartition(i, n, str) {
//   if (i === n) return 0;
//   let minCost = Infinity;
//   // loop lga k check kremnge ki agar palindorme khi bhi nhi he to aage move kare jao or jkha palindrome mil rha he vhi pe function ko call kro
//   // j will increase ,we start the j from the i that is 0 . and then j is move to the 1 because we call it as J+1, minPartitions(j + 1, n, str);
//   // j humnara 2 bar call hoga ek to skip krega element ko tb call hoga jo ki humara automatic j++ se ho rha he , jab condtion false hogi , or ek bar jab bdhega jab humari condition true hogi tb ye recursion ki call k through bdhega
//   for (let j = i; j < n; j++) {
//     if (isPalindrome(i, j, str)) {
//       // instead of n we give the length till the j only , because we check the subpart of the strings
//       // If the substring is a palindrome, calculate the cost and minimize it.
//       let cost = 1 + minPartition(j + 1, n, str); // n ki length to kam hi nhi hogi kyuki i hi n tk reach krega ,or base conftion satisfy hogi
//       minCost = Math.min(minCost, cost);
//     }
//   }
//   return minCost;
// }
// function palindromePartitioning(str){
//     let n = str.length;
//     return minPartition(0 , n , str) -1 // -1 because it cut the extra , means for reducing one call
// }
// let str = "BABABCBADCEDE";
// let partitions = palindromePartitioning(str);
// console.log("The minimum number of partitions: " + partitions);

//-----------------Memoization-----------------//
/// only 1 perameter is changing that is  i
// Function to check if a substring is a palindrome.
// function isPalindrome(i, j, s) {
//     while (i < j) {
//         if (s[i] !== s[j]) return false;
//         i++;
//         j--;
//     }
//     return true;
// }

// // Recursive function to find the minimum number of partitions to make palindromes with memoization.
// function minPartitions(i, n, str, dp) {
//     // Base case: If we've reached the end of the string.
//     if (i === n) return 0;

//     // If already computed, return the stored result.
//     if (dp[i] !== -1) return dp[i];

//     let minCost = Infinity;
//     // Consider all possible substrings starting from the current index.
//     for (let j = i; j < n; j++) {
//         if (isPalindrome(i, j, str)) {
//             // If the substring is a palindrome, calculate the cost and minimize it.
//             let cost = 1 + minPartitions(j + 1, n, str, dp);
//             minCost = Math.min(minCost, cost);
//         }
//     }

//     // Store the result in dp array.
//     return dp[i] = minCost;
// }

// // Main function to find the minimum number of partitions for palindrome partitioning.
// function palindromePartitioning(str) {
//     let n = str.length;
//     let dp = new Array(n).fill(-1); // Initialize memoization array with -1.
//     // Calling the recursive function and subtracting 1 as it counts partitions, not cuts.
//     return minPartitions(0, n, str, dp) - 1;
// }

// // Example usage:
// let str = "aab";
// let partitions = palindromePartitioning(str);
// console.log("The minimum number of partitions: " + partitions);

//----------------Tabulation------------------//
// function isPalindrome(i, j, s) {
//   while (i < j) {
//     if (s[i] !== s[j]) return false;
//     i++;
//     j--;
//   }
//   return true;
// }
// function palindromePartitioning(str) {
//   let n = str.length;
//   let dp = new Array(n + 1).fill(0);
//   dp[n] = 0; // Initialize the last element to 0.
//   // ulta kar denge , like recursion me 0 se n pe ja rhe the yha pe n se 0 pe jaynge
//   for (let i = n - 1; i >= 0; i--) {
//     let minCost = Infinity;
//     for (let j = i; j < n; j++) {
//       if (isPalindrome(i, j, str)) {
//         // If the substring is a palindrome, calculate the cost and minimize it.
//         let cost = 1 + dp[j + 1];
//         minCost = Math.min(minCost, cost);
//       }
//     }
//     dp[i] = minCost
//   }
//   return dp[0]-1
// }
// let str = "BABABCBADCEDE";
// let partitions = palindromePartitioning(str);
// console.log("The minimum number of partitions: " + partitions);

///---------------optimial code (above all codes exceed the time limit)------------------//

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const n = s.length;
    const dp = new Array(n).fill(0);
    const isPalindrome = new Array(n).fill(null).map(() => new Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        dp[i] = i; // Maximum possible cuts for worst case
        for (let j = 0; j <= i; j++) {
            if (s[i] === s[j] && (i - j <= 1 || isPalindrome[j + 1][i - 1])) {
                isPalindrome[j][i] = true;
                if (j === 0) {
                    dp[i] = 0;
                } else {
                    dp[i] = Math.min(dp[i], dp[j - 1] + 1);
                }
            }
        }
    }

    return dp[n - 1];
};

// Example usage
console.log(minCut("aab"));  // Output: 1
console.log(minCut("a"));    // Output: 0
console.log(minCut("ab"));   // Output: 1