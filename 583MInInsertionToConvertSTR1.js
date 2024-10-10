// function longestCommonSubsequence(text1 , text2){
//     const n = text1.length;
//     const m = text2.length;
//     const dp = new Array(n+1).fill().map(()=>new Array(m+1).fill(0));
//     // initilaizse the base case for the empty substring;
//     // because we have two strings , so we start one from the row and one form the col
//     for(let ind = 0 ;ind<=n ; ind++){
//         dp[ind][0] = 0;
//     }
//     for(let ind = 0 ; ind<= m ; ind++){
//         dp[0][ind] = 0;
//     }

//     // fill the dp 
//     for(let ind1 = 1 ; ind1<=n ; ind1++){
//         for(let ind2 = 1 ; ind2<=m ; ind2++){
//             // base on the below condition we fill the dp
//             if(text1[ind1-1]===text2[ind2-1]){
//                 dp[ind1][ind2] = 1+dp[ind1-1][ind2-1];

//             }else{
//                 dp[ind1][ind2] = Math.max(dp[ind1-1][ind2],dp[ind1][ind2-1])
//             }
//         }
//     }
//     return dp[n][m]
// }

// function minInsertionToConvert(word1,word2){
//     const n = word1.length;
//     const m = word2.length;
//     const TotalLen= n+m;
//     const lengthOfLcs = longestCommonSubsequence(word1,word2);
//     return  TotalLen-2*lengthOfLcs;
// }

// let word1 = "sea", word2 = "eat";
// console.log(minInsertionToConvert(word1,word2))


//--------------------space-optimizaton-----------------//
function longestCommonSubsequence(text1,text2){
    const n = text1.length;
    const m = text2.length;
    const prev = new Array(m + 1).fill(0);
    const cur = new Array(m + 1).fill(0);
      // Populating the 'cur' array using nested loops
      for (let ind1 = 1; ind1 <= n; ind1++) {
        for (let ind2 = 1; ind2 <= m; ind2++) {
            if (text1[ind1 - 1] === text2[ind2 - 1]) {
                cur[ind2] = 1 + prev[ind2 - 1];
            } else {
                cur[ind2] = Math.max(prev[ind2], cur[ind2 - 1]);
            }
        }
     
        prev.splice(0, m + 1, ...cur);
    }

    // The result is stored in the last element of the 'prev' array
    return prev[m];
}

var minDistance = function(word1, word2) {
    const n = word1.length;
    const m = word2.length;
    const TotalLen= n+m;
    const lengthOfLcs = longestCommonSubsequence(word1,word2);
    return  TotalLen-2*lengthOfLcs;
};
let word1 = "sea", word2 = "eat";
console.log(minDistance(word1,word2))