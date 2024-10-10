// var maxProfit = function (prices) {
//     const n = prices.length-1;
//   function helper( ind, buy) {

//     if(ind===n){
//      return 0;
//     }
//     let profit = 0 ;
//     // buy pe humare pass 2 condtion he ki current wale stock ko buy kre ya next wale ko , mtlb current ko skip kar de
//     if (buy) {
//        profit = Math.max(
//         -prices[ind] + helper(ind + 1, 0), // 0 means we skip the day for buying , because we know that inititally call is happen with 1 (we buy at first call) like helper(0,1)
//         0 + helper(ind + 1, 1)
//       );
//     } else {
//       // sell pe bhi humare ass 2 condtion  he ki aaj sell kre mtlb ki ccurrent day pe sell kre ya next day pe kre
//       profit = Math.max(prices[ind]+helper(ind+1 , 1) , 0+helper(ind+1 , 0))
//     }
//     return profit
//   }
//   return helper( 0 , 1)
// };
// let prices = [7,1,5,3,6,4];
// console.log(maxProfit(prices))


//------------------Memoization-----------------//
// var maxProfit = function (prices) {
//     const n = prices.length-1;
//     //  2 is because the 0 and 1 
//     const dp = new Array(n+1).fill().map(()=>new Array(2).fill(-1))
//   function helper( ind, buy) {

//     if(ind===n){
//      return 0;
//     }
//     if(dp[ind][buy]!==-1) return dp[ind][buy]
    
//     let profit = 0 ;
//     // buy pe humare pass 2 condtion he ki current wale stock ko buy kre ya next wale ko , mtlb current ko skip kar de
//     if (buy) { // if we buy means 1
//        profit = Math.max(
//         -prices[ind] + helper(ind + 1, 0), // 0 means we skip the day for buying , because we know that inititally call is happen with 1 (we buy at first call) like helper(0,1)
//         0 + helper(ind + 1, 1)
//       );
//     } else {
//       // sell pe bhi humare ass 2 condtion  he ki aaj sell kre mtlb ki ccurrent day pe sell kre ya next day pe kre
//       profit = Math.max(prices[ind]+helper(ind+1 , 1) , 0+helper(ind+1 , 0))
//     }
//     dp[ind][buy] = profit 
//     return dp[ind][buy]
//   }
//   return helper( 0 , 1) // answer is stored at the dp[0][1]
// };
// let prices = [7,1,5,3,6,4];
// console.log(maxProfit(prices))

/**
 * Let's go step by step to generate the **dp table** for the input `prices = [7, 1, 5, 3, 6, 4]`. Since the function has been corrected with memoization, the recursion will fill the `dp` table as it calculates the profit for different days and the states (whether we are buying or selling).

### Initialization:
- `n = prices.length - 1 = 5`
- `dp` is initialized as an array of dimensions `6 x 2` (6 days, each having a `buy` and `sell` state).
- Initially, every element in `dp` is `-1`.

### Filling the dp Table:

1. **Day 5 (ind = 5)**:
    - If we are allowed to buy (`buy = 1`), there are no more future days, so profit = 0.
    - If we are allowed to sell (`buy = 0`), there are no more future days, so profit = 0.

    After this step:
    ```
    dp[5][0] = 0  // sell state
    dp[5][1] = 0  // buy state
    ```

2. **Day 4 (ind = 4, price = 6)**:
    - If `buy = 1`: We can either buy on day 4 or skip. 
      - If we buy, the profit is `-6 + dp[5][0] = -6 + 0 = -6`.
      - If we skip, the profit is `dp[5][1] = 0`.
      - So, `dp[4][1] = max(-6, 0) = 0`.

    - If `buy = 0`: We can either sell or skip.
      - If we sell, the profit is `6 + dp[5][1] = 6 + 0 = 6`.
      - If we skip, the profit is `dp[5][0] = 0`.
      - So, `dp[4][0] = max(6, 0) = 6`.

    After this step:
    ```
    dp[4][0] = 6  // sell state
    dp[4][1] = 0  // buy state
    ```

3. **Day 3 (ind = 3, price = 3)**:
    - If `buy = 1`: 
      - If we buy, the profit is `-3 + dp[4][0] = -3 + 6 = 3`.
      - If we skip, the profit is `dp[4][1] = 0`.
      - So, `dp[3][1] = max(3, 0) = 3`.

    - If `buy = 0`:
      - If we sell, the profit is `3 + dp[4][1] = 3 + 0 = 3`.
      - If we skip, the profit is `dp[4][0] = 6`.
      - So, `dp[3][0] = max(3, 6) = 6`.

    After this step:
    ```
    dp[3][0] = 6  // sell state
    dp[3][1] = 3  // buy state
    ```

4. **Day 2 (ind = 2, price = 5)**:
    - If `buy = 1`: 
      - If we buy, the profit is `-5 + dp[3][0] = -5 + 6 = 1`.
      - If we skip, the profit is `dp[3][1] = 3`.
      - So, `dp[2][1] = max(1, 3) = 3`.

    - If `buy = 0`:
      - If we sell, the profit is `5 + dp[3][1] = 5 + 3 = 8`.
      - If we skip, the profit is `dp[3][0] = 6`.
      - So, `dp[2][0] = max(8, 6) = 8`.

    After this step:
    ```
    dp[2][0] = 8  // sell state
    dp[2][1] = 3  // buy state
    ```

5. **Day 1 (ind = 1, price = 1)**:
    - If `buy = 1`: 
      - If we buy, the profit is `-1 + dp[2][0] = -1 + 8 = 7`.
      - If we skip, the profit is `dp[2][1] = 3`.
      - So, `dp[1][1] = max(7, 3) = 7`.

    - If `buy = 0`:
      - If we sell, the profit is `1 + dp[2][1] = 1 + 3 = 4`.
      - If we skip, the profit is `dp[2][0] = 8`.
      - So, `dp[1][0] = max(4, 8) = 8`.

    After this step:
    ```
    dp[1][0] = 8  // sell state
    dp[1][1] = 7  // buy state
    ```

6. **Day 0 (ind = 0, price = 7)**:
    - If `buy = 1`: 
      - If we buy, the profit is `-7 + dp[1][0] = -7 + 8 = 1`.
      - If we skip, the profit is `dp[1][1] = 7`.
      - So, `dp[0][1] = max(1, 7) = 7`.

    - If `buy = 0`:
      - If we sell, the profit is `7 + dp[1][1] = 7 + 7 = 14`.
      - If we skip, the profit is `dp[1][0] = 8`.
      - So, `dp[0][0] = max(14, 8) = 14`.

    After this step:
    ```
    dp[0][0] = 14  // sell state
    dp[0][1] = 7   // buy state
    ```

### Final dp Table:

| Day (ind) | Sell (buy = 0) | Buy (buy = 1) |
|-----------|----------------|---------------|
| 0         | 14             | 7             |
| 1         | 8              | 7             |
| 2         | 8              | 3             |
| 3         | 6              | 3             |
| 4         | 6              | 0             |
| 5         | 0              | 0             |

### Final Answer:
The maximum profit is `dp[0][1] = 7`, which means the maximum profit we can achieve starting on day 0 with a buy option available is 7.
------------------NOTE------------------
// the answer is lile 14-7 => 7 (by doing the reccursive calls)
The value 14 in the DP table represents the maximum profit when you start on day 0 with a selling option available (buy = 0). However, this doesn't make sense in the context of the problem, because on the first day, you can't sell without having bought a stock first. That's why the buy = 0 scenario for day 0 is not considered valid.
 
Here's why dp[0][0] = 14 is ignored:
Starting Point:

At the start (ind = 0), you are allowed to buy (i.e., buy = 1), not sell. You cannot sell on the first day without owning any stock.
Therefore, the profit in dp[0][1] = 7 (the maximum profit when you start with a buy option) is the valid result.
Meaning of dp[0][0] = 14:

This value represents a situation where you could sell a stock immediately on day 0, which isn't valid because you haven't bought any stock yet.
The algorithm calculates dp[0][0] as part of its dynamic programming process, but the result only makes sense when the sequence of decisions leads up to selling after a buy.
Why we take dp[0][1] = 7 as the final answer:
Logical Flow: At the start (on day 0), you are supposed to buy, which means the starting scenario is when buy = 1. The DP table reflects the maximum profit you can make from that point onward when you start with the option to buy.

Final Profit: The maximum valid profit you can make when starting from day 0 with the ability to buy first is dp[0][1] = 7. This is the valid scenario for this problem, where you must first buy and then later sell to achieve maximum profit.

So, while 14 is technically a valid value for the sell state, it's not applicable for this problem because we can't start by selling without buying first. That's why the final answer is 7, which comes from the buy state at day 0.
 */

//---------------------Tabulation(n-1) to 0 --------------//
function maxProfit(prices){
    const n = prices.length;
    const dp = Array.from({length:n+1},()=>Array(2).fill(0));
   // dp[n][buy] = 0;  // For both buy and sell states at the last day, profit is 0.
   //Fill the Base Case:
   //The base case corresponds to the termination condition of recursion. In your case, this is when ind == n.
   //So, the last row of your DP table (i.e., dp[n][0] and dp[n][1]) should be initialized to 0
   dp[n][0] =  dp[n][1] = 0  ;
     // kyuki recirsion me hum 0  to n-1 ja rhe the to yha uska ulta kar denge
    for(let ind = n-1 ; ind>=0 ; ind--){
        // or buy and sell 1 to 0 ja rha tha to ab isko 1 to 0 leke jayenge
        for(let buy = 0 ; buy<=1 ; buy++){
            let profit;
            if(buy===1){ // We can buy the stock
              profit = Math.max(-prices[ind]+dp[ind+1][0], 0+dp[ind+1][1])
            }
            else{
             profit = Math.max(prices[ind]+dp[ind+1][1] , 0+dp[ind+1][0])
            }
            dp[ind][buy] = profit
        }
    }
   return dp[0][1] // same as helper (0,1)

}
let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices))

//--------------Space-OPtimization-------------//


function getMaximumProfit(Arr) {
    const n = Arr.length;

    // Initialize two arrays to store dynamic programming values for the current and ahead states
    const ahead = [0, 0];
    const cur = [0, 0];

    // Base condition
    ahead[0] = ahead[1] = 0;

    for (let ind = n - 1; ind >= 0; ind--) {
        for (let buy = 0; buy <= 1; buy++) {
            let profit;

            if (buy === 0) { // We can buy the stock
                profit = Math.max(
                    0 + ahead[0],           // Don't buy
                    -Arr[ind] + ahead[1]    // Buy
                );
            }

            if (buy === 1) { // We can sell the stock
                profit = Math.max(
                    0 + ahead[1],           // Don't sell
                    Arr[ind] + ahead[0]     // Sell
                );
            }
            cur[buy] = profit;
        }

        // Update the ahead array with the values from the cur array for the next iteration
        ahead[0] = cur[0];
        ahead[1] = cur[1];
    }

    return cur[0];
}

// Main function
function main() {
    const n = 6;
    const Arr = [7, 1, 5, 3, 6, 4];

    // Calculate the maximum profit
    const maxProfit = getMaximumProfit(Arr);

    console.log("The maximum profit that can be generated is", maxProfit);
}

// Call the main function to start the program
main();

//------------------leetcode-----------/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let start = prices[0];
    let len = prices.length;
        for(let i = 1;i<len; i++){
            if(start < prices[i]){
                max += prices[i] - start;
            }
            start = prices[i];
        }
    return max;
};
