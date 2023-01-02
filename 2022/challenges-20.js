function howManyReindeers(reindeerTypes, gifts) {
  const calculateReindeers = (reindeerTypes, weight) => {
    reindeerTypes.sort((a, b) => a.weightCapacity - b.weightCapacity);

    const reindeers = reindeerTypes.map((r) => ({ type: r.type, num: 0 }));

    let remainingWeight = weight;
    while (remainingWeight > 0) {
      for (const reindeerType of reindeerTypes) {
        if (reindeerType.weightCapacity <= remainingWeight) {
          reindeers.find((r) => reindeerType.type === r.type).num++;
          remainingWeight -= reindeerType.weightCapacity;
        }
      }
    }

    return reindeers.filter((r) => r.num > 0).reverse();
  };

  const giftsGroupedByCountry = gifts.reduce((acc, gift) => {
    acc[gift.country] = acc[gift.country] || 0;
    acc[gift.country] += gift.weight;
    return acc;
  }, {});

  return Object.entries(giftsGroupedByCountry).map(([country, weight]) => ({
    country: country,
    reindeers: calculateReindeers(reindeerTypes, weight),
  }));
}
