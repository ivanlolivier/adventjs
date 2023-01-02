export default function createXmasTree(height) {
  let tree = "";

  for (let level = 1; level <= height; level++) {
    const asteriscsLength = 1 + (level - 1) * 2;
    const underscoresLength = height - level;

    tree += `${"_".repeat(underscoresLength)}${"*".repeat(
      asteriscsLength
    )}${"_".repeat(underscoresLength)}\n`;
  }

  tree += `${"_".repeat(height - 1)}#${"_".repeat(height - 1)}\n`;
  tree += `${"_".repeat(height - 1)}#${"_".repeat(height - 1)}`;

  return tree;
}
