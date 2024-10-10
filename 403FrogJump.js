//----------Recursion--------------//
// NOTE - for loop is for all the possible jumps like k , k-1 and k+1
// function canCross(stones, index = 0, prevJump = 0) {
//   if (index === stones.length - 1) return true;
//   // the loops is goes between the -1 , 0 and +1
//   for (let nextJump = prevJump - 1; nextJump <= prevJump + 1; nextJump++) {
//     if (nextJump > 0) {
//       // indexOf is give us the position
//       let nextIndex = stones.indexOf(stones[index] + nextJump);
//       // let a = stones.indexOf(stones[index]);
//       // console.log(a);
//       // nextIndex !== -1 read the comment below for understand the condition
//       if (nextIndex !== -1 && canCross(stones, nextIndex, nextJump)) {
//         return true;
//       }
//     }
//   }
//   return false;

//   // comndtion is because if it is equal to 0 means we nextJump at the point where we are and if it is negative then we not move in the forward direction
// }
// let stones = [0, 1, 3, 5, 6, 8, 12, 17];
// console.log(canCross(stones)); // Output: true
/**
 * The condition `nextIndex !== -1` is used to ensure that the next stone the frog wants to jump to actually exists in the `stones` array.

### Explanation:
- The `indexOf` method returns the index of the first occurrence of a specified value in an array. If the value is not found, it returns `-1`.
- In the `canCross` function, `nextIndex = stones.indexOf(stones[index] + nextJump)` calculates the position of the next stone that the frog would land on after making a jump of `nextJump` units.
- If `nextIndex` is `-1`, it means there is no stone at that position, and the frog cannot make that jump. Therefore, the function should not proceed with the recursion for that jump.
- The condition `nextIndex !== -1` ensures that the function only makes a recursive call if the jump is valid and lands on an existing stone.
 */
/**
 * You're right! Let's correct that mistake and go through the dry run of the `canCross` function again with the stones array `[0, 1, 3, 5, 6, 8, 12, 17]`.

### Initial Setup:
- The `stones` array represents the positions of stones in the river.
- The frog starts at position `0` (`index = 0`) with an initial jump distance of `0` (`prevJump = 0`).

### Corrected Dry Run:

1. **First Call:**
   - `canCross(stones, index = 0, prevJump = 0)`
   - **Base Case Check:** `index` is not the last stone, so we proceed.
   - **For Loop:**
     - `nextJump = -1` (Ignored because `nextJump > 0` fails)
     - `nextJump = 0` (Ignored because `nextJump > 0` fails)
     - `nextJump = 1`
       - Calculate `nextIndex = stones.indexOf(0 + 1) = stones.indexOf(1)`
       - Found at `index 1`, so make a recursive call.

2. **Second Call:**
   - `canCross(stones, index = 1, prevJump = 1)`
   - **Base Case Check:** `index` is not the last stone, so we proceed.
   - **For Loop:**
     - `nextJump = 0` (Ignored because `nextJump > 0` fails)
     - `nextJump = 1`
       - Calculate `nextIndex = stones.indexOf(1 + 1) = stones.indexOf(2)`
       - Not found (`nextIndex = -1`), so continue.
     - `nextJump = 2`
       - Calculate `nextIndex = stones.indexOf(1 + 2) = stones.indexOf(3)`
       - Found at `index 2`, so make a recursive call.

3. **Third Call:**
   - `canCross(stones, index = 2, prevJump = 2)`
   - **Base Case Check:** `index` is not the last stone, so we proceed.
   - **For Loop:**
     - `nextJump = 1`
       - Calculate `nextIndex = stones.indexOf(3 + 1) = stones.indexOf(4)`
       - Not found (`nextIndex = -1`), so continue.
     - `nextJump = 2`
       - Calculate `nextIndex = stones.indexOf(3 + 2) = stones.indexOf(5)`
       - Found at `index 3`, so make a recursive call.
     - `nextJump = 3`
       - Calculate `nextIndex = stones.indexOf(3 + 3) = stones.indexOf(6)`
       - Found at `index 4`, but the recursive call for `nextJump = 2` already made a valid path, so this jump is not necessary to explore.

4. **Fourth Call:**
   - `canCross(stones, index = 3, prevJump = 2)`
   - **Base Case Check:** `index` is not the last stone, so we proceed.
   - **For Loop:**
     - `nextJump = 1`
       - Calculate `nextIndex = stones.indexOf(5 + 1) = stones.indexOf(6)`
       - Found at `index 4`, so make a recursive call.
     - `nextJump = 2`
       - Calculate `nextIndex = stones.indexOf(5 + 2) = stones.indexOf(7)`
       - Not found (`nextIndex = -1`), so continue.
     - `nextJump = 3`
       - Calculate `nextIndex = stones.indexOf(5 + 3) = stones.indexOf(8)`
       - Found at `index 5`, but the recursive call for `nextJump = 1` already made a valid path, so this jump is not necessary to explore.

5. **Fifth Call:**
   - `canCross(stones, index = 4, prevJump = 1)`
   - **Base Case Check:** `index` is not the last stone, so we proceed.
   - **For Loop:**
     - `nextJump = 0` (Ignored because `nextJump > 0` fails)
     - `nextJump = 1`
       - Calculate `nextIndex = stones.indexOf(6 + 1) = stones.indexOf(7)`
       - Not found (`nextIndex = -1`), so continue.
     - `nextJump = 2`
       - Calculate `nextIndex = stones.indexOf(6 + 2) = stones.indexOf(8)`
       - Found at `index 5`, so make a recursive call.

6. **Sixth Call:**
   - `canCross(stones, index = 5, prevJump = 2)`
   - **Base Case Check:** `index` is not the last stone, so we proceed.
   - **For Loop:**
     - `nextJump = 1`
       - Calculate `nextIndex = stones.indexOf(8 + 1) = stones.indexOf(9)`
       - Not found (`nextIndex = -1`), so continue.
     - `nextJump = 2`
       - Calculate `nextIndex = stones.indexOf(8 + 2) = stones.indexOf(10)`
       - Not found (`nextIndex = -1`), so continue.
     - `nextJump = 3`
       - Calculate `nextIndex = stones.indexOf(8 + 3) = stones.indexOf(11)`
       - Not found (`nextIndex = -1`), so continue.
     - `nextJump = 4`
       - Calculate `nextIndex = stones.indexOf(8 + 4) = stones.indexOf(12)`
       - Found at `index 6`, so make a recursive call.

7. **Seventh Call:**
   - `canCross(stones, index = 6, prevJump = 4)`
   - **Base Case Check:** `index` is not the last stone, so we proceed.
   - **For Loop:**
     - `nextJump = 3`
       - Calculate `nextIndex = stones.indexOf(12 + 3) = stones.indexOf(15)`
       - Not found (`nextIndex = -1`), so continue.
     - `nextJump = 4`
       - Calculate `nextIndex = stones.indexOf(12 + 4) = stones.indexOf(16)`
       - Not found (`nextIndex = -1`), so continue.
     - `nextJump = 5`
       - Calculate `nextIndex = stones.indexOf(12 + 5) = stones.indexOf(17)`
       - Found at `index 7`, so make a recursive call.

8. **Eighth Call:**
   - `canCross(stones, index = 7, prevJump = 5)`
   - **Base Case Check:** `index == 7`, which is the last stone (`stones.length - 1`).
   - Returns `true`.

### Conclusion:
- The function returns `true` as the frog successfully reaches the last stone by making valid jumps according to the rules.
- The recursion unwinds, returning `true` all the way back to the first call. 

This corrected dry run accurately reflects how the function checks each possible jump and ultimately finds a valid path across the river.
 */
//---------------Without for loop(Recursion) ---------------//
// function canCross(stones, index = 0, lastJump = 0) {
//   // Base case: if the frog is on the last stone
//   if (index === stones.length - 1) return true;

//   // Try jumping with a distance of lastJump - 1
// last jum is the previousjump
//   if (lastJump - 1 > 0) {
//     let nextIndex = stones.indexOf(stones[index] + (lastJump - 1));
//     if (nextIndex !== -1 && canCross(stones, nextIndex, lastJump - 1)) {
//       return true;
//     }
//   }

//   // Try jumping with a distance of lastJump
//   if (lastJump > 0) {
//     let nextIndex = stones.indexOf(stones[index] + lastJump);
//     if (nextIndex !== -1 && canCross(stones, nextIndex, lastJump)) {
//       return true;
//     }
//   }

//   // Try jumping with a distance of lastJump + 1
//   if (lastJump + 1 > 0) {
//     let nextIndex = stones.indexOf(stones[index] + (lastJump + 1));
//     if (nextIndex !== -1 && canCross(stones, nextIndex, lastJump + 1)) {
//       return true;
//     }
//   }

//   return false;
// }

// // Example usage:
// let stones = [0, 1, 3, 5, 6, 8, 12, 17];
// console.log(canCross(stones)); // Output: true

//------------Dynamic Programming (Memoization)---------------//
function canCross(stones, index = 0, lastJump = 0, memo = {}) {
  // we not go with the code by the youtube because there are many paths (or read the dry run)
  /**Memoization in Action:
Now, suppose that later in the recursion, the function revisits the state index = 1, lastJump = 1 (meaning it's trying to see if it can cross the river from stone 1 with a last jump of 1 unit again).
Memo Check: This time, before doing any more computations, it checks if memo["1-1"] exists. If it does, the function immediately returns the value stored in memo["1-1"] (either true or false). */
  let key = `${index}-${lastJump}`; // it is 0-0, not minus
  if (memo[key] !== undefined) return memo[key];

  // Base case
  if (index === stones.length - 1) return true;

  for (let nextjump = lastJump - 1; nextjump <= lastJump + 1; nextjump++) {
    if (nextjump > 0) {
      let nextIndex = stones.indexOf(stones[index] + nextjump);
      if (nextIndex !== -1 && canCross(stones, nextIndex, nextjump, memo)) {
        memo[key] = true;
        return true;
      }
    }
  }

  memo[key] = false;
  return false;
}

// Example usage:
let stones = [0, 1, 3, 5, 6, 8, 12, 17];
console.log(canCross(stones)); // Output: true

// //-----------3. Tabulation--------------------//
// function canCrossTab(stones) {
//   const n = stones.length;
//   const dp = Array.from({ length: n }, () => new Set());
//   dp[0].add(0);

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//       const gap = stones[i] - stones[j];
//       if (dp[j].has(gap) || dp[j].has(gap - 1) || dp[j].has(gap + 1)) {
//         dp[i].add(gap);
//       }
//     }
//   }

//   return dp[n - 1].size > 0;
// }

// console.log(canCrossTab(stones)); // Output: true

// //----------4. Space Optimization---------------------//

// function canCrossOptimized(stones) {
//   const dp = new Map();
//   dp.set(0, new Set([0]));

//   for (let i = 1; i < stones.length; i++) {
//     dp.set(i, new Set());
//     for (let j = 0; j < i; j++) {
//       const gap = stones[i] - stones[j];
//       if (
//         dp.get(j).has(gap) ||
//         dp.get(j).has(gap - 1) ||
//         dp.get(j).has(gap + 1)
//       ) {
//         dp.get(i).add(gap);
//       }
//     }
//   }

//   return dp.get(stones.length - 1).size > 0;
// }

// console.log(canCrossOptimized(stones)); // Output: true
