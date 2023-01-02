export default function getMinJump(obstacles) {
  if (obstacles.length === 0) return 1;

  const length = Math.max(...obstacles);

  for (let jump = 2; jump < length; jump++) {
    const invalid = obstacles.some((obstacle) => obstacle % jump === 0);

    if (!invalid) {
      return jump;
    }
  }

  return length + 1;
}
