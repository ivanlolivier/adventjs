export default function wrapGifts(gifts) {
  if (gifts.length === 0) return [];

  const giftLength = gifts[0].length;

  return [
    "*".repeat(giftLength + 2),
    ...gifts.map((gift) => `*${gift}*`),
    "*".repeat(giftLength + 2),
  ];
}
