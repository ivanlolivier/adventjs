function carryGifts(gifts, maxWeight) {
  return gifts
    .reduce((bags, gift) => {
      const currentBag = bags.at(-1);

      if (currentBag && currentBag.len + gift.length <= maxWeight) {
        currentBag.gifts.push(gift);
        currentBag.len += gift.length;
      } else if (gift.length <= maxWeight) {
        bags.push({ gifts: [gift], len: gift.length });
      }

      return bags;
    }, [])
    .map((bag) => bag.gifts.join(" "));
}
