// var maxProfit = function(prices) {
//     //const n = prices.length-1;
//     // change is here insted of length-1 , we do the length
//     const  n = prices.length
//   function helper( ind, buy) {
// // change in the base case because it should not go to the beyond of array limit , the index should be greater than of equal to the limit(n) of the array
//     if(ind>=n){
//      return 0;
//     }
//     let profit = 0 ;
//     if (buy) {
//        profit = Math.max(
//         -prices[ind] + helper(ind + 1, 0), 
//         0 + helper(ind + 1, 1)
//       );
//     } else {
      
//       profit = Math.max(prices[ind]+helper(ind+2 , 1) , 0+helper(ind+1 , 0)) // Sell stock and skip the next day (cooldown)
//     }
//     return profit
//   }
//   return helper( 0 , 1)
// };
// let prices = [1,2,3,0,2];
// console.log(maxProfit(prices))

//----------------tabulation----------------//

/**
 * //   profit = Math.max(prices[ind]+dp[ind+2][1] , 0+dp[ind+1][0]) , error when we do the direct change in code
The TypeError: Cannot read properties of undefined (reading '1') is occurring because on some days, you are trying to access dp[ind+2][1], which could be out of bounds when ind is close to n-1 or n-2. Specifically, when ind is n-1, trying to access dp[ind+2][1] goes beyond the last valid index of the dp array.
 */
function maxProfit(prices){
    const n = prices.length;
    const dp = Array.from({length:n+1},()=>Array(2).fill(0));
   dp[n][0] =  dp[n][1] = 0  ;// Base case: No profit when we're beyond the last day
    for(let ind = n-1 ; ind>=0 ; ind--){
        // or buy and sell 1 to 0 ja rha tha to ab isko 1 to 0 leke jayenge
        for(let buy = 0 ; buy<=1 ; buy++){
            let profit;
            if(buy===1){ // We can buy the stock
              profit = Math.max(-prices[ind]+dp[ind+1][0], 0+dp[ind+1][1])
            }
            else{
                // If we have to sell
                // Ensure that dp[ind+2] is within bounds before accessing it
             profit = Math.max(prices[ind]+(ind+2< n ? dp[ind+2][1] : 0 ), 0+dp[ind+1][0])
            }
            dp[ind][buy] = profit
        }
    }
   return dp[0][1] // same as helper (0,1)

}
let prices = [1,2,3,0,2];
console.log(maxProfit(prices))