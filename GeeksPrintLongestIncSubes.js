// //------------print----------------//
// function lengthOfLCS(arr) {
//     let n = arr.length;

//     // Create a DP array initialized with 1 (as each element is at least a subsequence of length 1)
//     let dp = new Array(n).fill(1);
//     // create one more array with name hash ,and everyone is assigend to whatever index we at
//     // it will tell us who was the previos index 
//     let hash = new Array(n).fill(0);  // To reconstruct the subsequence
//     // fill the hash will the index values
//     for (let i = 1; i < n; i++) {
//         hash[i] = i;  // Initialize each index to itself
//         for (let prev_index = 0; prev_index < i; prev_index++) {
//             // If arr[prev_index] is less than arr[i], we can extend the subsequence
//             if (arr[prev_index] < arr[i] && 1+dp[prev_index]>dp[i]) {
//                 dp[i] = 1 + dp[prev_index]; 
//                 hash[i] = prev_index // jab update hogi dp me value vo hi previndex ko hum store karwa denge , mtlb us time pe vo usi index hoga
//             }
//         }
//     }
//     // Find the index of the maximum value in dp array
//     let ans = -1;
//     let lastIndex = -1;

//     for (let i = 0; i < n; i++) {
//         if (dp[i] > ans) {
//             ans = dp[i];
//             lastIndex = i;//isse humko index mil jayega ,jha pe humari value last update hui thi uska
//         }
//     }
//     //  let maxInDp = Math.max(...dp);
//     //    // Reconstruct the LIS
//        let lis = [];
//        lis.push(arr[lastIndex]);
//     // Backtrack using the hash array to get the actual LIS elements;
//     // NOTE -  while cndition is updated everytime 
//     while(hash[lastIndex]!==lastIndex){ //hash[4] !== 4 
//         lastIndex = hash[lastIndex];// hash[4] means at index -2 
//         lis.push(arr[lastIndex])

//     }
//    return lis.reverse().join(" ");
//     // no need to join for the geeks
//     // console.log("The subsequence elements are:", lis.join(" "));
//     // return ans
// }

// // Example usage
// let arr = [5,4,11,1,16,8];
// console.log("The subsequence elements are:", lengthOfLCS(arr));
// console.log("The length of the longest increasing subsequence is " + lengthOfLCS(arr));

/**
 * Reconstructing the LIS:

We start with lastIndex = 4 (where the LIS ends) and push arr[4] = 16 into lis. Now, lis = [16].
Next, we go to hash[4] = 2, which means the previous element in the LIS is at index 2 (arr[2] = 11). We push 11 into lis. Now, lis = [16, 11].
Then, we go to hash[2] = 0, which means the previous element in the LIS is at index 0 (arr[0] = 5). We push 5 into lis. Now, lis = [16, 11, 5].
 */

//-------------------Optimized code -----------------//
function longestStrChain(words) {
    // Sort the words by their lengths
    words.sort((a, b) => a.length - b.length);
    
    // Hash map to store the longest chain ending at each word
    let dp = new Map();
    let maxChainLength = 1;
    
    // Iterate over each word
    for (let word of words) {
        let longestChain = 1; // Every word is at least a chain of length 1 by itself
        
        // Try removing each character from the word to find a predecessor
        for (let i = 0; i < word.length; i++) {
            // Form the predecessor by removing the i-th character
            let predecessor = word.slice(0, i) + word.slice(i + 1);
            
            // If the predecessor exists in the map, update the longest chain
            if (dp.has(predecessor)) {
                longestChain = Math.max(longestChain, dp.get(predecessor) + 1);
            }
        }
        
        // Store the longest chain length for the current word
        dp.set(word, longestChain);
        
        // Update the global maximum chain length
        maxChainLength = Math.max(maxChainLength, longestChain);
    }
    
    return maxChainLength;
}

// Example usage
let words = ["a", "b", "ba", "bca", "bda", "bdca"];
console.log("The length of the longest string chain is:", longestStrChain(words));
