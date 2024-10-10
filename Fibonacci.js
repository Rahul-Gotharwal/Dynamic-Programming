// By using the recursion only we find the fibonaaci-----------//
// this is come from the top to the down and then return the result
// function fibonaaci(n){
//     if(n==1 || n==0){
//         return n;
//     }
//     return fibonaaci(n-1)+fibonaaci(n-2);
// }
// let n = 6 ;
// console.log(fibonaaci(6));

// -------------now we start from the 0 till the end --------------//
// now the base case is the n , like when we reach at the end of the n then we will return the result
function fibonaaciHelper(current , next , n){
    if(n===0){
        return current
    }
    if(n==1){
        return next
    }
    // NOTE - Understand the funcfion calls -by the dry run 
    // current , next , n  , se a age ka procees he ki humara current jo he vo next bn jaye or curreent+ next kre or value ko km kre
    return fibonaaciHelper(next , current+next , n-1); 
}
function fibonaaci(n){
    return fibonaaciHelper(0,1,n);
}
let n = 6 ;
console.log(fibonaaci(n))
/**
 * Let's break down the function calls step by step to understand how the Fibonacci sequence is being computed using recursion.

### 1. **Initial Function Call**

You start by calling the main function:
```javascript
let n = 6;
console.log(fibonaaci(n));
```

This leads to:
```javascript
fibonaaci(6);
```

### 2. **fibonaaci Function**
The `fibonaaci` function is straightforward. It just calls `fibonaaciHelper` with the initial values:
```javascript
fibonaaciHelper(0, 1, 6);
```

### 3. **fibonaaciHelper Function**
The `fibonaaciHelper` function is a recursive function that performs the actual computation. Let's trace the function calls.

#### **First Call:**
```javascript
fibonaaciHelper(0, 1, 6);
```
- `current = 0`
- `next = 1`
- `n = 6`

This does not hit the base cases (`n === 0` or `n === 1`), so it moves to the recursive call:
```javascript
fibonaaciHelper(1, 1, 5);
```
- Here, `next` becomes the new `current`, and `current + next` becomes the new `next`. The `n` value is decremented by 1.

#### **Second Call:**
```javascript
fibonaaciHelper(1, 1, 5);
```
- `current = 1`
- `next = 1`
- `n = 5`

Again, this does not hit the base cases, so it recursively calls:
```javascript
fibonaaciHelper(1, 2, 4);
```

#### **Third Call:**
```javascript
fibonaaciHelper(1, 2, 4);
```
- `current = 1`
- `next = 2`
- `n = 4`

This leads to:
```javascript
fibonaaciHelper(2, 3, 3);
```

#### **Fourth Call:**
```javascript
fibonaaciHelper(2, 3, 3);
```
- `current = 2`
- `next = 3`
- `n = 3`

This leads to:
```javascript
fibonaaciHelper(3, 5, 2);
```

#### **Fifth Call:**
```javascript
fibonaaciHelper(3, 5, 2);
```
- `current = 3`
- `next = 5`
- `n = 2`

This leads to:
```javascript
fibonaaciHelper(5, 8, 1);
```

#### **Sixth Call:**
```javascript
fibonaaciHelper(5, 8, 1);
```
- `current = 5`
- `next = 8`
- `n = 1`
Here, `n === 1`, so the base case is hit, and the function returns `next`, which is `8`.

### 4. **Returning the Value**
- The return value of `fibonaaciHelper(5, 8, 1)` is `8`.
- This value gets returned back through all the previous function calls, eventually reaching the initial call:
```javascript
fibonaaci(6) → 8
```

### 5. **Final Output**
So, `console.log(fibonaaci(n));` prints `8`.

### **Summary of Function Calls**
- The sequence of calls is:
  1. `fibonaaciHelper(0, 1, 6)`
  2. `fibonaaciHelper(1, 1, 5)`
  3. `fibonaaciHelper(1, 2, 4)`
  4. `fibonaaciHelper(2, 3, 3)`
  5. `fibonaaciHelper(3, 5, 2)`
  6. `fibonaaciHelper(5, 8, 1)` → Base case reached, returns `8`.
 */

//-----------------Using the Dyanmic Programming-------------//
//-steps are like to convert an recursion into the DP
//-1 make an DP array
//-2 first store the answer of recusrion then return
//-3 check the DP array
// function fibonaaci(n){
//     // why n+1 because of the 0 based indexing
//     let DP = new Array(n+1).fill(-1) // make the DP array ,step one completed
//     if(n==1 || n==0){
//         return n 
//     }
//     if(DP[n]!==-1) return DP[n] // step - 3 to check the array
//     DP[n] = fibonaaci(n-1)+fibonaaci(n-2);
//     return DP[n]
// }
// let n = 6 ;
// console.log(fibonaaci(6));



//----------- using the tabulation----------------//
//step-1 craate the DP array
// step-2 store the result of the base cases into the DP 
// step-3 start the loop from after the base cases , for completing the next tasks
// function fibonaaci(n){
//   let DP = new Array(n+1).fill(-1)
//    // storing the result of base case into the DP 
//    DP[0] = 0;
//    DP[1] = 1
//   // starting the for loop , from the 2
//   for(let i = 2 ; i<=n ; i++){
//     DP[i] = DP[i-1]+DP[i-2];
//   } 
//   return DP[n]
// }
// let n = 6 ;
// console.log(fibonaaci(6));

//-----------------Space OPtimization---------------//
// we dont use the DP , insted of it we take the variabls 
// function fibonaaci(n){
//       let prev1= 1;
//       let prev2 = 0;

//     // starting the for loop , from the 2
//     for(let i = 2 ; i<=n ; i++){
//      let curr = prev1 + prev2;
//      prev2 = prev1;
//      prev1 = curr
//     } 
//     return prev1
//   }
//   let n = 6 ;
//   console.log(fibonaaci(6));