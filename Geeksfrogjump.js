// function minimumEnergy(hieght , n){
//     function recurse(index){
//         if(index === 0 ) return 0 ;
//         let oneStep = recurse(index-1) + Math.abs(hieght[index] - hieght[index-1]);
//         let twoStep = index>1? recurse(index-2) + Math.abs(hieght[index] - hieght[index-2]):Infinity;
//         return Math.min(oneStep , twoStep)
//     }
//     return recurse(n-1)
// }
// let n = 4 ;
// let height = [10,20,30,10]
// console.log(minimumEnergy(height , n))

// ----------------Memoization Apparoach-------------//
// function minimumEnergy(hieght , n){
//     let DP = new Array(n+1).fill(-1);
//     function recurse(index){
//         if(index === 0 ) return 0 ;
//         if(DP[index]!==-1) return DP[index]
//         let oneStep = recurse(index-1) + Math.abs(hieght[index] - hieght[index-1]);
//         let twoStep = index>1? recurse(index-2) + Math.abs(hieght[index] - hieght[index-2]):Infinity;
//         DP[index]=  Math.min(oneStep , twoStep)
//         return DP[index]
//     }
//     return recurse(n-1)
// }
// let n = 4 ;
// let height = [10,20,30,10]
// console.log(minimumEnergy(height , n))

//------------------Tabulation Approach---------------------//
function minimumEnergy(hieght , n){
    let DP = new Array(n+1).fill(0)
       DP[0] = 0 ;
       for(let i = 1; i<=n ; i++){
        let oneStep = DP[i-1]+ Math.abs(hieght[i] - hieght[i-1]);
        let twoStep = i>1? DP[i-2] + Math.abs(hieght[i] - hieght[i-2]):Infinity;
        DP[i] = Math.min(oneStep, twoStep)   
    }
     return DP[n-1]
}
let n = 4 ;
let height = [10,20,30,10]
console.log(minimumEnergy(height , n))

//-------------------Space-Optimized Dynamic Programming-----------------//
// function minimumEnergy(height, n) {
//     let prev1 = 0, prev2 = 0;
//     for (let i = 1; i < n; i++) {
//         let oneStep = prev1 + Math.abs(height[i] - height[i - 1]);
//         let twoStep = i > 1 ? prev2 + Math.abs(height[i] - height[i - 2]) : Infinity;
//         let current = Math.min(oneStep, twoStep);
//         prev2 = prev1;
//         prev1 = current;
//     }
//     return prev1;
// }
// let n = 4 ;
// let height = [10,20,30,10]
// console.log(minimumEnergy(height , n))