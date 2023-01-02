function wrapping(gifts) {
  const wrap = (gift) => {
    const topBottom = "*".repeat(gift.length + 2);

    return [topBottom, `*${gift}*`, topBottom].join("\n");
  };

  return gifts.map(wrap);
}
