function countSquares(n, m, arr) {
    let dp = Array.from({ length: n }, () => Array(m).fill(0));

    for (let j = 0; j < m; j++) dp[0][j] = arr[0][j];
    for (let i = 0; i < n; i++) dp[i][0] = arr[i][0];

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (arr[i][j] === 0) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]);
            }
        }
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            sum += dp[i][j];
        }
    }

    return sum;
}

const arr = [
    [0,1,1,1],
    [1,1,1,1],
    [0,1,1,1]
];
const n = 3, m = 4;
const squares = countSquares(n, m, arr);
console.log("The number of squares: " + squares);
