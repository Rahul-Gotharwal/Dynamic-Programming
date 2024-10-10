//------------Longest Divisible Subsecquece----------------//
function lengthOfLCS(arr) {
    let n = arr.length;

    // Create a DP array initialized with 1 (as each element is at least a subsequence of length 1)
    let dp = new Array(n).fill(1);
    let hash = new Array(n).fill(0);  // To reconstruct the subsequence
    // fill the hash with the index values
    for (let i = 0; i < n; i++) {
        hash[i] = i;  // Initialize each index to itself
        for (let prev_index = 0; prev_index < i; prev_index++) {
            // If arr[prev_index] is less than arr[i], we can extend the subsequence
            if (arr[i] % arr[prev_index] === 0 && 1+dp[prev_index]>dp[i]) {
                dp[i] = 1 + dp[prev_index]; 
                hash[i] = prev_index // jab update hogi dp me value vo hi previndex ko hum store karwa denge , mtlb us time pe vo usi index hoga
            }
        }
    }
    // Find the index of the maximum value in dp array
    let ans = -1;
    let lastIndex = -1;

    for (let i = 0; i < n; i++) {
        if (dp[i] > ans) {
            ans = dp[i];
            lastIndex = i;//isse humko index mil jayega ,jha pe humari value last update hui thi uska
        }
    }
    //  let maxInDp = Math.max(...dp);
    //    // Reconstruct the LIS
       let lis = [];
       lis.push(arr[lastIndex]);
    // Backtrack using the hash array to get the actual LIS elements;
    // NOTE -  while cndition is updated everytime 
    while(hash[lastIndex]!==lastIndex){ //hash[4] (it stored here 2)!== 4 
        lastIndex = hash[lastIndex];// hash[4] means at index -2 
        lis.push(arr[lastIndex])

    }
    return lis;
    // no need to join for the geeks
    // console.log("The subsequence elements are:", lis.join(" "));
    // return ans
}

// Example usage
let arr = [3,4,16,8];
let sortedArr = arr.sort((a,b)=>a-b)
console.log("The Longest Divisble is :", lengthOfLCS(sortedArr));

