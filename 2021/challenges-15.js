export default function checkSledJump(heights) {
  let going = "up";

  for (let i = 1; i < heights.length; i++) {
    if (heights[i] === heights[i - 1]) {
      return false;
    }

    if (going === "up" && heights[i] < heights[i - 1]) {
      going = "down";
    }

    if (going === "down" && heights[i] > heights[i - 1]) {
      return false;
    }
  }

  return going === "down";
}
