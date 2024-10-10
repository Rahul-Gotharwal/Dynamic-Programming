function findNumberOfLIS(arr){
    let n = arr.length;
    let dp = new Array(n).fill(1);
    let ct = new Array(n).fill(1);
    let maxi = 1 // Initialize the maximum length as 1
    for(let i =0 ; i< n ; i++){
        for(let prev_index = 0 ; prev_index< i ; prev_index++){
            if(arr[prev_index]<arr[i] && 1+dp[prev_index]> dp[i]){
                dp[i] = dp[prev_index] +1 ;
                // Inherit the count from prev_index
                ct[i] = ct[prev_index]
            }
            else if(arr[prev_index]<arr[i] && 1+dp[prev_index] === dp[i]){
                // If dp[i] can be formed in multiple ways, add the count
                ct[i] += ct[prev_index]
        }
    }
    maxi = Math.max(maxi, dp[i]);
    }
    let numberOfLIS = 0;
    // Count how many subsequences have the length equal to the maximum
    for (let i = 0; i < n; i++) {
        if (dp[i] === maxi) {
            numberOfLIS += ct[i];
        }
    }

    return numberOfLIS;
}
let arr = [1, 5, 4, 3, 2, 6, 7, 10, 8, 9];
console.log("The count of Longest Increasing Subsequences (LIS) is " + findNumberOfLIS(arr));