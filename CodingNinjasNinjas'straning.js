//-------------1. Recursive Approach*---------------------//
// Check the recursion teree making in the copy
// function ninjaTraining(n , points){
//     function getMaxPoints(day , lastactivity){
//         // this is the base case , we  need to choose the maximum points from the available activities on this day, but we must exclude the activity that was performed the previous day (though technically, for the first day, we don't have any prior day)
//        if(day===0){ // it will prefrom the opeeration the first row or 0th row
//         let maxi = 0 ;
//         for(let i = 0 ; i<=2 ; i++){
//          if(i!==lastactivity){
//             maxi = Math.max(maxi , points[0][i])
//          }
//         }
//         return maxi
//        }
//        // getMaxPoints(day-1 , i);  ye last me call hoga or iske sath value hogi like  getMaxPoints(0 , 1);  , because base case is reach then it goes and call the for 0 ,1 ,2 now we have called for 1 here then in above base case check if(i!==lastactivity) the 1 is not consider and we check only for the 0,2
//        let maxi = 0 ;
//        for(let i =0 ; i<=2 ; i++){
//         if(i!==lastactivity){
//             // jab day 0 hoga tb yha se uper call jayega with values Day 0 (f(0, 1) or f(0, 2)):
//             let activity = points[day][i] + getMaxPoints(day-1 , i);
//             maxi = Math.max(maxi , activity)
//         }
//        }
//          return maxi
//     }
//     return getMaxPoints(n-1 , 3) // 3 means non of the task is preformed till now , task is starting perform 2,1,0
// }
// let points = [
//     [10, 40, 70],
//     [20, 50, 80],
//     [30, 60, 90]
// ];
// let n = points.length;

// console.log(ninjaTraining(n, points)); // 210

//----------------- Memoization------------------//
// function ninjaTraining(n, points) {
//     //N*4 matrix
//     // below is the dp arryas explanation
//     let dp = new Array(n+1).fill().map(() => new Array(4).fill(-1));
//     console.log(dp)
//     function getMaxPoints(day, lastactivity) {
//         if (day === 0) {
//             let maxi = 0;
//             for (let i = 0; i <= 2; i++) {
//                 if (i !== lastactivity) {
//                     maxi = Math.max(maxi, points[0][i]);
//                 }
//             }
//             dp[day][lastactivity] = maxi;
//             return dp[day][lastactivity]
//         }

//         let maxi = 0;
//         for (let i = 0; i <= 2; i++) {
//             if (i !== lastactivity) {
//                 let activity = points[day][i] + getMaxPoints(day - 1, i);
//                 maxi = Math.max(maxi, activity);
//             }
//         }
//         return dp[day][lastactivity] = maxi
//     }

//     return getMaxPoints(n - 1, 3);
// }
// let points = [
//     [10, 40, 70],
//     [20, 50, 80],
//     [30, 60, 90]
// ];
// let n = points.length;
// console.log(ninjaTraining(n, points)); // 210

/**
 * Let's go through how the four rows are created in the array using the code:

```javascript
let dp = new Array(n + 1).fill().map(() => new Array(n + 1).fill(-1));
```

### Step-by-Step Explanation

1. **Creating the Outer Array**:
   - `new Array(n + 1)` creates an array with `n + 1` elements. 
   - If `n = 3`, this creates an array with 4 elements: `[ , , , ]`.
   - At this point, the elements are `undefined`.

2. **Filling the Outer Array**:
   - `.fill()` is called on the array. However, since `.fill()` is called without any arguments, it just fills the array with `undefined` values. This step prepares the array to be processed by `.map()` but doesn’t affect it much since it’s already filled with `undefined`.

   - After this step, the array still looks like `[undefined, undefined, undefined, undefined]`.

3. **Mapping Over the Outer Array**:
   - The `.map(() => new Array(n + 1).fill(-1))` function is applied to each element of the array.
   - `.map()` runs a function for each element of the array (which are `undefined` at this point).

4. **Creating the Inner Arrays**:
   - For each element in the outer array (each of the 4 `undefined` values), a new array of size `n + 1` is created using `new Array(n + 1).fill(-1)`.
   - Since `n = 3`, `new Array(n + 1)` creates an inner array with 4 elements: `[ , , , ]`.
   - Then `.fill(-1)` fills this inner array with `-1`: `[-1, -1, -1, -1]`.

5. **Assigning the Inner Arrays**:
   - These inner arrays are assigned to each position in the outer array. After mapping, the outer array looks like this:

```javascript
[
  [-1, -1, -1, -1], // First row
  [-1, -1, -1, -1], // Second row
  [-1, -1, -1, -1], // Third row
  [-1, -1, -1, -1]  // Fourth row
]
```

### Summary

- **Outer Array**: The outer array initially has `n + 1` elements (in this case, 4) and is filled with `undefined`.
- **Inner Arrays**: Each `undefined` in the outer array is replaced with a new inner array of size `n + 1` filled with `-1`.
- **Result**: The `dp` array is a 2D array with 4 rows and 4 columns, each element initialized to `-1`.

This structure allows you to store intermediate results in a dynamic programming solution, where each entry `dp[i][j]` can hold a value computed during the process.
 */
//-------------Tabulation -----------------------//

// function ninjaTraining(n , points){
//     //let dp = new Array(n+1).fill().map(()=> new Array(n+1).fill(-1));
//     let dp = new Array(n+1).fill().map(()=> new Array(4).fill(-1));
//     // first store the result of base case
//     dp[0][0] = Math.max(points[0][1], points[0][2]);
//     dp[0][1] = Math.max(points[0][0], points[0][2]);
//     dp[0][2] = Math.max(points[0][0], points[0][1]);
//     dp[0][3] = Math.max(points[0][0], points[0][1], points[0][2]);

//     for(let day = 1 ; day < n ; day++){ // this loop iterates over each day from 1 to n-1.
//         for(let last  = 0 ; last < 4 ; last++){ // This loop iterates over the last activity done the previous day (last ranges from 0 to 3).
//           //dp[day][last] = 0;
//          for(let i = 0 ; i<=2 ; i++){ //This loop checks all possible activities (i = 0, 1, 2) that can be performed on the current day.
//             if(i!==last){
//                 let activities = points[day][i] + dp[day-1][i]; //If i is not equal to last, meaning the activity is not repeated from the previous day, it calculates the potential points by adding the current day's points for activity i to the maximum points from the previous day (dp[day - 1][i]).
//                 dp[day][last] = Math.max(activities) //Math.max(dp[day][last], activity); //The result is stored in dp[day][last]
//             }
//           }
//         }
//     }
//      return dp[n-1][3]
// }

// let points = [
//     [10, 40, 70],
//     [20, 50, 80],
//     [30, 60, 90]
// ];
// let n = points.length;
// console.log(ninjaTraining(n, points)); // 210

/**
 * Let's do a dry run of the `ninjaTraining` function using the provided `points` array:

```javascript
let points = [
    [10, 40, 70],
    [20, 50, 80],
    [30, 60, 90]
];
```

### Initialization

First, the `dp` array is initialized, and the base case for `day 0` is set:

- `dp[0][0] = Math.max(points[0][1], points[0][2]) = Math.max(40, 70) = 70`
- `dp[0][1] = Math.max(points[0][0], points[0][2]) = Math.max(10, 70) = 70`
- `dp[0][2] = Math.max(points[0][0], points[0][1]) = Math.max(10, 40) = 40`
- `dp[0][3] = Math.max(points[0][0], points[0][1], points[0][2]) = Math.max(10, 40, 70) = 70`

The `dp` array after initialization:
```
dp = [
    [70, 70, 40, 70],  // Day 0
    [0,  0,  0,  0],   // Day 1 (to be calculated)
    [0,  0,  0,  0]    // Day 2 (to be calculated)
]
```

### Iterating Through Days

#### Day 1 (index `day = 1`)

1. **Last = 0**:
    - `i = 1`: `activity = points[1][1] + dp[0][1] = 50 + 70 = 120`
    - `i = 2`: `activity = points[1][2] + dp[0][2] = 80 + 40 = 120`
    - `dp[1][0] = Math.max(0, 120, 120) = 120`

2. **Last = 1**:
    - `i = 0`: `activity = points[1][0] + dp[0][0] = 20 + 70 = 90`
    - `i = 2`: `activity = points[1][2] + dp[0][2] = 80 + 40 = 120`
    - `dp[1][1] = Math.max(0, 90, 120) = 120`

3. **Last = 2**:
    - `i = 0`: `activity = points[1][0] + dp[0][0] = 20 + 70 = 90`
    - `i = 1`: `activity = points[1][1] + dp[0][1] = 50 + 70 = 120`
    - `dp[1][2] = Math.max(0, 90, 120) = 120`

4. **Last = 3**:
    - `i = 0`: `activity = points[1][0] + dp[0][0] = 20 + 70 = 90`
    - `i = 1`: `activity = points[1][1] + dp[0][1] = 50 + 70 = 120`
    - `i = 2`: `activity = points[1][2] + dp[0][2] = 80 + 40 = 120`
    - `dp[1][3] = Math.max(0, 90, 120, 120) = 120`

The `dp` array after `day 1`:
```
dp = [
    [70, 70, 40, 70],  // Day 0
    [120, 120, 120, 120], // Day 1
    [0,  0,  0,  0]    // Day 2 (to be calculated)
]
```

#### Day 2 (index `day = 2`)

1. **Last = 0**:
    - `i = 1`: `activity = points[2][1] + dp[1][1] = 60 + 120 = 180`
    - `i = 2`: `activity = points[2][2] + dp[1][2] = 90 + 120 = 210`
    - `dp[2][0] = Math.max(0, 180, 210) = 210`

2. **Last = 1**:
    - `i = 0`: `activity = points[2][0] + dp[1][0] = 30 + 120 = 150`
    - `i = 2`: `activity = points[2][2] + dp[1][2] = 90 + 120 = 210`
    - `dp[2][1] = Math.max(0, 150, 210) = 210`

3. **Last = 2**:
    - `i = 0`: `activity = points[2][0] + dp[1][0] = 30 + 120 = 150`
    - `i = 1`: `activity = points[2][1] + dp[1][1] = 60 + 120 = 180`
    - `dp[2][2] = Math.max(0, 150, 180) = 180`

4. **Last = 3**:
    - `i = 0`: `activity = points[2][0] + dp[1][0] = 30 + 120 = 150`
    - `i = 1`: `activity = points[2][1] + dp[1][1] = 60 + 120 = 180`
    - `i = 2`: `activity = points[2][2] + dp[1][2] = 90 + 120 = 210`
    - `dp[2][3] = Math.max(0, 150, 180, 210) = 210`

The final `dp` array after `day 2`:
```
dp = [
    [70, 70, 40, 70],   // Day 0
    [120, 120, 120, 120], // Day 1
    [210, 210, 180, 210]  // Day 2
]
```

### Final Result
The result is `dp[n-1][3]`, which is `dp[2][3] = 210`.

So, the maximum points Ninja can earn is **210**.
 */

//-----------------Space Optimiazation----------------//
function ninjaTraining(n, points) {
  let prev = new Array(4).fill(0);//prev = [70, 70, 40, 70];
  prev[0] = Math.max(points[0][1], points[0][2]);
  prev[1] = Math.max(points[0][0], points[0][2]);
  prev[2] = Math.max(points[0][0], points[0][1]);
  prev[3] = Math.max(points[0][0], points[0][1], points[0][2]);

  for (let day = 1; day < n; day++) {
   let curr = new Array(4).fill(0);
   for (let last = 0; last < 4; last++) {
      // curr[last] = 0;
       for (let i = 0; i <= 2; i++) {
           if (i !== last) {
               let activity = points[day][i] + prev[i];
               curr[last] = Math.max(activity);// Math.max(curr[last], activity);
           }
       }
   }
   prev = curr; 
}

return prev[3];
}
let points = [
    [10, 40, 70],
    [20, 50, 80],
    [30, 60, 90]
];
let n = points.length;
console.log(ninjaTraining(n, points)); // 210

/**
 * Let's perform a dry run of the `ninjaTraining` function using the provided points array:

```javascript
let points = [
    [10, 40, 70],
    [20, 50, 80],
    [30, 60, 90]
];
```

### Initialization

1. Initialize `prev` array to store the maximum points possible for each "last activity" on `day 0`:

   ```javascript
   let prev = new Array(4).fill(0);
   prev[0] = Math.max(points[0][1], points[0][2]); // max(40, 70) = 70
   prev[1] = Math.max(points[0][0], points[0][2]); // max(10, 70) = 70
   prev[2] = Math.max(points[0][0], points[0][1]); // max(10, 40) = 40
   prev[3] = Math.max(points[0][0], points[0][1], points[0][2]); // max(10, 40, 70) = 70
   ```

   After initialization:

   ```javascript
   prev = [70, 70, 40, 70];
   ```

### Iterating Through Days

#### Day 1 (index `day = 1`)

1. Initialize a new `curr` array to store the results for `day 1`.

   ```javascript
   let curr = new Array(4).fill(0);
   ```

2. Iterate over `last` (0 to 3), which represents the last activity done the previous day.

   - **Last = 0**:
     - Initialize `curr[0] = 0`
     - Check all possible activities (i = 0, 1, 2) that can be performed on day 1.
     - For `i = 1`: 
       - `activity = points[1][1] + prev[1] = 50 + 70 = 120`
       - `curr[0] = Math.max(curr[0], activity) = Math.max(0, 120) = 120`
     - For `i = 2`: 
       - `activity = points[1][2] + prev[2] = 80 + 40 = 120`
       - `curr[0] = Math.max(curr[0], activity) = Math.max(120, 120) = 120`

   - **Last = 1**:
     - Initialize `curr[1] = 0`
     - For `i = 0`: 
       - `activity = points[1][0] + prev[0] = 20 + 70 = 90`
       - `curr[1] = Math.max(curr[1], activity) = Math.max(0, 90) = 90`
     - For `i = 2`: 
       - `activity = points[1][2] + prev[2] = 80 + 40 = 120`
       - `curr[1] = Math.max(curr[1], activity) = Math.max(90, 120) = 120`

   - **Last = 2**:
     - Initialize `curr[2] = 0`
     - For `i = 0`: 
       - `activity = points[1][0] + prev[0] = 20 + 70 = 90`
       - `curr[2] = Math.max(curr[2], activity) = Math.max(0, 90) = 90`
     - For `i = 1`: 
       - `activity = points[1][1] + prev[1] = 50 + 70 = 120`
       - `curr[2] = Math.max(curr[2], activity) = Math.max(90, 120) = 120`

   - **Last = 3**:
     - Initialize `curr[3] = 0`
     - For `i = 0`: 
       - `activity = points[1][0] + prev[0] = 20 + 70 = 90`
       - `curr[3] = Math.max(curr[3], activity) = Math.max(0, 90) = 90`
     - For `i = 1`: 
       - `activity = points[1][1] + prev[1] = 50 + 70 = 120`
       - `curr[3] = Math.max(curr[3], activity) = Math.max(90, 120) = 120`
     - For `i = 2`: 
       - `activity = points[1][2] + prev[2] = 80 + 40 = 120`
       - `curr[3] = Math.max(curr[3], activity) = Math.max(120, 120) = 120`

   After calculating for `day 1`:

   ```javascript
   curr = [120, 120, 120, 120];
   ```

3. Update `prev` to `curr` for the next iteration:

   ```javascript
   prev = curr;
   ```

#### Day 2 (index `day = 2`)

1. Initialize a new `curr` array to store the results for `day 2`.

   ```javascript
   let curr = new Array(4).fill(0);
   ```

2. Iterate over `last` (0 to 3), which represents the last activity done the previous day.

   - **Last = 0**:
     - Initialize `curr[0] = 0`
     - For `i = 1`: 
       - `activity = points[2][1] + prev[1] = 60 + 120 = 180`
       - `curr[0] = Math.max(curr[0], activity) = Math.max(0, 180) = 180`
     - For `i = 2`: 
       - `activity = points[2][2] + prev[2] = 90 + 120 = 210`
       - `curr[0] = Math.max(curr[0], activity) = Math.max(180, 210) = 210`

   - **Last = 1**:
     - Initialize `curr[1] = 0`
     - For `i = 0`: 
       - `activity = points[2][0] + prev[0] = 30 + 120 = 150`
       - `curr[1] = Math.max(curr[1], activity) = Math.max(0, 150) = 150`
     - For `i = 2`: 
       - `activity = points[2][2] + prev[2] = 90 + 120 = 210`
       - `curr[1] = Math.max(curr[1], activity) = Math.max(150, 210) = 210`

   - **Last = 2**:
     - Initialize `curr[2] = 0`
     - For `i = 0`: 
       - `activity = points[2][0] + prev[0] = 30 + 120 = 150`
       - `curr[2] = Math.max(curr[2], activity) = Math.max(0, 150) = 150`
     - For `i = 1`: 
       - `activity = points[2][1] + prev[1] = 60 + 120 = 180`
       - `curr[2] = Math.max(curr[2], activity) = Math.max(150, 180) = 180`

   - **Last = 3**:
     - Initialize `curr[3] = 0`
     - For `i = 0`: 
       - `activity = points[2][0] + prev[0] = 30 + 120 = 150`
       - `curr[3] = Math.max(curr[3], activity) = Math.max(0, 150) = 150`
     - For `i = 1`: 
       - `activity = points[2][1] + prev[1] = 60 + 120 = 180`
       - `curr[3] = Math.max(curr[3], activity) = Math.max(150, 180) = 180`
     - For `i = 2`: 
       - `activity = points[2][2] + prev[2] = 90 + 120 = 210`
       - `curr[3] = Math.max(curr[3], activity) = Math.max(180, 210) = 210`

   After calculating for `day 2`:

   ```javascript
   curr = [210, 210, 180, 210];
   ```

3. Update `prev` to `curr` (though no more days to process, this would be the final update):

   ```javascript
   prev = curr;
   ```

### Final Result

The final result is stored in `prev[3]`, which is `210`. This means the maximum points the Ninja can earn after all 3 days is **210**.
 */