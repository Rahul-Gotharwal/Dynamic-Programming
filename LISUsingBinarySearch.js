// // Brute force approach for Longest Increasing Subsequence
// //---------same as looping concept code in 300---------//
// function lengthOfLISBruteForce(nums) {
//     if (nums.length === 0) return 0;

//     const dp = new Array(nums.length).fill(1);

//     for (let i = 1; i < nums.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (nums[j] > nums[i]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1); // dp[j] is the previndex
//             }
//         }
//     }

//     return Math.max(...dp);
// }

// // Example usage:
// const nums = [5,8,3,7,9,1];
// console.log(lengthOfLISBruteForce(nums)); // Output: 4


//-------------------Bianry code (TUF)-------------------//

function longestIncreasingSubsequence(arr) {
    // Create a temporary array to store the increasing subsequence
    let temp = [];
    temp.push(arr[0]); // Push the first element into the temp array

    let len = 1; // Initially, the length of the LIS is 1

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > temp[temp.length - 1]) { // if arr[i] > temp k ander jo he usse bda he . mtlb initially temp k ander abhi 5 he at 0th position (temp[0])
            // If arr[i] is greater than the last element of temp, extend the subsequence
            temp.push(arr[i]);
            len++;
        } else {
            // If arr[i] is not greater, replace the element in temp with arr[i]
            let ind = lowerBound(temp, arr[i]); // return 1 to it 
            temp[ind] = arr[i];
        }
    }

    return len;
}

// Function to find the first element greater than or equal to arr[i] using binary search
function lowerBound(temp, target) {
    let left = 0, right = temp.length;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (temp[mid] < target) {
            left = mid + 1;
        } else { 
            right = mid;
        }
    }

    return left;
}

// Example usage:
let arr = [1,7,8,4,5,6,-1,9];
console.log("The length of the longest increasing subsequence is " + longestIncreasingSubsequence(arr));

/**
 * Let's perform a dry run of the `longestIncreasingSubsequence` function with the input `arr = [1, 7, 8, 4, 5, 6, -1, 9]`.

### Initial State:

- `arr = [1, 7, 8, 4, 5, 6, -1, 9]`
- `temp = []`
- `len = 0`

### Step 1: First iteration (`i = 0`)

- The first element is `arr[0] = 1`.
- `temp.push(arr[0])` → `temp = [1]`
- Set `len = 1`.

### Step 2: Second iteration (`i = 1`)

- The second element is `arr[1] = 7`.
- Compare `arr[1]` with `temp[temp.length - 1]` (i.e., `temp[0] = 1`).
- Since `arr[1] > 1`, extend the subsequence:
  - `temp.push(arr[1])` → `temp = [1, 7]`
  - `len = 2`.

### Step 3: Third iteration (`i = 2`)

- The third element is `arr[2] = 8`.
- Compare `arr[2]` with `temp[temp.length - 1]` (i.e., `temp[1] = 7`).
- Since `arr[2] > 7`, extend the subsequence:
  - `temp.push(arr[2])` → `temp = [1, 7, 8]`
  - `len = 3`.

### Step 4: Fourth iteration (`i = 3`)

- The fourth element is `arr[3] = 4`.
- Compare `arr[3]` with `temp[temp.length - 1]` (i.e., `temp[2] = 8`).
- Since `arr[3] < 8`, we cannot extend the subsequence. We need to find the first element in `temp` that is greater than or equal to `arr[3]` using `lowerBound`.

**Finding `lowerBound` for `arr[3] = 4`:**

- Binary search in `temp = [1, 7, 8]`:
  - `left = 0`, `right = 3`
  - `mid = 1` → `temp[1] = 7` (greater than `4`)
  - So, `right = 1`.
  - `mid = 0` → `temp[0] = 1` (less than `4`)
  - So, `left = 1`.
  - The first element greater than or equal to `4` is at index `1`.
- Replace `temp[1]` with `arr[3]` → `temp = [1, 4, 8]`.

### Step 5: Fifth iteration (`i = 4`)

- The fifth element is `arr[4] = 5`.
- Compare `arr[4]` with `temp[temp.length - 1]` (i.e., `temp[2] = 8`).
- Since `arr[4] < 8`, we find the `lowerBound` of `arr[4]` in `temp`.

**Finding `lowerBound` for `arr[4] = 5`:**

- Binary search in `temp = [1, 4, 8]`:
  - `left = 0`, `right = 3`
  - `mid = 1` → `temp[1] = 4` (less than `5`)
  - So, `left = 2`.
  - The first element greater than or equal to `5` is at index `2`.
- Replace `temp[2]` with `arr[4]` → `temp = [1, 4, 5]`.

### Step 6: Sixth iteration (`i = 5`)

- The sixth element is `arr[5] = 6`.
- Compare `arr[5]` with `temp[temp.length - 1]` (i.e., `temp[2] = 5`).
- Since `arr[5] > 5`, extend the subsequence:
  - `temp.push(arr[5])` → `temp = [1, 4, 5, 6]`
  - `len = 4`.

### Step 7: Seventh iteration (`i = 6`)

- The seventh element is `arr[6] = -1`.
- Compare `arr[6]` with `temp[temp.length - 1]` (i.e., `temp[3] = 6`).
- Since `arr[6] < 6`, find the `lowerBound` of `arr[6]` in `temp`.

**Finding `lowerBound` for `arr[6] = -1`:**

- Binary search in `temp = [1, 4, 5, 6]`:
  - `left = 0`, `right = 4`
  - `mid = 2` → `temp[2] = 5` (greater than `-1`)
  - So, `right = 2`.
  - `mid = 1` → `temp[1] = 4` (greater than `-1`)
  - So, `right = 1`.
  - `mid = 0` → `temp[0] = 1` (greater than `-1`)
  - So, `right = 0`.
- The first element greater than or equal to `-1` is at index `0`.
- Replace `temp[0]` with `arr[6]` → `temp = [-1, 4, 5, 6]`.

### Step 8: Eighth iteration (`i = 7`)

- The eighth element is `arr[7] = 9`.
- Compare `arr[7]` with `temp[temp.length - 1]` (i.e., `temp[3] = 6`).
- Since `arr[7] > 6`, extend the subsequence:
  - `temp.push(arr[7])` → `temp = [-1, 4, 5, 6, 9]`
  - `len = 5`.

### Final Output:

- The `temp` array contains one of the longest increasing subsequences: `[-1, 4, 5, 6, 9]`.
- The length of the longest increasing subsequence is `len = 5`.

Thus, the output is `5`.
 */