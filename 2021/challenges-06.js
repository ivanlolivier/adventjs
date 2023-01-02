export default function sumPairs(numbers, result) {
  const length = numbers.length;

  if (length <= 1) {
    return null;
  }

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      const numI = numbers[i];
      const numJ = numbers[j];

      if (numI + numJ === result) {
        return [numI, numJ];
      }
    }
  }

  return null;
}
