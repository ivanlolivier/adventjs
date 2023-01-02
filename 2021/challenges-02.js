export default function listGifts(letter) {
  const words = letter
    .split(" ")
    .map((word) => word.trim())
    .filter(Boolean);

  const gifts = {};

  words.forEach((word) => {
    if (word.startsWith("_")) {
      return;
    }

    gifts[word] = (gifts[word] ?? 0) + 1;
  });

  return gifts;
}
