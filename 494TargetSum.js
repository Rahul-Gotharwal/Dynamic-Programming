// this functions return the number of subsets that is equal to the given target
// DP table
/**
 * To provide you with a better understanding of how the tabulation (DP) table works, let’s go through an example using your code and the provided `nums = [1, 1, 1, 1, 1]` and `target = 3`. We will focus on constructing the `dp` table for the `perfectSum` function, which finds how many subsets sum up to the `targetSum`.

### Problem Setup:
We are trying to partition the array into two subsets such that the difference between their sums equals the target `d`. 

Given:
- `nums = [1, 1, 1, 1, 1]`
- `target = 3`

The function `countPartitions` calculates the `targetSum` as:

\[
\text{targetSum} = \frac{\text{totSum} + d}{2} = \frac{5 + 3}{2} = 4
\]

So, we need to find how many subsets of `nums` sum to 4 using the tabulation approach (`perfectSum`).

### Step-by-Step Tabulation Table Construction:

**1. Initialize the DP table:**

We initialize a DP table `dp` of size `(n + 1) x (sum + 1)` where `n` is the length of the array (`5` in this case), and `sum` is `4`.

The table will look like this initially:

| i/j   | 0  | 1  | 2  | 3  | 4  |
|-------|----|----|----|----|----|
| **0** | 1  | 0  | 0  | 0  | 0  |
| **1** | 0  | 0  | 0  | 0  | 0  |
| **2** | 0  | 0  | 0  | 0  | 0  |
| **3** | 0  | 0  | 0  | 0  | 0  |
| **4** | 0  | 0  | 0  | 0  | 0  |
| **5** | 0  | 0  | 0  | 0  | 0  |

The first column (`dp[i][0]`) is filled with `1` because there is exactly one way to make sum `0` (by choosing an empty subset).

**2. Fill the DP table:**

We now proceed to fill the table using the given logic, considering each element in `nums` and whether to include it in the subset.

### Iteration 1 (`i = 1`):

For the first element `nums[0] = 1`, we update the table:

| i/j   | 0  | 1  | 2  | 3  | 4  |
|-------|----|----|----|----|----|
| **0** | 1  | 0  | 0  | 0  | 0  |
| **1** | 1  | 1  | 0  | 0  | 0  |
| **2** | 0  | 0  | 0  | 0  | 0  |
| **3** | 0  | 0  | 0  | 0  | 0  |
| **4** | 0  | 0  | 0  | 0  | 0  |
| **5** | 0  | 0  | 0  | 0  | 0  |

Here:
- `dp[1][1] = dp[0][1 - 1] + dp[0][1] = 1 + 0 = 1`

### Iteration 2 (`i = 2`):

For the second element `nums[1] = 1`:

| i/j   | 0  | 1  | 2  | 3  | 4  |
|-------|----|----|----|----|----|
| **0** | 1  | 0  | 0  | 0  | 0  |
| **1** | 1  | 1  | 0  | 0  | 0  |
| **2** | 1  | 2  | 1  | 0  | 0  |
| **3** | 0  | 0  | 0  | 0  | 0  |
| **4** | 0  | 0  | 0  | 0  | 0  |
| **5** | 0  | 0  | 0  | 0  | 0  |

Here:
- `dp[2][1] = dp[1][1 - 1] + dp[1][1] = 1 + 1 = 2`
- `dp[2][2] = dp[1][2 - 1] + dp[1][2] = 1 + 0 = 1`

### Iteration 3 (`i = 3`):

For the third element `nums[2] = 1`:

| i/j   | 0  | 1  | 2  | 3  | 4  |
|-------|----|----|----|----|----|
| **0** | 1  | 0  | 0  | 0  | 0  |
| **1** | 1  | 1  | 0  | 0  | 0  |
| **2** | 1  | 2  | 1  | 0  | 0  |
| **3** | 1  | 3  | 3  | 1  | 0  |
| **4** | 0  | 0  | 0  | 0  | 0  |
| **5** | 0  | 0  | 0  | 0  | 0  |

Here:
- `dp[3][1] = dp[2][1 - 1] + dp[2][1] = 1 + 2 = 3`
- `dp[3][2] = dp[2][2 - 1] + dp[2][2] = 2 + 1 = 3`
- `dp[3][3] = dp[2][3 - 1] + dp[2][3] = 1 + 0 = 1`

### Iteration 4 (`i = 4`):

For the fourth element `nums[3] = 1`:

| i/j   | 0  | 1  | 2  | 3  | 4  |
|-------|----|----|----|----|----|
| **0** | 1  | 0  | 0  | 0  | 0  |
| **1** | 1  | 1  | 0  | 0  | 0  |
| **2** | 1  | 2  | 1  | 0  | 0  |
| **3** | 1  | 3  | 3  | 1  | 0  |
| **4** | 1  | 4  | 6  | 4  | 1  |
| **5** | 0  | 0  | 0  | 0  | 0  |

Here:
- `dp[4][1] = dp[3][1 - 1] + dp[3][1] = 1 + 3 = 4`
- `dp[4][2] = dp[3][2 - 1] + dp[3][2] = 3 + 3 = 6`
- `dp[4][3] = dp[3][3 - 1] + dp[3][3] = 3 + 1 = 4`
- `dp[4][4] = dp[3][4 - 1] + dp[3][4] = 1 + 0 = 1`

### Iteration 5 (`i = 5`):

For the fifth element `nums[4] = 1`:

| i/j   | 0  | 1  | 2  | 3  | 4  |
|-------|----|----|----|----|----|
| **0** | 1  | 0  | 0  | 0  | 0  |
| **1** | 1  | 1  | 0  | 0  | 0  |
| **2** | 1  | 2  | 1  | 0  | 0  |
| **3** | 1  | 3  | 3  | 1  | 0  |
| **4** | 1  | 4  | 6  | 4  | 1  |
| **5** | 1  | 5  | 10 | 10 | 5  |

Here:
- `dp[5][1] = dp[4][1 - 1] + dp[4][1] = 1 + 4 = 5`
- `dp[5][2] = dp[4][2 - 1] + dp[4][2] = 4 + 6 = 10`

- `dp[5][3] = dp[4][3 - 1] + dp[4][3] = 6 + 4 = 10`
- `dp[5][4] = dp[4][4 - 1] + dp[4][4] = 4 + 1 = 5`

### Final Result:

The final result is `dp[5][4] = 5`, meaning there are 5 ways to partition the array into subsets where the sum equals 4.

This is the completed DP table. Would you like further explanation or to clarify anything specific?
 */

function solveTab(arr, n, sum) {
  const dp = Array.from({ length: n + 1 }, () => Array(sum + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1; // There's always one way to achieve sum 0 (empty subset)
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= sum; j++) {
      if (arr[i - 1] <= j) {
        dp[i][j] = (dp[i - 1][j - arr[i - 1]] + dp[i - 1][j]) 
      } else {
        dp[i][j] = dp[i - 1][j] ;
      }
    }
  }
  return dp[n][sum] ;
}

// Main function to call
function perfectSum(arr, n, sum) {
  return solveTab(arr, n, sum); // Tabulation approach
}
//This function is designed to handle the partitioning of the array into two subsets with a given difference d.
//The final result is dp[5][4] = 5, meaning there are 5 ways to partition the array into subsets where the sum equals 4.
// hum, target ki calcualtion yha se ese krke bhej rhe he ki uper se hmko us target k equal partion wala number return ho rha he
function countPartitions(arr, n, d) {
  let totSum = arr.reduce((acc, val) => acc + val, 0);
  if (totSum < 0 || (totSum -d) % 2 !== 0) return false;
  // We need to find subsets with sum (totSum - d) / 2
  const targetSum = (totSum +d) / 2;
  return perfectSum(arr, n, targetSum);
} 
// we just count the number of partitions as we calcualte in countpartionswithdiffrecnce question
function targetSum(nums,n,target){
  return countPartitions(nums,n,target)
}
let nums = [1,1,1,1,1], target = 3 // target goes as a d for above funciton
let n = nums.length

console.log(targetSum(nums,n,target))



/***
 * Let's break down the functions and how they work, step by step. The goal of the problem is to solve the "Target Sum" problem using dynamic programming (DP). Here's what each function does and how the logic flows:

### Functions Overview

1. **`solveTab(arr, n, sum)`**:
   - This function is a **helper** function that solves the **subset sum problem** using **tabulation** (a dynamic programming approach).
   - It tries to find how many subsets of the array `arr` can sum up to a given value `sum`.
   - `arr` is the input array, `n` is the length of the array, and `sum` is the target sum we are trying to reach with subsets of `arr`.

2. **`perfectSum(arr, n, sum)`**:
   - This function is just a wrapper around the `solveTab` function.
   - It calls `solveTab` with the provided arguments (`arr`, `n`, `sum`) to compute the number of subsets that can sum up to `sum`.

3. **`countPartitions(arr, n, d)`**:
   - This function is designed to handle the partitioning of the array into two subsets with a given difference `d`.
   - The logic behind this is based on a well-known transformation in dynamic programming problems.
   - **Key formula**: To achieve the desired target sum (which represents a difference `d` between two subsets), you need to calculate the total sum (`totSum`) of the array and then find the number of subsets that sum up to `targetSum = (totSum + d) / 2`.

4. **`targetSum(nums, n, target)`**:
   - This is the main function that ties everything together. It calls `countPartitions` with the input array `nums`, its length `n`, and the target sum `target`.

---

### Detailed Explanation of the Logic

The problem you're solving is similar to the **"Target Sum"** problem, where you're asked to assign `+` or `-` signs to each element in the array to make the sum of the elements equal to the given `target`. 

To convert this problem into a **subset sum problem**, you use the following steps:

1. **Transform the problem**:
   - The problem can be thought of as partitioning the array into two subsets `S1` and `S2` such that:
     - `S1` is the subset that gets the `+` sign.
     - `S2` is the subset that gets the `-` sign.
   - Therefore, the equation becomes:
     ```
     sum(S1) - sum(S2) = target
     ```
   - Rearranging this, we get:
     ```
     sum(S1) = (totSum + target) / 2
     ```
     where `totSum` is the total sum of all elements in the array.

2. **Subset Sum**:
   - After transforming the problem, we now need to find how many subsets of the array can sum up to `targetSum = (totSum + target) / 2`.
   - The function `solveTab` is used to count the number of subsets that sum up to this `targetSum`.

3. **Why Calculate `totSum`?**:
   - The total sum of the array (`totSum`) is essential because it helps us transform the problem into a subset sum problem.
   - For a valid partition to exist, `totSum + target` must be **even**. If it's odd, it's impossible to partition the array, and we return `false` (or `0` in some versions).

4. **Step-by-Step Execution**:
   - You first calculate `totSum`, the sum of all elements in the array.
   - Check if `(totSum - target)` is non-negative and even. If it's not, return `false` because it's impossible to partition the array.
   - Then, compute the `targetSum = (totSum + target) / 2` and use the `solveTab` function to count how many subsets of the array sum to `targetSum`.
   - Return the result of `solveTab`.

---

### Example Walkthrough

Let's use your example: `nums = [1, 1, 1, 1, 1]` and `target = 3`.

1. **Step 1**: Calculate `totSum`.
   - The total sum of the array `nums` is:
     ```
     totSum = 1 + 1 + 1 + 1 + 1 = 5
     ```

2. **Step 2**: Check for valid partition.
   - Check if `(totSum - target)` is non-negative and even.
     ```
     totSum - target = 5 - 3 = 2
     ```
   - `(totSum - target) % 2 === 0`, so this is a valid case, and we can proceed.

3. **Step 3**: Calculate the `targetSum`.
   - The target sum we're trying to find subsets for is:
     ```
     targetSum = (totSum + target) / 2 = (5 + 3) / 2 = 4
     ```

4. **Step 4**: Call `solveTab(nums, n, 4)` to find the number of subsets that sum to `4`.

---

### Code Walkthrough

- **`solveTab(arr, n, sum)`**:
  - This function uses **dynamic programming** to count how many subsets of `arr` can sum to `sum`.
  - It creates a `dp` table of size `(n+1) x (sum+1)`, where `dp[i][j]` represents the number of subsets of the first `i` elements of `arr` that sum to `j`.
  - The initialization sets `dp[i][0] = 1` because there is always one way to get a sum of 0 (using the empty subset).
  - It then fills in the table based on whether each element can be included in the subset.

---

### Summary of Each Function's Role

1. **`solveTab(arr, n, sum)`**: Finds how many subsets of the array `arr` sum to `sum`.
2. **`perfectSum(arr, n, sum)`**: Calls `solveTab` to count the subsets that sum to `sum`.
3. **`countPartitions(arr, n, d)`**: Calculates the total sum of the array, checks for valid partitions, and calls `perfectSum` to count the number of subsets with the required sum.
4. **`targetSum(nums, n, target)`**: The main function that calls `countPartitions` to solve the "Target Sum" problem.

---

In conclusion, this code converts the "Target Sum" problem into a subset sum problem using dynamic programming and counts how many ways you can partition the array to achieve the target sum.
 */

// leetcode soltition 
// function solveTab(arr, n, sum) {
//   if (sum < 0 || sum > 10000) {  // Adding a safeguard for large/invalid sums
//     return 0;
//   }
  
//   const dp = Array.from({ length: n + 1 }, () => Array(sum + 1).fill(0));

//   for (let i = 0; i <= n; i++) {
//     dp[i][0] = 1; // There's always one way to achieve sum 0 (empty subset)
//   }

//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j <= sum; j++) {
//       if (arr[i - 1] <= j) {
//         dp[i][j] = (dp[i - 1][j - arr[i - 1]] + dp[i - 1][j]) 
//       } else {
//         dp[i][j] = dp[i - 1][j] ;
//       }
//     }
//   }
//   return dp[n][sum];
// }

// // Main function to call
// function perfectSum(arr, n, sum) {
//   return solveTab(arr, n, sum); // Tabulation approach
// }

// function countPartitions(arr, n, d) {
//   let totSum = arr.reduce((acc, val) => acc + val, 0);

//   if (totSum < 0 || (totSum - d) % 2 !== 0) {
//     return 0;  // Invalid partition
//   }

//   const targetSum = (totSum + d) / 2;

//   // Adding another check for targetSum validity
//   if (targetSum < 0 || targetSum > 10000) {
//     return 0;
//   }

//   return perfectSum(arr, n, targetSum);
// }

// function targetSum(nums, n, target) {
//   return countPartitions(nums, n, target);
// }

// let nums = [1, 1, 1, 1, 1], target = 3;
// let n = nums.length;

// console.log(targetSum(nums, n, target));
