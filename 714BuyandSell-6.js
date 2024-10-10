// var maxProfit = function(prices, fee) {
//  const n = prices.length;  // change is here in length-1 to the length
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
//       profit = Math.max(prices[ind]-fee+helper(ind+1 , 1) , 0+helper(ind+1 , 0))
//     }
//     return profit
//   }
//   return helper( 0 , 1)
// };

// let prices = [1,3,2,8,4,9], fee = 2;
// console.log(maxProfit(prices,fee))

//-----------------Memoization------------------//

// var maxProfit = function(prices, fee) {
//     const n = prices.length;
//     const dp = Array.from({ length: n }, () => Array(2).fill(-1)); // dp array for memoization

//     function helper(ind, buy) {
//         if (ind === n) return 0; // Base case: no more days left
        
//         if (dp[ind][buy] !== -1) return dp[ind][buy]; // Return memoized result
        
//         let profit = 0;
//         if (buy) {
//             // Option to buy the stock or skip
//             profit = Math.max(
//                 -prices[ind] + helper(ind + 1, 0), // Buy stock
//                 0 + helper(ind + 1, 1) // Skip and don't buy
//             );
//         } else {
//             // Option to sell the stock or skip
//             profit = Math.max(
//                 prices[ind] - fee + helper(ind + 1, 1), // Sell stock
//                 0 + helper(ind + 1, 0) // Skip and don't sell
//             );
//         }

//         dp[ind][buy] = profit; // Store result in memo table
//         return profit;
//     }

//     return helper(0, 1); // Start with day 0 and buying option
// };

// let prices = [1, 3, 2, 8, 4, 9], fee = 2;
// console.log(maxProfit(prices, fee)); // Expected output: 8


//----------------------Tabulation-----------------//

// function maxProfit(prices){
//     const n = prices.length;
//     const dp = Array.from({length:n+1},()=>Array(2).fill(0));
//    dp[n][0] =  dp[n][1] = 0  ;
//     for(let ind = n-1 ; ind>=0 ; ind--){
//         for(let buy = 0 ; buy<=1 ; buy++){
//             let profit;
//             if(buy===1){ // We can buy the stock
//               profit = Math.max(-prices[ind]+dp[ind+1][0], 0+dp[ind+1][1])
//             }
//             else{
//              profit = Math.max(prices[ind]-fee+dp[ind+1][1] , 0+dp[ind+1][0])
//             }
//             dp[ind][buy] = profit
//         }
//     }
//    return dp[0][1] // same as helper (0,1)

// }
// let prices = [1, 3, 2, 8, 4, 9], fee = 2;
// console.log(maxProfit(prices, fee)); // Expected output: 8
//------------------leetcode-----------------//
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const n = prices.length;
    let profit = 0, buyPrice = prices[0];

    for (let i = 1; i < n; i++) {
        profit = Math.max(profit, prices[i] - buyPrice - fee)
        buyPrice = Math.min(buyPrice, prices[i] - profit)
    }
    return profit
};
let prices = [1, 3, 2, 8, 4, 9], fee = 2;
console.log(maxProfit(prices, fee)); // Expected output: 8