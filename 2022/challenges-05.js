// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//   if (giftsCities.length === 0) return 0;
//   if (maxGifts === 0) return 0;
//   if (maxCities === 0) return 0;

//   const [gift, ...restGiftsCities] = giftsCities;

//   const maxUsingGift = gift <= maxGifts
//     ? gift + getMaxGifts(restGiftsCities, maxGifts - gift, maxCities - 1)
//     : -1;

//   const maxNotUsingGift = getMaxGifts(restGiftsCities, maxGifts, maxCities);

//   return Math.max(maxUsingGift, maxNotUsingGift);
// }

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let totals = [];

  giftsCities.forEach((gift) => {
    totals.push(
      ...totals
        .map((t) => {
          const newItem = { gifts: t.gifts + gift, cities: t.cities + 1 };
          if (newItem.gifts > maxGifts || newItem.cities > maxCities)
            return false;

          return newItem;
        })
        .filter(Boolean)
    );

    if (gift <= maxGifts) {
      totals.push({ gifts: gift, cities: 1 });
    }
  });

  return Math.max(...totals.map((t) => t.gifts), 0);
}
