function getGiftsToRefill(a1, a2, a3) {
  // const set1 = new Set(a1);
  // const set2 = new Set(a2);
  // const set3 = new Set(a3);

  // const unique1 = [...set1].filter(i => !set2.has(i) && !set3.has(i));
  // const unique2 = [...set2].filter(i => !set1.has(i) && !set3.has(i));
  // const unique3 = [...set3].filter(i => !set1.has(i) && !set2.has(i));

  // return [...unique1, ...unique2, ...unique3];

  return [...new Set([...a1, ...a2, ...a3])].filter(
    (item) => a1.includes(item) + a2.includes(item) + a3.includes(item) === 1
  );
}
