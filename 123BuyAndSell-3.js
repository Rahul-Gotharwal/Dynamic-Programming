// var maxProfit = function(prices) {
//     const n = prices.length
//     function helper(ind , buy , cap){
//         if(ind===n) return 0;
//         if(cap===0) return 0; 

//         let profit = 0 ;
//         if(buy){
//          profit = Math.max(-prices[ind]+helper(ind+1,0, cap) , 0+helper(ind+1,1 , cap))
//         }
//         else{
//             profit = Math.max(prices[ind] + helper(ind+1 ,1 , cap-1),0+helper(ind+1 , 0 , cap));
    
//         }
//        return profit
        
//     }
//     return helper(0 , 1 , 2)
   

// };

// let prices = [3,3,5,0,0,3,1,4];
// console.log(maxProfit(prices))

//----------------Memoization------------------//
// var maxProfit = function(prices) {
//     const n = prices.length
//     // Creating a 3D array to store dynamic programming values
//     const dp = new Array(n).fill(null).map(() =>
//         new Array(2).fill(null).map(() =>
//             new Array(3).fill(-1)
//         )
//     );
//     function helper(ind , buy , cap){
//         if(ind===n) return 0;
//         if(cap===0) return 0; 
//         if(dp[ind][buy][cap]!==-1) return dp[ind][buy][cap]
//         let profit = 0 ;
//         if(buy){
//          profit = Math.max(-prices[ind]+helper(ind+1,0, cap) , 0+helper(ind+1,1 , cap))
//         }
//         else{
//             profit = Math.max(prices[ind] + helper(ind+1 ,1 , cap-1),0+helper(ind+1 , 0 , cap));
    
//         }
//      return  dp[ind][buy][cap] =  profit;
       
        
//     }
//     return helper(0 , 1 , 2)
   

// };

// let prices = [3,3,5,0,0,3,1,4];
// console.log(maxProfit(prices))


//------------------Tabulation--------------------//


function maxProfit(prices) {
    const n = prices.length;

    // Creating a 3D array to store dynamic programming values
    const dp = new Array(n + 1).fill(null).map(() =>
        new Array(2).fill(null).map(() =>
            new Array(3).fill(0)
        )
    );
    // direct yaad rkho ki last rows me 0 fill krna he
    // for the  capacity 0  the any  index and the buy can be 0 ;
    for(let ind = 0 ; ind<=n ; ind++){
        for(let buy = 0 ; buy<=1 ; buy++){
        dp[ind][buy][0]  = 0 
        }
    }
    // for the index n means at the last , the capcaity and the buy can be anything
    for(let buy = 0 ; buy<=1 ; buy++){
        for(let cap = 0 ; cap<=2 ; cap++){
            dp[n][buy][cap] = 0
        }
    }
   for(let ind  = n-1 ; ind>=0 ; ind--){
    for(let buy = 0 ; buy<=1 ; buy++){
        for(let cap =1 ; cap<=2 ; cap++){
            let profit = 0;
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
   return dp[0][1][2]  //same as helper (0,1,2)
   
}
let prices = [3,3,5,0,0,3,1,4];
console.log(maxProfit(prices))


//--------------------space-opimization--------------//


function maxProfit(prices) {
    const n = prices.length;

    // Create two arrays 'ahead' and 'cur' to store dynamic programming values
    const ahead = new Array(2).fill(null).map(() =>
        new Array(3).fill(0)
    );

    const cur = new Array(2).fill(null).map(() =>
        new Array(3).fill(0)
    );

    // Loop through the array to calculate the maximum profit
    for (let ind = n - 1; ind >= 0; ind--) {
        for (let buy = 0; buy <= 1; buy++) {
            for (let cap = 1; cap <= 2; cap++) {

                if (buy === 0) { // We can buy the stock
                    cur[buy][cap] = Math.max(
                        0 + ahead[0][cap],
                        -prices[ind] + ahead[1][cap]
                    );
                }

                if (buy === 1) { // We can sell the stock
                    cur[buy][cap] = Math.max(
                        0 + ahead[1][cap],
                        prices[ind] + ahead[0][cap - 1]
                    );
                }
            }
        }
        ahead[0] = [...cur[0]]; // Update 'ahead' with the values from 'cur'
        ahead[1] = [...cur[1]]; // Update 'ahead' with the values from 'cur'
    }

    return ahead[0][2];
}

// Main function
function main() {
    const prices = [3, 3, 5, 0, 0, 3, 1, 4];
    const n = prices.length;

    // Calculate the maximum profit
    const maxProfitValue = maxProfit(prices);

    console.log("The maximum profit that can be generated is", maxProfitValue);
}

// Call the main function to start the program
main();


