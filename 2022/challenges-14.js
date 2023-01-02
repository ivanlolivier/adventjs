function getOptimalPath(path) {
  if (path.length === 0) return 0;

  const [current, ...rest] = path;

  const left = rest.map(([_, ...rest]) => rest);
  const right = rest.map((p) => p.slice(0, -1));

  const goingLeft = getOptimalPath(left);
  const goingRight = getOptimalPath(right);

  return Math.min(goingLeft, goingRight) + current[0];
}
