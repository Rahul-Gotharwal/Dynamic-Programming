function shortestSuperSecquence(s1,s2){
    let n = s1.length;
    let m = s2.length;
    //create the dp
    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    // Filling the dp table
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    // Constructing the answer by backtracking the dp table
    let i = n ;
    let j = m ;
    let ans = '';
    while(i>0 && j>0){
        if(s1[i-1] === s2[j-1]){
            ans+=s1[i-1]
            i--;
            j--;
        }
        else if(dp[i-1][j] > dp[i][j-1]){
            ans+=s1[i-1];
            i--
        }
        else{
            ans+=s2[j-1];
            j--
        }
    }
    while(i>0){
        ans+=s1[i-1];
        i--
    }
    while(j>0){
        ans+=s2[j-1];
        j--
    }

     // Reverse the constructed string to get the correct supersequence
    return ans.split('').reverse().join('');
}
// Example usage:
let s1 = "brute";
let s2 = "groot";

console.log("The Longest Common Supersequence is " + shortestSuperSecquence(s1, s2));