// //------------------By Using The Recursion -------------------//
// function solve (hieght  , k   ){
//     const n = hieght.length;
//     function findingMinJumps(ind , hieght ,  k ){
//           // Base case: If we are at the beginning (index 0), no cost is needed.
//           if(ind === 0 ) return 0; 
//           let mmSteps = Infinity;
//            // Loop to try all possible jumps from '1' to 'k'
//            //j is stands for the jump
//            for(let j = 1 ; j<=k ; j++){
//            if(ind-j>=0){
//            // Calculate the cost for this jump and update mmSteps with the minimum cost
//            const jump = findingMinJumps(ind-j , hieght , k) + Math.abs(hieght[ind] - height[ind-j])
//            mmSteps = Math.min(jump , mmSteps)
//            }
//            }
//            return mmSteps

//     } 
//     return findingMinJumps(n-1 , hieght  , k);
// }


//---------------By using the memoization----------------//
// function solve( hieght , k){
//     const n = hieght.length;
//     const dp = Array(n).fill(-1);
//     function findingMinJumps(ind , hieght , dp , k ){
//           // Base case: If we are at the beginning (index 0), no cost is needed.
//           if(ind === 0 ) return 0; 
//           let mmSteps = Infinity;
//            // Loop to try all possible jumps from '1' to 'k'
//            for(let j = 1 ; j<=k ; j++){
//            if(ind-j>=0){
//            // Calculate the cost for this jump and update mmSteps with the minimum cost
//            const jump = findingMinJumps(ind-j , hieght , dp , k) + Math.abs(hieght[ind] - height[ind-j])
//            mmSteps = Math.min(jump , mmSteps)
//            }
//            }
//            dp[ind] = mmSteps;
//            return dp[ind]

//     } 
//     return findingMinJumps(n-1 , hieght , dp , k);
     
// }
// const height = [30, 10, 60, 10, 60, 50];
// let k = 2 
// console.log(solve(height, k));

//------------------using the tabulation ----------------//


function solve(height, k) {
    const n = height.length;
    const dp = Array(n).fill(0); // Initialize dp array

    function findingMinJumps(n, height, k) {
        dp[0] = 0; // No energy needed at the first stair

        for (let i = 1; i < n; i++) {  // Start from the second stair
            let mmSteps = Infinity;

            for (let j = 1; j <= k; j++) {
                if (i - j >= 0) {
                    const jump = dp[i - j] + Math.abs(height[i] - height[i - j]);
                    mmSteps = Math.min(jump, mmSteps);
                }
            }
            dp[i] = mmSteps;  // Store the minimum energy required to reach this stair
        }

        return dp[n - 1];  // Return the minimum energy required to reach the last stair
    }

    return findingMinJumps(n, height, k);
}

const height = [30, 10, 60, 10, 60, 50];
let k = 2;
console.log(solve(height, k));  // Output will be the minimum energy required

