export default function getCoins(change) {
  const availableCoins = [50, 20, 10, 5, 2, 1];

  const coins = new Array(availableCoins.length).fill(0);

  let remaining = change;
  availableCoins.forEach((availableCoin, index) => {
    coins[index] = Math.floor(remaining / availableCoin);
    remaining = remaining % availableCoin;
  });

  return coins.reverse();
}
