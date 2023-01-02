export default function missingReindeer(ids) {
  const totalSum = ids.reduce((a, b) => a + b, 0);

  const max = Math.max(...ids);
  const sum = (max + 1) * (max / 2);

  const missingId = sum - totalSum;
  if (!missingId) {
    return ids.includes(0) ? max + 1 : 0;
  }

  return missingId;
}
