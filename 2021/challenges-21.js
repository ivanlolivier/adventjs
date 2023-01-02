export default function canCarry(capacity, trip) {
  const presentsPerPlace = {};

  for (const [qty, start, end] of trip) {
    for (let i = start; i < end; i++) {
      presentsPerPlace[i] = (presentsPerPlace[i] ?? 0) + qty;

      if (presentsPerPlace[i] > capacity) {
        return false;
      }
    }
  }

  return true;
}
