function sortToys(toys, positions) {
  const sorted = [];
  positions.forEach((p, i) => (sorted[p] = toys[i]));
  return sorted.filter(Boolean);
}
