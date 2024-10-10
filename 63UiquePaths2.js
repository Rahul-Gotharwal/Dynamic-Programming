// //---------------Recusrion ------------------//
// function uniquePathsRecursive(m, n ,arr) {
//     function countPaths(i, j) {
//         // Base cases: If out of bounds or reached the starting point
//         if (i < 0 || j < 0 || arr[i][j] === -1) {
//             return 0;
//           }
//         if (i === 0 && j === 0) return 1;

//         // Recursively calculate paths by moving up or left
//         const up = countPaths(i - 1, j);
//         const left = countPaths(i, j - 1);

//         return up + left;
//     }

//     return countPaths(m-1 , n-1); // why m-1 and n-1 because of the 0 based indexing like i and j is start from 0
// }

// // Example usage:
// let arr = [[0,0,0],[0,-1,0],[0,0,0]]
// const m = arr.length;
// const n= arr[0].length
// console.log(uniquePathsRecursive( m ,n , arr)); // Output: 6

//--------------dynamic programming---------------//
// function uniquePathsDp(m, n ,arr) {
//     function countPaths(i, j) {
//     const dp = new Array(n).fill().map(() => new Array(m).fill(-1));
//         // Base cases: If out of bounds or reached the starting point
//         if (i < 0 || j < 0 || arr[i][j] === -1) {
//             return 0;
//           }
//         if (i === 0 && j === 0) return 1;
//         if(dp[i][j]!==-1) return dp[i][j]

//         // Recursively calculate paths by moving up or left
//         const up = countPaths(i - 1, j);
//         const left = countPaths(i, j - 1);

//         dp[i][j] = up + left;
//         return dp[i][j]
//     }

//     return countPaths(m-1 , n-1); // why m-1 and n-1 because of the 0 based indexing like i and j is start from 0
// }
// let arr = [[0,0,0],[0,-1,0],[0,0,0]]
// const m = arr.length;
// const n= arr[0].length
// console.log(uniquePathsDp( m ,n , arr)); // Output: 6

//-------------------Tabulation -------------------//
// function uniquePathsTabulation(m, n, arr) {
//     const dp = new Array(m).fill().map(() => new Array(n).fill(0));

//     // Initialize the dp table considering obstacles
//     for (let i = 0; i < m; i++) {
//       // hum chahe to ye condition hta bhi skte he kyuki ye [0,0,0] wali row or col se bn rhi he to check krne ki jarurat nhi he but for sfaetu check it
//         if (arr[i][0] === -1) break; // If an obstacle is encountered, all paths below it are blocked
//         dp[i][0] = 1;
//     }
//     for (let j = 0; j < n; j++) {
//         if (arr[0][j] === -1) break; // If an obstacle is encountered, all paths to the right of it are blocked
//         dp[0][j] = 1;
//     }

//     // Fill the dp table
//     for (let i = 1; i < m; i++) {
//         for (let j = 1; j < n; j++) {
//             if (arr[i][j] === -1) {
//                 dp[i][j] = 0; // If there's an obstacle, no path should go through this cell ,
//             } else {
//                 dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//             }
//         }
//     }

//     return dp[m - 1][n - 1];
// }

// // Example usage:
// let arr = [[0, 0, 0], [0, -1, 0], [0, 0, 0]];
// const m = arr.length;
// const n = arr[0].length;
// console.log(uniquePathsTabulation(m, n, arr)); // Output: 2

//--------------space optimization--------------//

function uniquePathsSpaceOptimized(m, n, arr) {
 // const dp = Array(n).fill(1);  we can fill this by 1 also but then we have to iniitailize the for loops by the 1
  const dp = Array(n).fill(0); // the number of column in the gird
  // Initialize dp considering the first row and obstacles
  dp[0] = arr[0][0] === -1 ? 0 : 1;//We start by setting dp[0] based on whether the starting cell (arr[0][0]) is an obstacle. If it's an obstacle (-1), then dp[0] is set to 0 because no path can start from there. Otherwise, dp[0] is set to 1, indicating there's one way to start from the top-left corner.
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === -1) {
        dp[j] = 0; // If there's an obstacle, no paths go through this cell
        // j is greater thena 0 because the we check only for the 1 and 2 itertion in the array becuese the array's first column is dont have any obstacles
      } else if (j > 0) { //If it's not an obstacle and j > 0 (i.e., not the first column), we add the value from the left (dp[j - 1]) to dp[j]. This addition accounts for all the paths that can come from the left to the current cell.
        dp[j]  = dp[j] +  dp[j - 1]; // Update dp[j] considering the left cell
      }
    }
  } 
  return dp[n - 1];
}

// Example usage:
let arr = [
  [0, 0, 0],
  [0, -1, 0],
  [0, 0, 0],
];
const m = arr.length;
const n = arr[0].length;
console.log(uniquePathsSpaceOptimized(m, n, arr)); // Output: 2

  
