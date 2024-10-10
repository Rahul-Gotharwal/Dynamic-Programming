//---------Recursion -------------//

// function maxChocolates(i, j1, j2, n, m, grid) {
//   if (j1 < 0 || j1 >= m || j2 < 0 || j2 >= m) return -Infinity;

//   // Base case: If we are at the last row
//   if (i === n - 1) {
//     if (j1 === j2) {
//       return grid[i][j1];
//     } else {
//       return grid[i][j1] + grid[i][j2];
//     }
//   }

//   let maxChoc = -Infinity;

//   // Iterate through the possible moves
//   for (let di = -1; di <= 1; di++) {
//     for (let dj = -1; dj <= 1; dj++) {
//       let ans;
//       if (j1 === j2) {
//         ans = grid[i][j1] + maxChocolates(i + 1, j1 + di, j2 + dj, n, m, grid);
//       } else {
//         ans =
//           grid[i][j1] +
//           grid[i][j2] +
//           maxChocolates(i + 1, j1 + di, j2 + dj, n, m, grid);
//       }
//       maxChoc = Math.max(maxChoc, ans);
//     }
//   }

//   return maxChoc;
// }

// function maximumChocolates(n, m, grid) {
//   return maxChocolates(0, 0, m - 1, n, m, grid);
// }

// // Test the function with a grid
// const matrix = [
//   [2, 3, 1, 2],
//   [3, 4, 2, 2],
//   [5, 6, 3, 5],
// ];
// const n = matrix.length;
// const m = matrix[0].length;

// console.log("Maximum Chocolates:", maximumChocolates(n, m, matrix));

//--------------Dyanamic Progarming ------------//
// function maxChocolates(i, j1, j2, n, m, grid) {
//   if (j1 < 0 || j1 >= m || j2 < 0 || j2 >= m) return -Infinity;
//   const dp = new Array(n)
//     .fill(null)
//     .map(() => new Array(m).fill(null).map(() => new Array(m).fill(-1)));
//   // Base case: If we are at the last row
//   if (i === n - 1) {
//     if (j1 === j2) {
//       return grid[i][j1];
//     } else {
//       return grid[i][j1] + grid[i][j2];
//     }
//   }
//   if (dp[i][j1][j2] !== -1) return dp[i][j1][j2];

//   let maxChoc = -Infinity;

//   // Iterate through the possible moves
//   for (let di = -1; di <= 1; di++) {
//     for (let dj = -1; dj <= 1; dj++) {
//       let ans;
//       if (j1 === j2) {
//         ans = grid[i][j1] + maxChocolates(i + 1, j1 + di, j2 + dj, n, m, grid);
//       } else {
//         ans =
//           grid[i][j1] +
//           grid[i][j2] +
//           maxChocolates(i + 1, j1 + di, j2 + dj, n, m, grid);
//       }
//       maxChoc = Math.max(maxChoc, ans);
//     }
//   }
//   dp[i][j1][j2] = maxChoc;
//   return maxChoc;
// }

// function maximumChocolates(n, m, grid) {
//   return maxChocolates(0, 0, m - 1, n, m, grid);
// }

// // Test the function with a grid
// const matrix = [
//   [2, 3, 1, 2],
//   [3, 4, 2, 2],
//   [5, 6, 3, 5],
// ];
// const n = matrix.length;
// const m = matrix[0].length;

// console.log("Maximum Chocolates:", maximumChocolates(n, m, matrix));
/** Created Dp at last
 * dp = [
  [
    [24, 23, 22, 24],
    [23, 22, 23, 23],
    [22, 23, 22, 22],
    [24, 23, 22, 24]
  ],
  [
    [17, 16, 17, 17],
    [16, 16, 15, 16],
    [15, 16, 15, 15],
    [17, 16, 15, 17]
  ],
  [
    [11, 10, 11, 11],
    [10, 11, 10, 11],
    [11, 10, 11, 11],
    [11, 11, 11, 11]
  ]
]
Explanation of the DP Table
dp[2][1][3] = 11: If Alice is at row 2, column 1, and Bob is at row 2, column 3, the maximum chocolates they can collect from this point onward is 11.
dp[1][0][3] = 17: If Alice is at row 1, column 0, and Bob is at row 1, column 3, the maximum chocolates they can collect from this point onward is 17.
dp[0][0][3] = 24: Starting from row 0, Alice at column 0, and Bob at column 3, the maximum chocolates they can collect for the entire grid is 24
 */

//------------Tabaulation --------------//

function maxChocolates(n, m, grid) {
  const dp = new Array(n)
    .fill(null)
    .map(() => new Array(m).fill(null).map(() => new Array(m).fill(-1)));
  // Initialize dp array for the last row based on grid values
  for (let j1 = 0; j1 < m; j1++) {
    for (let j2 = 0; j2 < m; j2++) {
      if (j1 === j2) dp[n - 1][j1][j2] = grid[n - 1][j1];
      else {
        dp[n - 1][j1][j2] = grid[n - 1][j1] + grid[n - 1][j2];
      }
    }
  }

  // Iterate through the possible moves
  // three varbales so three nested loops
  // i will be from n-2 to 0
  for (let i = n - 2; i >= 0; i--) {
    for (let j1 = 0; j1 < m; j1++) {
      for (let j2 = 0; j2 < m; j2++) {
        let maxi = -Infinity;
        // Iterate through all possible move combinations
        // these loops are for the movement in the grid like -1 to +1 (i-1 , i , i+1)
        for (let di = -1; di <= 1; di++) {
          for (let dj = -1; dj <= 1; dj++) {
            let ans;
            if (j1 === j2) {
              ans = grid[i][j1];
            } else {
              ans = grid[i][j1] + grid[i][j2];
            }
            // Check if the move is valid (within grid bounds)
            if (j1 + di >= 0 && j1 + di < m && j2 + dj >= 0 && j2 + dj < m) {
              ans += dp[i + 1][j1 + di][j2 + dj];
            } else {
              ans += -1e9; // A very large negative value for invalid moves
            }

            maxi = Math.max(ans, maxi);
          }
        }
        dp[i][j1][j2] = maxi;
      }
    }
  }
  return dp[0][0][m - 1];
}

// Test the function with a grid
const matrix = [
  [2, 3, 1, 2],
  [3, 4, 2, 2],
  [5, 6, 3, 5],
];
const n = matrix.length;
const m = matrix[0].length;

console.log("Maximum Chocolates:", maxChocolates(n, m, matrix));

//-----------------spcae optimzation-------------//

function maximumChocolates(n, m, grid) {
  // Initialize two 2D arrays: front and cur
  let front = new Array(m).fill(null).map(() => new Array(m).fill(0));
  let cur = new Array(m).fill(null).map(() => new Array(m).fill(0));

  // Initialize front array for the last row based on grid values
  for (let j1 = 0; j1 < m; j1++) {
    for (let j2 = 0; j2 < m; j2++) {
      if (j1 === j2) {
        front[j1][j2] = grid[n - 1][j1];
      } else {
        front[j1][j2] = grid[n - 1][j1] + grid[n - 1][j2];
      }
    }
  }

  // Outer nested loops for traversing the DP array
  for (let i = n - 2; i >= 0; i--) {
    for (let j1 = 0; j1 < m; j1++) {
      for (let j2 = 0; j2 < m; j2++) {
        let maxi = Number.MIN_SAFE_INTEGER;

        // Inner nested loops to try out 9 options
        for (let di = -1; di <= 1; di++) {
          for (let dj = -1; dj <= 1; dj++) {
            let ans;

            if (j1 === j2) {
              ans = grid[i][j1];
            } else {
              ans = grid[i][j1] + grid[i][j2];
            }

            // Check if the move is valid (within grid bounds)
            if (j1 + di >= 0 && j1 + di < m && j2 + dj >= 0 && j2 + dj < m) {
              ans += front[j1 + di][j2 + dj];
            } else {
              ans += -1e9; // A very large negative value for invalid moves
            }

            maxi = Math.max(ans, maxi);
          }
        }
        cur[j1][j2] = maxi;
      }
    }
    // Update the front array with values from the cur array
    front = [...cur];
  }

  // The maximum chocolates will be stored in front[0][m - 1]
  return front[0][m - 1];
}

function main() {
  const matrix = [
    [2, 3, 1, 2],
    [3, 4, 2, 2],
    [5, 6, 3, 5],
  ];

  const n = matrix.length;
  const m = matrix[0].length;

  console.log(maximumChocolates(n, m, matrix));
}

// Call the main function to execute the code
main();
