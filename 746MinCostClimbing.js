//-----------------Recursive Method(Top-Down)------------------//
// function minCostClimbingStairs(cost , n){
//     // writing the base case
//     // hum top se start kar rhe he or 0 ya 1 tk aa rhe he
//     if(n===0) return cost[n]; // agar hum length 0  tk phuch gye to return krdo 
//     if(n===1) return cost[n];  //agar hum length 1 tk phuch gye to return krdo 
//     return cost[n] + Math.min(minCostClimbingStairs(cost,n-1) , minCostClimbingStairs(cost,n-2) );
//     // cost[n] mtlb current call  add kri , or base case reach krne pe humko ans milega jo hoga 15 ,10
// }
// function findMinCost(cost){
//     const n = cost.length;
//     //minCostClimbingStairs(cost,n-1) => sbse phle iske liye call jayegi or uper calculation hogi , uske baad me minCostClimbingStairs(cost , n-2) 
//     return Math.min(minCostClimbingStairs(cost,n-1) , minCostClimbingStairs(cost , n-2));
// }
// const cost = [10, 15, 20]; // length is 3 
// console.log(findMinCost(cost)); //  Output: 15
/**
 * Given cost = [10, 15, 20] and n = 3 (since n is the length of the array):

Initial Call:

findMinCost(cost)
Calls minCostClimbingStairs(cost, 2) and minCostClimbingStairs(cost, 1)
Recursion Tree for minCostClimbingStairs(cost, 2):

scss
Copy code
            minCostClimbingStairs(cost, 2)
              /                        \
minCostClimbingStairs(cost, 1)   minCostClimbingStairs(cost, 0)
        /                          \
       15                          10
minCostClimbingStairs(cost, 2) returns 20 + Math.min(15, 10) = 20 + 10 = 30
Recursion Tree for minCostClimbingStairs(cost, 1):

scss
Copy code
           minCostClimbingStairs(cost, 1)
               |
              15
Final Calculation:

findMinCost(cost) returns Math.min(30, 15) = 15 
 */

//--------------Recursive Method , jisme hum 0 se n pe jayenge(Bottom-Up)Recursion ----------------//
// function minCostClimbingHelper(current , next , n , cost){
//  if(n===0) return current
//  if(n===1) return next
//  return Math.min(                   
//     minCostClimbingHelper(next, current + cost[n - 1], n - 1, cost), 
//     minCostClimbingHelper(next, current + cost[n - 2], n - 1, cost)
// );
// }

// function findMinCost(cost){
//      const n = cost.length;
//      return Math.min(
//         // minCostClimbingHelper(cost[n - 1], cost[n - 2], n - 1, cost) this part is call first with values 20, 15, 2
//          minCostClimbingHelper(cost[n - 1], cost[n - 2], n - 1, cost),// 20 ,15,2
//          minCostClimbingHelper(cost[n - 1], cost[n - 2], n - 2, cost) //20,15,1
//      );
    
// }
// const cost = [10, 15, 20];
// console.log(findMinCost(cost));

/**
 * Recursion Tree:
Given cost = [10, 15, 20] and n = 3:

Initial Call:

findMinCost(cost)
Calls minCostClimbingHelper(20, 15, 2, cost) and minCostClimbingHelper(20, 15, 1, cost)
Recursion Tree for minCostClimbingHelper(20, 15, 2, cost):

scss
Copy code
          minCostClimbingHelper(20, 15, 2, cost)
                     /                     \
minCostClimbingHelper(15, 35, 1, cost)    minCostClimbingHelper(15, 30, 1, cost)
            |                                     |
           35                                   30
minCostClimbingHelper(20, 15, 2, cost) returns Math.min(35, 30) = 30
Recursion Tree for minCostClimbingHelper(20, 15, 1, cost):

scss
Copy code
        minCostClimbingHelper(20, 15, 1, cost)
                      |
                     15
Final Calculation:

findMinCost(cost) returns Math.min(30, 15) = 15
Summary:
Both approaches eventually yield the same result, which is 15, as the minimum cost to climb the stairs.
The difference is in how the recursion is structured: the first approach works top-down (from the last step backward), while the second approach is bottom-up (from the start moving forward). The recursion trees visualize the sequence of recursive calls made in each approach.
 */

//-----Memoization (Top-Down DP)---------------//
//-1 make an DP array
//-2 first store the answer of recusrion then return
//-3 check the DP array
// function minCostClimbingStairs(cost , n){
//   let DP = new Array(n+1).fill(-1) 
//     if(n===0) return cost[n]; 
//     if(n===1) return cost[n];  
//     if(DP[n]!==-1) return DP[n] 
//     DP[n] =  cost[n] + Math.min(minCostClimbingStairs(cost,n-1) , minCostClimbingStairs(cost,n-2) );
//     return DP[n]
// }
// function findMinCost(cost){
//     const n = cost.length;
//     return Math.min(minCostClimbingStairs(cost,n-1) , minCostClimbingStairs(cost , n-2));
// }
// const cost = [10, 15, 20]; // length is 3 
// console.log(findMinCost(cost)); //  Output: 15


//------------------- Tabulation (Bottom-Up DP)  ------------------//

// function findMinCost(cost){
//     const n = cost.length;
//     let DP = new Array(n) 
//     DP[0] = cost[0];
//     DP[1] = cost[1] ;
//     for(let i = 2 ; i<n ; i++){
//         DP[i] = cost[i] + Math.min(DP[i-1] , DP[i-2])
//     }
//     return Math.min(DP[n-1] , DP[n-2])
   
// }
// const cost = [10, 15, 20]; // length is 3 
// console.log(findMinCost(cost)); //  Output: 15


//-------------Space Optimized Approach--------------//
function findMinCost(cost){
    const n  = cost.length;
    let prev2  = cost[0];
    let prev1 = cost[1];
    for(let i = 2  ; i<n ; i++){
        let curr = cost[i] + Math.min(prev1,prev2);
        prev2 = prev1;
        prev1 = curr
    }
    return Math.min(prev1,prev2)
}
const cost = [10, 15, 20];
console.log(findMinCost(cost)); // Output: 15