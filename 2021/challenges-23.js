export default function canReconfigure(from, to) {
  if (from.length !== to.length) {
    return false;
  }

  const transformationKeys = [];

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];

    const key = fromLetter + "_" + toLetter;

    const sameFrom = transformationKeys.find((k) =>
      k.startsWith(fromLetter + "_")
    );
    if (sameFrom && sameFrom !== key) {
      return false;
    }

    const sameTo = transformationKeys.find((k) => k.endsWith("_" + toLetter));
    if (sameTo && sameTo !== key) {
      return false;
    }

    transformationKeys.push(key);
  }

  return true;
}
