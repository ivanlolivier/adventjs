export default function shouldBuyFidelity(times) {
  const option1 = times * 12;

  let option2 = 250;
  let lastPrice = 12;
  [...Array(times)].forEach(() => {
    lastPrice *= 0.75;
    option2 += lastPrice;
  });

  return option2 < option1;
}
