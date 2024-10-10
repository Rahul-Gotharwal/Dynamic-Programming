//------------Using the Recursion --------------//
// function minPathSum(grid){
//     const m = grid.length;
//     const n = grid[0].length;
//     function countMinPath(i , j , grid){
//         if(i===0 && j === 0 ) return grid[0][0];
//           // If out of bounds, return a large value (Infinity) to ignore this path
//         if(i< 0 || j< 0) return Infinity;
//         const up = grid[i][j] + countMinPath(i-1 , j , grid);
//         const left = grid[i][j] + countMinPath(i , j-1 , grid);
//         return Math.min(up , left);

//     }
//     return countMinPath(m-1 , n-1 , grid)
// }

// let  grid = [[1,3,1],[1,5,1],[4,2,1]]
// console.log(minPathSum(grid))

//-------------Using the Dp -------------//
// function minPathSum(grid){
//   const m = grid.length;
//   const n = grid[0].length;
//   function countMinPath(i , j , grid){
//     const dp = Array.from({length : m} ,()=> Array(n).fill(-1))
//       if(i===0 && j === 0 ) return grid[0][0];
//         // If out of bounds, return a large value (Infinity) to ignore this path
//       if(i< 0 || j< 0) return Infinity;
//       if(dp[i][j]!==-1) return dp[i][j]
//       const up = grid[i][j] + countMinPath(i-1 , j , grid);
//       const left = grid[i][j] + countMinPath(i , j-1 , grid);
//       dp[i][j] =  Math.min(up , left);
//       return dp[i][j]
//   }
//   return countMinPath(m-1 , n-1 , grid)
// }

// let  grid = [[1,3,1],[1,5,1],[4,2,1]]
// console.log(minPathSum(grid))

//--------------Using the Tabulation ----------------//
// function minPathSum(grid){
//   const m = grid.length;
//   const n = grid[0].length;
//     const dp = Array.from({length : m} ,()=> Array(n).fill(-1))
//     // Base case: Initialize the starting point
//       dp[0][0] = grid[0][0];
//    // Fill the first row (can only come from the left)
//     for(let j = 1 ; j< n ; j++){
//       dp[0][j] = grid[0][j]  + dp[0][j-1]
//     }
//     // Fill the first column (can only come from above)
//     for(let i = 1 ; i< m ; i++){
//       dp[i][0] = grid[i][0] + dp[i-1][0]
//     }
//       // Fill the rest of the DP table
//       for(let i =1 ; i < m ; i++){
//         for(let j =1 ; j< n ; j++){
//           dp[i][j] = grid[i][j] +  Math.min(dp[i-1][j] , dp[i][j-1]);
//         }
//       }
//         return dp[m-1][n-1]
//   }

// let  grid = [[1,3,1],[1,5,1],[4,2,1]]
// console.log(minPathSum(grid))
/**
 * In the tabulation approach for the `minPathSum` problem, we fill the first row and the first column of the dynamic programming (DP) table to ensure that we have the correct base cases for the rest of the computation. Here's why we do this and how the DP table evolves:

### Why Fill the First Row and Column?

- **First Row:** The only way to reach any cell in the first row is by moving right from the previous cell in the same row. Therefore, the minimum path sum to reach any cell in the first row is the sum of the current cell value and the minimum path sum to reach the previous cell (i.e., the cell to the left).

- **First Column:** Similarly, the only way to reach any cell in the first column is by moving down from the previous cell in the same column. So, the minimum path sum to reach any cell in the first column is the sum of the current cell value and the minimum path sum to reach the previous cell (i.e., the cell above).

### How the DP Table Looks Like

Given a grid `[[1,3,1],[1,5,1],[4,2,1]]`, let's fill the DP table step by step:

1. **Initialization:**
   ```javascript
   const dp = Array.from({ length: m }, () => Array(n).fill(0));
   ```

2. **Filling the First Row and Column:**
   - **First Cell (Top-Left Corner):**
     ```javascript
     dp[0][0] = grid[0][0]; // dp[0][0] = 1
     ```
   - **First Row:**
     ```javascript
     dp[0][1] = dp[0][0] + grid[0][1]; // dp[0][1] = 1 + 3 = 4
     dp[0][2] = dp[0][1] + grid[0][2]; // dp[0][2] = 4 + 1 = 5
     ```
   - **First Column:**
     ```javascript
     dp[1][0] = dp[0][0] + grid[1][0]; // dp[1][0] = 1 + 1 = 2
     dp[2][0] = dp[1][0] + grid[2][0]; // dp[2][0] = 2 + 4 = 6
     ```

   **DP Table After Filling First Row and Column:**
   ```
   dp = [
     [1, 4, 5],
     [2, 0, 0],
     [6, 0, 0]
   ];
   ```

3. **Filling the Rest of the DP Table:**
   ```javascript
   for (let i = 1; i < m; i++) {
     for (let j = 1; j < n; j++) {
       dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
     }
   }
   ```
   
   After this loop, the DP table will look like this:

   **Final DP Table:**
   ```
   dp = [
     [1, 4, 5],
     [2, 7, 6],
     [6, 8, 7]
   ];
   ```

   The final result is in the bottom-right corner, `dp[m-1][n-1]`, which is `7`.

### Summary of DP Table Evolution:
- **After filling the first row and column:**
  ```
  dp = [
    [1, 4, 5],
    [2, 0, 0],
    [6, 0, 0]
  ];
  ```
- **Final DP table after filling all cells:**
  ```
  dp = [
    [1, 4, 5],
    [2, 7, 6],
    [6, 8, 7]
  ];
  ```

The `dp[m-1][n-1]` gives the minimum path sum from the top-left to the bottom-right corner.
 */

//---------------Using the space optimization -----------------//
//To use space optimization in the minPathSum problem, we can reduce the 2D dp array to a 1D array.
function minPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array(n).fill(0); // infinity

  dp[0] = grid[0][0]; // Initialize the first cell
  // Fill the first row 
  // NOTE - why we dont fill the col seprately because we have to reduce the space and we have 1d array so we can use etither col or row inside it otherwise it will become the tabultaion 
  for (let j = 1; j < n; j++) {
    dp[j] = dp[j - 1] + grid[0][j];
  }
  // Process the remaining rows
  for(let i =1 ; i< m ; i++){
    dp[0] += grid[i][0];
    for(let j =1; j< n ; j++){
      dp[j] = Math.min(dp[j] , dp[j-1]) + grid[i][j]
    }
  }
  return dp[n-1]
}

let grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log(minPathSum(grid));

/**
 * Let's walk through a dry run of the space-optimized `minPathSum` function with the example grid `[[1, 3, 1], [1, 5, 1], [4, 2, 1]]`.

### Initial Setup

- **Grid:** 
  ```
  1 3 1
  1 5 1
  4 2 1
  ```

- **`m = 3`** (number of rows), **`n = 3`** (number of columns).
- **`dp` Array:** Initialize the `dp` array with `Infinity` for all elements, and set `dp[0] = grid[0][0]`.

  ```
  dp = [1, Infinity, Infinity]
  ```

### Fill the First Row

Now, we'll fill in the first row by calculating the cumulative sum across the first row of the grid.

- **For `j = 1`**: `dp[1] = dp[0] + grid[0][1] = 1 + 3 = 4`

  ```
  dp = [1, 4, Infinity]
  ```

- **For `j = 2`**: `dp[2] = dp[1] + grid[0][2] = 4 + 1 = 5`

  ```
  dp = [1, 4, 5]
  ```

### Process the Remaining Rows

Now, we'll process each subsequent row, updating the `dp` array for each cell:

#### Processing Row 1

- **Update the first column (`j = 0`) for row 1 (`i = 1`)**: 
  - `dp[0] += grid[1][0] = 1 + 1 = 2`

  ```
  dp = [2, 4, 5]
  ```

- **For `j = 1`**: 
  - `dp[1] = Math.min(dp[1], dp[0]) + grid[1][1] = Math.min(4, 2) + 5 = 7`

  ```
  dp = [2, 7, 5]
  ```

- **For `j = 2`**: 
  - `dp[2] = Math.min(dp[2], dp[1]) + grid[1][2] = Math.min(5, 7) + 1 = 6`

  ```
  dp = [2, 7, 6]
  ```

#### Processing Row 2

- **Update the first column (`j = 0`) for row 2 (`i = 2`)**: 
  - `dp[0] += grid[2][0] = 2 + 4 = 6`

  ```
  dp = [6, 7, 6]
  ```

- **For `j = 1`**: 
  - `dp[1] = Math.min(dp[1], dp[0]) + grid[2][1] = Math.min(7, 6) + 2 = 8`

  ```
  dp = [6, 8, 6]
  ```

- **For `j = 2`**: 
  - `dp[2] = Math.min(dp[2], dp[1]) + grid[2][2] = Math.min(6, 8) + 1 = 7`

  ```
  dp = [6, 8, 7]
  ```

### Final Result

The value at `dp[n - 1]` (which is `dp[2]`) holds the minimum path sum to reach the bottom-right corner of the grid.

- **Output:** `dp[n - 1] = dp[2] = 7`

Thus, the minimum path sum for the given grid is **7**.
 */