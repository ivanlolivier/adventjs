function countTime(leds) {
  const firstOne = leds.findIndex((i) => i === 1);

  let maxZeros = 0;
  let currZeros = 0;

  for (let i = firstOne + 1; i <= leds.length + firstOne; i++) {
    currZeros = leds[i % leds.length] === 0 ? currZeros + 1 : 0;
    maxZeros = currZeros > maxZeros ? currZeros : maxZeros;
  }

  return maxZeros * 7;
}
