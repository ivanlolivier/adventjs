export default function contains(store, product) {
  const levelValues = Object.values(store);

  for (let levelValue of levelValues) {
    if (levelValue === product) {
      console.log({ levelValue });
      return true;
    }

    if (typeof levelValue === "object") {
      if (contains(levelValue, product)) {
        return true;
      }
    }
  }

  return false;
}
