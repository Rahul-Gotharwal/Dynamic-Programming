// function uniquePathsRecursive(m, n) {
//     function countPaths(i, j) {
//         // Base cases: If out of bounds or reached the starting point
//         if (i < 0 || j < 0) return 0;
//         if (i === 0 && j === 0) return 1;
        
//         // Recursively calculate paths by moving up or left
//         const up = countPaths(i - 1, j);
//         const left = countPaths(i, j - 1);
        
//         return up + left;
//     }
    
//     return countPaths(m - 1, n - 1);
// }

// // Example usage:
// console.log(uniquePathsRecursive(3, 3)); // Output: 6


//-------------- Memoization Approach----------------//
// function uniquePathsMemmization(m, n) {
//     function countPaths(i, j) {
//         const dp = Array.from({length:m} ,()=>Array(n).fill(-1))
//         // Base cases: If out of bounds or reached the starting point
//         if (i < 0 || j < 0) return 0;
//         if (i === 0 && j === 0) return 1;
//         if(dp[i][j]!==-1) return dp[i][j]
//         // Recursively calculate paths by moving up or left
//         const up = countPaths(i - 1, j);
//         const left = countPaths(i, j - 1);
        
//         dp[i][j] =  up + left;
//         return dp[i][j]
//     }
    
//     return countPaths(m - 1, n - 1);
// }

// // Example usage:
// console.log(uniquePathsMemmization(3, 3)); // Output: 6

/**Explanation:
Array.from({ length: m }) creates an array with m undefined elements.
The second argument to Array.from, which is () => Array(n).fill(-1), is a mapping function that is called on each element of the array. This creates an array of length n filled with -1 for each element in the outer array.
Result: You get a 2D array dp with m rows and n columns, all initialized to -1.
 */
/// NOTE - tabulation me 2 varibels ka use krke (i , j) use krke hum answer tk phuch rhe he 
/// or sapce optimizartion me single dp ka use krenge or usko hi secomnd iterstion k liye upeer wala dp bna denge jiise single hi dp se kaam ho jayega
//---------3. Tabulation Approach---------------//
// function uniquePathsTabulation(m ,n ){
//     const dp = Array.from({length:m} , ()=>Array(n).fill(-1));
//     //Initialize the first row and first column
//     for(let i = 0 ; i< m; i++) dp[0][i] = 1 ;
//     for(let j = 0 ; j< n ; j++) dp[j][0] = 1 ;
   
//     // Fill the dp table 
//     // uper wale dp k jo 1 he unko add krte hue last destination tk jayenge
//     for(let i = 1 ; i< m ; i++){
//         for(let j = 1 ; j< n ; j++){
//             dp[i][j] = dp[i-1][j] + dp[i][j-1]
//         }
//     }
//     return dp[m-1][n-1]


// }
// console.log(uniquePathsTabulation(3, 3)); // Output: 6

//--------------space optimization--------------//
// function uniquePathsSpaceOptimized( m , n){
//     const dp  = Array(n).fill(1); // why fill with 1 , because it is the base case that helps us to calcaulte the paths till  the end3
//     for(let i = 1 ; i< m ; i++){
//         for(let j =1 ; j< n ; j++){
//             dp[j] = dp[j] + dp[j-1];
//         }
//     }
//     return dp[n-1]
// }
// console.log(uniquePathsSpaceOptimized(3, 3)); // Output: 6

/**
 * Let’s take the example of a 3x3 grid.

Initialization:

We start with a 1D array dp of size n (the number of columns) initialized with 1s.
Initial dp state: [1, 1, 1]
Each 1 represents the number of ways to reach any cell in the first row, as there’s only one way (moving right).
First Iteration (i = 1):

We iterate over the rows starting from the second row (i = 1).
For each cell in the current row, update dp[j] as dp[j] += dp[j - 1]. This means the number of ways to reach cell (i, j) is the sum of the ways to reach (i-1, j) (from the same column in the previous row) and (i, j-1) (from the left cell in the current row).
Update for j = 1: dp[1] = dp[1] + dp[0] = 1 + 1 = 2
Update for j = 2: dp[2] = dp[2] + dp[1] = 1 + 2 = 3
dp state after i = 1: [1, 2, 3]
Second Iteration (i = 2):

Continue to the next row.
Update for j = 1: dp[1] = dp[1] + dp[0] = 2 + 1 = 3
Update for j = 2: dp[2] = dp[2] + dp[1] = 3 + 3 = 6
dp state after i = 2: [1, 3, 6]
Final Result:

After processing all rows, dp[n-1] (i.e., dp[2] in this case) contains the number of unique paths to the bottom-right corner of the grid.
Final dp state: [1, 3, 6]
The result is 6, which is the number of unique paths for a 3x3 grid.
 */
//----------------Take You Forward------------//
function countWays(m, n) {
    // Create an array 'prev' to store the previous row's values, initialized to 1 for the first row.
    let prev = Array(n).fill(1);
  
    // Iterate through each row of the grid starting from the second row.
    for (let i = 1; i < m; i++) {
      // Iterate through each column of the grid starting from the second column.
      for (let j = 1; j < n; j++) {
        // Update 'prev[j]' to be the sum of 'prev[j]' (up) and 'prev[j-1]' (left).
        prev[j] += prev[j - 1];
      }
    }
  
    // The result is stored in the last element of the 'prev' array.
    return prev[n - 1];
  }
  
  // Main function
  function main() {
    const m = 3;
    const n = 2;
  
    // Call the countWays function and print the result.
    console.log(countWays(m, n)); // Output: 3
  }
  
  // Call the main function to start the program.
  main();
  
