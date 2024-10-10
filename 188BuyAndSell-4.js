// var maxProfit = function(k, prices) {
//     const n = prices.length;

//     // Recursive helper function
//     function helper(ind, buy, k) {
//         // Base cases
//         if (ind === n || k === 0) return 0;

//         let profit = 0;

//         // If we're allowed to buy, choose to buy or skip
//         if (buy) {
//             profit = Math.max(
//                 -prices[ind] + helper(ind + 1, 0, k),  // Buy the stock
//                 0 + helper(ind + 1, 1, k)              // Skip buying
//             );
//         } else {
//             // If we're selling, choose to sell or skip
//             profit = Math.max(
//                 prices[ind] + helper(ind + 1, 1, k - 1),  // Sell the stock
//                 0 + helper(ind + 1, 0, k)                // Skip selling
//             );
//         }
//         return profit;
//     }

//     return helper(0, 1, k);
// }

// let k = 2, prices = [2, 4, 1];
// console.log(maxProfit(k, prices));  // Output should be 2

//----------------Memoization------------------//
// var maxProfit = function(k, prices) {
//     const n = prices.length
//     // Creating a 3D array to store dynamic programming values
//     const dp = new Array(n).fill(null).map(() =>
//         new Array(2).fill(null).map(() =>
//             new Array(K+1).fill(-1) // change is here we done the k+1
//         )
//     );
//     function helper(ind , buy , k){
//         if(ind===n) return 0;
//         if(k===0) return 0; 
//         if(dp[ind][buy][k]!==-1) return dp[ind][buy][k]
//         let profit = 0 ;
//         if(buy){
//          profit = Math.max(-prices[ind]+helper(ind+1,0, k) , 0+helper(ind+1,1 , k))
//         }
//         else{
//             profit = Math.max(prices[ind] + helper(ind+1 ,1 , k-1),0+helper(ind+1 , 0 , k));
    
//         }
//      return  dp[ind][buy][k] =  profit;
       
        
//     }
//     return helper(0 , 1 , 2)
   

// };

// let prices = [2,4,1] , k = 2
// console.log(maxProfit( k , prices))


//---------------------Tabulation------------------//

function maxProfit(k , prices) {
    const n = prices.length;
     if(n===0) return 0; //edge case - no prices
    // Creating a 3D array to store dynamic programming values
    const dp = new Array(n + 1).fill(null).map(() =>
        new Array(2).fill(null).map(() =>
            new Array(k+1).fill(0) // change is here we done the k+1 
        )
    );
    // direct yaad rkho ki last rows me 0 fill krna he
    // for the  capacity 0  the any  index and the buy can be 0 ;
    for(let ind = 0 ; ind<=n ; ind++){
        for(let buy = 0 ; buy<=1 ; buy++){
        dp[ind][buy][0]  = 0 ;
        }
    }
    // for the index n means at the last , the capcity and the buy can be anything
    for(let buy = 0 ; buy<=1 ; buy++){
        for(let cap = 0 ; cap<=k ; cap++){ // change is here we use the cap till the k , because if we use the same k variable it will overwrite the k varabile again and again
            dp[n][buy][cap] = 0
        }
    }
   for(let ind  = n-1 ; ind>=0 ; ind--){
    for(let buy = 0 ; buy<=1 ; buy++){
        for(let cap =1 ; cap<=k ; cap++){
            let profit = 0
            if(buy===1){ // We can buy the stock
                profit = Math.max(-prices[ind]+dp[ind+1][0][cap], 0+dp[ind+1][1][cap])
              }
              else{
               profit = Math.max(prices[ind]+dp[ind+1][1][cap-1] , 0+dp[ind+1][0][cap])
              }
              dp[ind][buy][cap] = profit
        }
    }
   }
   return dp[0][1][k]  //same as helper (0,1,2)
   
}
let k = 2, prices = [2,4,1]
console.log(maxProfit(k,prices))

