// function maxProfit(prices){
//  let mini = prices[0];
//  let profit =0 ;
//  for(let i = 1;i< prices.length; i++){
//     let cost = prices[i]-mini
//     profit = Math.max(cost , profit);
//     mini = Math.min(mini , prices[i])
//  }
//  return profit

// }

// let prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices));

function maxProfit(prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else if (prices[i] - buy > profit) {
      profit = prices[i] - buy;
    }
  }
  return profit;
}

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
