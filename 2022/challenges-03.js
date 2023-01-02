function distributeGifts(packOfGifts, reindeers) {
  const packWeight = packOfGifts.reduce((acc, g) => acc + g.length, 0);
  const reindeersCapacity = reindeers.reduce((acc, r) => acc + r.length * 2, 0);

  return Math.floor(reindeersCapacity / packWeight);
}
