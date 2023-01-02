export default function groupBy(collection, it) {
  const groups = {};
  const itIsFunction = typeof it === "function";

  collection.forEach((item) => {
    const key = itIsFunction ? it(item) : item[it];

    groups[key] ??= [];
    groups[key].push(item);
  });

  return groups;
}
