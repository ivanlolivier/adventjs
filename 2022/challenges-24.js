function canExit(maze) {
  const searchStart = (m) => {
    for (const rowIndex in m) {
      for (const cellIndex in m[rowIndex]) {
        if (m[rowIndex][cellIndex] === "E") {
          return [rowIndex, cellIndex].join("-");
        }
      }
    }
  };

  const nextPositions = [searchStart(maze)];
  const visited = {};

  while (nextPositions.length > 0) {
    const currentPosition = nextPositions.pop();
    const [x, y] = currentPosition.split("-");

    if (maze[x][y] === "S") return true;

    visited[`${x}-${y}`] = true;

    const newPossibleNextPositions = [
      [+x + 1, +y],
      [+x - 1, +y],
      [+x, +y + 1],
      [+x, +y - 1],
    ]
      .filter(([px, py]) => maze[px] != null && maze[px][py] != null)
      .filter(([px, py]) => maze[px][py] !== "W")
      .filter(([px, py]) => !visited[`${px}-${py}`])
      .filter(([px, py]) => !nextPositions.includes(`${px}-${py}`))
      .map((a) => a.join("-"));

    newPossibleNextPositions.forEach((n) => nextPositions.push(n));
  }

  return false;
}
