//--------------Recursion -----------------//
// function minimumPathSum(triangle) {
//   const n = triangle.length;
//   function helper(i, j) {
//     if (i === n - 1) return triangle[i][j];
//     const down = triangle[i][j] + helper(i + 1, j);
//     const diagonal = triangle[i][j] + helper(i + 1, j + 1);

//     return Math.min(down, diagonal);
//   }
//   return helper(0, 0); // (0,0) means 0th row and 0th col
// }
//   const triangle =[
//     [1],
//     [2, 3],
//     [3, 6, 7],
//     [8, 9, 6, 10]
//   ]
//   console.log(minimumPathSum(triangle)); // output 14

//---------Dynamic Programming---------------//
//   function minimumPathSum(triangle) {
//     const n = triangle.length;
//     const dp = Array.from({ length: n }, () => Array(n).fill(-1));
//     function helper(i, j) {
//       if (dp[i][j] !== -1) return dp[i][j];
//       if (i === n - 1) return triangle[i][j];
//       const down = triangle[i][j] + helper(i + 1, j);
//       const diagonal = triangle[i][j] + helper(i + 1, j + 1);

//       return dp[i][j] = Math.min(down, diagonal);
//     }
//     return helper(0, 0); // (0,0) means 0th row and 0th col
//   }
//     const triangle =[
//       [1],
//       [2, 3],
//       [3, 6, 7],
//       [8, 9, 6, 10]
//     ]
//     console.log(minimumPathSum(triangle)); // output 14

//---------------Tabulation------------//
// as we know that we go to the bottom to the up in the tabulation so we change the logic in this , so this appraoch is diffrent from above appraoches
// function minimumPathSum(triangle) {
//   const n = triangle.length;
//   const dp = new Array(n).fill().map(() => new Array(n).fill(0));
//   // Initialize the bottom row of the DP array with the values from the triangle
//   for (let j = 0; j < n; j++) {
//     dp[n - 1][j] = triangle[n - 1][j];
//   }
//   for (let i = n - 2; i >= 0; i--) { //[3, 6, 7] start from here

//     // no need to start from the n-1 because we stored its result
//     for (let j = i; j >= 0; j--) { // j become 2 ,1,0
//      //same j bhi hunara i se hi start hoga or aage hum index me add krke last row se answer nikal lenge like [i+1][j]
//       // copy the recurrances
//      const down = triangle[i][j] + dp[i+1][j];
//      const diagonal = triangle[i][j] + dp[i+1][j+1]
//      dp[i][j] = Math.min(down, diagonal)
//     }
//   }
//   return dp[0][0]

// }
// /** possible for loops
//  * for (let i = n - 2; i >= 0; i--)
//     for (let j = 0; j <= i; j++)
//  */

// const triangle = [[1], [2, 3], [3, 6, 7], [8, 9, 6, 10]];
// console.log(minimumPathSum(triangle)); // output 14

/**
 * Let's dry run the `minimumPathSum` function with the provided `triangle = [[1], [2, 3], [3, 6, 7], [8, 9, 6, 10]]`. The goal is to understand how the down and diagonal paths are calculated within the loops.

### Initial Setup:
- `n = 4` (number of rows in the triangle)
- `dp` is initialized as a 4x4 matrix filled with `0`:
  ```
  dp = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [8, 9, 6, 10] // Filled with the last row of the triangle
  ]
  ```

### Loop Execution:
We'll start from the second-to-last row and work our way up.

#### Iteration 1 (i = 2):
- Current row: `[3, 6, 7]`
- `j = 2` (loop starts with `j = i`)

  - **Down Calculation**: `down = triangle[2][2] + dp[3][2] = 7 + 6 = 13`
  - **Diagonal Calculation**: `diagonal = triangle[2][2] + dp[3][3] = 7 + 10 = 17`
  - **Minimum Path**: `dp[2][2] = Math.min(down, diagonal) = Math.min(13, 17) = 13`

  Updated `dp`:
  ```
  dp = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 13, 0],
    [8, 9, 6, 10]
  ]
  ```

- `j = 1`

  - **Down Calculation**: `down = triangle[2][1] + dp[3][1] = 6 + 9 = 15`
  - **Diagonal Calculation**: `diagonal = triangle[2][1] + dp[3][2] = 6 + 6 = 12`
  - **Minimum Path**: `dp[2][1] = Math.min(down, diagonal) = Math.min(15, 12) = 12`

  Updated `dp`:
  ```
  dp = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 12, 13, 0],
    [8, 9, 6, 10]
  ]
  ```

- `j = 0`

  - **Down Calculation**: `down = triangle[2][0] + dp[3][0] = 3 + 8 = 11`
  - **Diagonal Calculation**: `diagonal = triangle[2][0] + dp[3][1] = 3 + 9 = 12`
  - **Minimum Path**: `dp[2][0] = Math.min(down, diagonal) = Math.min(11, 12) = 11`

  Updated `dp`:
  ```
  dp = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [11, 12, 13, 0],
    [8, 9, 6, 10]
  ]
  ```

#### Iteration 2 (i = 1):
- Current row: `[2, 3]`
- `j = 1`

  - **Down Calculation**: `down = triangle[1][1] + dp[2][1] = 3 + 12 = 15`
  - **Diagonal Calculation**: `diagonal = triangle[1][1] + dp[2][2] = 3 + 13 = 16`
  - **Minimum Path**: `dp[1][1] = Math.min(down, diagonal) = Math.min(15, 16) = 15`

  Updated `dp`:
  ```
  dp = [
    [0, 0, 0, 0],
    [0, 15, 0, 0],
    [11, 12, 13, 0],
    [8, 9, 6, 10]
  ]
  ```

- `j = 0`

  - **Down Calculation**: `down = triangle[1][0] + dp[2][0] = 2 + 11 = 13`
  - **Diagonal Calculation**: `diagonal = triangle[1][0] + dp[2][1] = 2 + 12 = 14`
  - **Minimum Path**: `dp[1][0] = Math.min(down, diagonal) = Math.min(13, 14) = 13`

  Updated `dp`:
  ```
  dp = [
    [0, 0, 0, 0],
    [13, 15, 0, 0],
    [11, 12, 13, 0],
    [8, 9, 6, 10]
  ]
  ```

#### Iteration 3 (i = 0):
- Current row: `[1]`
- `j = 0`

  - **Down Calculation**: `down = triangle[0][0] + dp[1][0] = 1 + 13 = 14`
  - **Diagonal Calculation**: `diagonal = triangle[0][0] + dp[1][1] = 1 + 15 = 16`
  - **Minimum Path**: `dp[0][0] = Math.min(down, diagonal) = Math.min(14, 16) = 14`

  Updated `dp`:
  ```
  dp = [
    [14, 0, 0, 0],
    [13, 15, 0, 0],
    [11, 12, 13, 0],
    [8, 9, 6, 10]
  ]
  ```

### Final Answer:
The minimum path sum is `dp[0][0] = 14`.

### Summary:
- The `dp` array accumulates the minimum path sums from the bottom row up to the top.
- Each cell in the `dp` array is updated with the minimum path sum by considering the "down" and "diagonal" paths from the current cell.
- The final answer at `dp[0][0]` represents the minimum path sum starting from the top of the triangle to the bottom.
 */

//---------------space optimizaiton-------------//
function minimumPathSum(triangle, n) {
  let front = new Array(n).fill(0);
  let cur = new Array(n).fill(0);

  // Initialize the bottom row of the front array with the values from the triangle
  for (let j = 0; j < n; j++) {
    front[j] = triangle[n - 1][j];
  }

  // Start from the second-to-last row and work upwards
  for (let i = n - 2; i >= 0; i--) {
    // checkout the tabulation for loop it is same as it have , in the comments , we can also change this
    for (let j = 0; j <= i; j++) {
      const down = triangle[i][j] + front[j];
      const diagonal = triangle[i][j] + front[j + 1];
      cur[j] = Math.min(down, diagonal);
    }

    // Directly assign cur to front without the spread operator
    // for (let j = 0; j <= i; j++) {
    //   front[j] = cur[j];
    // }
    // using spraed opereator
    front = [...cur]
  }

  return front[0];
}

const triangle = [[1], [2, 3], [3, 6, 7], [8, 9, 6, 10]];

const n = triangle.length;

console.log(minimumPathSum(triangle, n)); // Output: 14
