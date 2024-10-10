// function rodCuttingRecursive(price , n){
//     function cutRod(index , n){
//         if(index === 0 ){
//             // Base case: when index is 0, price is price[0] times n
//             return n*price[0] // because we maximize the cost and the arrays is the sorted so at the last we should take the mimnimum number of price ,and mutilpy to it to the total length, so it gets miximize
           
//         }
//         let notTake  = 0+ cutRod(index-1 , n);
//         let take = -Infinity;
//         const rodLength = index+1;
//         if(rodLength<=n){
//             take = price[index]+cutRod(index , n-rodLength);
//         }
//         return Math.max(take,notTake)
//     }
//     return cutRod(price.length-1 , n)
// }
// const price = [2, 5, 7, 8, 10];
// const n = 5;
// console.log(rodCuttingRecursive(price, n)); // Output: 12

//-----------------Memoization------------------//
// function rodCuttingRecursive(price , n){
//     const dp = Array(price.length).fill().map(()=>Array(n+1).fill(-1))
//     function cutRod(index , n){
//         if(index === 0 ){
//             // Base case: when index is 0, price is price[0] times n
//             return n*price[0] // because we maximize the cost and the arrays is the sorted so at the last we should take the mimnimum number of price ,and mutilpy to it to the total length, so it gets miximize
           
//         }
//         if(dp[index][n]!==-1) return dp[index][n]
//         let notTake  = 0+ cutRod(index-1 , n);
//         let take = -Infinity;
//         const rodLength = index+1;
//         if(rodLength<=n){
//             take = price[index]+cutRod(index , n-rodLength);
//         }
//         return dp[index][n]= Math.max(take,notTake)
//     }
//     return cutRod(price.length-1 , n)
// }
// const price = [2, 5, 7, 8, 10];
// const n = 5;
// console.log(rodCuttingRecursive(price, n)); // Output: 12

//------------------Tabulation----------------//
// function rodCuttingTabulation(price, n) {
//     const dp = Array(price.length).fill().map(() => Array(n + 1).fill(0));
//     for (let i = 0; i <= n; i++) {  // n can be anything , start form the 0 
//         dp[0][i] = i * price[0];
//     }
//     for (let index = 1; index < price.length; index++) {
//         for (let length = 0; length <= n; length++) {
//             let notTake = dp[index - 1][length];
//             let take = -Infinity;
//             const rodLength = index + 1;
//             if (rodLength <= length) {
//                 take = price[index] + dp[index][length - rodLength];
//             }
//             dp[index][length] = Math.max(take, notTake);
//         }
//     }
//     return dp[price.length - 1][n];
// }
// const price = [2, 5, 7, 8, 10];
// const n = 5;
// console.log(rodCuttingTabulation(price, n)); // Output: 12


//----------------Space-Optimzation-------------//
function rodCuttingSpaceOptimized(price, n) {
    let prev = Array(n + 1).fill(0);
    let curr = Array(n + 1).fill(0);

    for (let i = 0; i <= n; i++) {
        prev[i] = i * price[0];
    }

    for (let index = 1; index < price.length; index++) {
        for (let length = 0; length <= n; length++) {
            let notTake = prev[length];
            let take = -Infinity;
            const rodLength = index + 1;
            if (rodLength <= length) {
                take = price[index] + curr[length - rodLength];
            }
            curr[length] = Math.max(take, notTake);
        }
         //prev =  curr.slice();
        prev = [...curr]// Copy current row to the previous row for next iteration
    }

    return prev[n];
}
const price = [2, 5, 7, 8, 10];
const n = 5;
console.log(rodCuttingSpaceOptimized(price, n)); // Output: 12
