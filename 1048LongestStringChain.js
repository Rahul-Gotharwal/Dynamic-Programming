// Function to compare two strings to check if one can be formed by adding a single character to the other
function compare(s1, s2) {
    if (s1.length !== s2.length + 1) return false;

    let first = 0, second = 0;

    while (first < s1.length) {
        if (second < s2.length && s1[first] === s2[second]) {
            first++;
            second++;
        } else {
            first++;
        }
    }
    if(first===s1.length && second === s2.length) return true
    else{
        false
    }
    //return first === s1.length && second === s2.length;
}

// Comparator function to sort strings by their length
function comp(s1, s2) {
    return s1.length - s2.length;
}

// Function to find the longest string chain
function longestStrChain(arr) {
    let n = arr.length;

    // Sort the array based on the length of strings
    arr.sort(comp); // size diffence 1 k basis pe isne array ko sort kar diya , agar khi bhi size diffrence 1 se km ya jayada mila (sirf 1 ka hi size diffrence hona chhahiye) to return false kar dega or ye sb humara comaprator funciton decide krega

    // Initialize dp array where dp[i] means the longest chain ending with arr[i]
    let dp = new Array(n).fill(1);

    let maxi = 1;
    // Loop through the array to find the longest chain
    for (let i = 1; i < n; i++) {
        for (let prev_index = 0; prev_index < i; prev_index++) {
            if (compare(arr[i], arr[prev_index]) && 1 + dp[prev_index] > dp[i]) {
                dp[i] = 1 + dp[prev_index];
            }
        }
        maxi = Math.max(maxi, dp[i]); // Update the maximum length
    }
    // let ans = Math.max(...dp);
    // return ans
    return maxi;
}

// Example usage
let words = ["a", "b", "ba", "bca", "bda", "bdca"];

console.log("The length of the longest string chain is:", longestStrChain(words));
