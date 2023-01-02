export default function maxProfit(prices) {
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const newProfit = prices[j] - prices[i];
      if (newProfit > profit) {
        profit = newProfit;
      }
    }
  }

  return profit || -1;
}
