export default function countDecorations(bigTree) {
  if (bigTree == null) {
    return 0;
  }

  return (
    bigTree.value +
    countDecorations(bigTree.left) +
    countDecorations(bigTree.right)
  );
}
