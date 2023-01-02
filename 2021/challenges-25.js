export default function canMouseEat(direction, game) {
  let mouseLocation;

  for (let rowIndex = 0; rowIndex < game.length; rowIndex++) {
    const row = game[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      if (row[colIndex] === "m") {
        mouseLocation = [rowIndex, colIndex];
      }
    }
  }

  let newLocation = mouseLocation;
  switch (direction) {
    case "up":
      newLocation = [mouseLocation[0] - 1, mouseLocation[1]];
      break;
    case "down":
      newLocation = [mouseLocation[0] + 1, mouseLocation[1]];
      break;
    case "left":
      newLocation = [mouseLocation[0], mouseLocation[1] - 1];
      break;
    case "right":
      newLocation = [mouseLocation[0], mouseLocation[1] + 1];
      break;
  }

  return game[newLocation[0]]?.[newLocation[1]] === "*";
}
