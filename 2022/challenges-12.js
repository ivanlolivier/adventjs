function selectSleigh(distance, sleighs) {
  const MAX_BATTERY = 20;
  const best = sleighs
    .reverse()
    .find((sleigh) => sleigh.consumption * distance <= MAX_BATTERY);

  return best ? best.name : null;
}
