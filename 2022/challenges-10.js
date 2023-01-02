// function checkJump(heights) {
//   let wentUp = false;
//   let wentDown = false;
//   let invalid = false;

//   for (let i = 1; i < heights.length; i++) {
//     const prev = heights[i-1];
//     const curr = heights[i];

//     wentUp = wentUp || prev < curr;
//     wentDown = wentDown || prev > curr;
//     invalid = invalid || (wentDown && prev < curr);
//   }

//   return !invalid && wentUp && wentDown
// }

function checkJump(heights) {
  const max = Math.max(...heights);
  const indexMax = heights.indexOf(max);

  return (
    heights.at(0) !== max &&
    heights.at(-1) !== max &&
    heights.every((_, index) =>
      index <= indexMax
        ? heights[index] >= (heights[index - 1] || 0)
        : heights[index] <= heights[index - 1]
    )
  );
}
