// //-------------Using the recursion-------------//
// function getMaxPathSum(matrix) {
//   const n = matrix.length;
//   const m = matrix[0].length;

//   function helper(i, j) {
//     // If we're out of bounds, return a very small number (negative infinity)
//     if (j < 0 || j >= m) {
//       return -Infinity;
//     }

//     // Base case: If we're in the first row, return the value directly
//     if (i === 0) {
//       return matrix[0][j];
//     }

//     // Calculate the maximum path sum by moving up, left diagonal, and right diagonal
//     // up k liye call hoga fir left k liye fir righjt k liye or ese hi sbke liye base case jab reach hoga to value return hoti jayegi first row ki
//     const up = matrix[i][j] + helper(i - 1, j);
//     const leftDiagonal = matrix[i][j] + helper(i - 1, j - 1);
//     const rightDiagonal = matrix[i][j] + helper(i - 1, j + 1);

//     // Return the maximum of the three possible paths
//     return Math.max(up, leftDiagonal, rightDiagonal);
//   }

//   // We need to calculate the maximum path sum starting from any cell in the last row
//   let maxi = -Infinity;
//   for (let j = 0; j < m; j++) {
//     maxi = Math.max(maxi, helper(n - 1, j)); // it will call again and again till the j<m and we find the max from helper funciton and stored maxi or after the 4 calls which ever is the maxi at last is our answer
//   }

//   return maxi;
// }
// const matrix = [
//   [1, 2, 10, 4],
//   [100, 3, 2, 1],
//   [1, 1, 20, 2],
//   [1, 2, 2, 1],
// ];
// const result = getMaxPathSum(matrix);
// console.log("Maximum Path Sum:", result);

//---------------Using the dynamic programming---------------//
// function getMaxPathSum(matrix) {
//   const n = matrix.length;
//   const m = matrix[0].length;

//   function helper(i, j) {
//     const dp = Array.from({ length: m }, () => Array(n).fill(-1));
//     // If we're out of bounds, return a very small number (negative infinity)
//     if (j < 0 || j >= m) {
//       return -Infinity;
//     }

//     // Base case: If we're in the first row, return the value directly
//     if (i === 0) {
//       return matrix[0][j];
//     }
//     if (dp[i][j] !== -1) return dp[i][j];
//     const up = matrix[i][j] + helper(i - 1, j);
//     const leftDiagonal = matrix[i][j] + helper(i - 1, j - 1);
//     const rightDiagonal = matrix[i][j] + helper(i - 1, j + 1);

//     // Return the maximum of the three possible paths
//     dp[i][j] = Math.max(up, leftDiagonal, rightDiagonal);
//     return dp[i][j];
//   }

//   let maxi = -Infinity;
//   for (let j = 0; j < m; j++) {
//     maxi = Math.max(maxi, helper(n - 1, j));
//   }

//   return maxi;
// }
// const matrix = [
//   [1, 2, 10, 4],
//   [100, 3, 2, 1],
//   [1, 1, 20, 2],
//   [1, 2, 2, 1],
// ];
// const result = getMaxPathSum(matrix);
// console.log("Maximum Path Sum:", result);

//--------------Tabulation--------------//
// function getMaxPathSum(matrix) {
//   const n = matrix.length;
//   const m = matrix[0].length;
//   const dp = Array.from({ length: n }, () => Array(m).fill(-1));

//   // Step 2: Store the result of the base case
//   for (let j = 0; j < m; j++) {
//     dp[0][j] = matrix[0][j];
//   }

//   // Step 3: Calculate the max path sum for rows after row 0
//   for (let i = 1; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       const up = matrix[i][j] + dp[i - 1][j];

//       let leftDiagonal = matrix[i][j];
//       if (j - 1 >= 0) {
//         leftDiagonal += dp[i - 1][j - 1];
//       } else {
//         leftDiagonal = -Infinity;
//       }

//       let rightDiagonal = matrix[i][j];
//       if (j + 1 < m) {
//         rightDiagonal += dp[i - 1][j + 1];
//       } else {
//         rightDiagonal = -Infinity;
//       }

//       dp[i][j] = Math.max(up, leftDiagonal, rightDiagonal);
//     }
//   }

//   let maxi = -Infinity;
//   for (let j = 0; j < m; j++) {
//     maxi = Math.max(maxi, dp[n - 1][j]);
//   }

//   return maxi;
// }

// const matrix = [
//   [1, 2, 10, 4],
//   [100, 3, 2, 1],
//   [1, 1, 20, 2],
//   [1, 2, 2, 1],
// ];
// const result = getMaxPathSum(matrix);
// console.log("Maximum Path Sum:", result);

//----------------space optimization-------------//

function getMaxPathSum(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  let prev = new Array(m).fill(0);
  let cur = new Array(m).fill(0);
  // Step 2: Store the result of the base case
  for (let j = 0; j < m; j++) {
    prev[j] = matrix[0][j];
  }

  // Step 3: Calculate the max path sum for rows after row 0
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const up = matrix[i][j] + prev[j];

      let leftDiagonal = matrix[i][j];
      if (j - 1 >= 0) {
        leftDiagonal += prev[j - 1];
      } else {
        leftDiagonal = -Infinity;
      }

      let rightDiagonal = matrix[i][j];
      if (j + 1 < m) {
        rightDiagonal += prev[j + 1];
      } else {
        rightDiagonal = -Infinity;
      }

      cur[j] = Math.max(up, leftDiagonal, rightDiagonal);
    }
    prev = [...cur];
  }

  let maxi = -Infinity;
  for (let j = 0; j < m; j++) {
    maxi = Math.max(maxi, prev[j]);
  }

  return maxi;
}

const matrix = [
  [1, 2, 10, 4],
  [100, 3, 2, 1],
  [1, 1, 20, 2],
  [1, 2, 2, 1],
];
const result = getMaxPathSum(matrix);
console.log("Maximum Path Sum:", result);
