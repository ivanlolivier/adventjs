export default function checkIsSameTree(treeA, treeB) {
  if (treeB == treeA) {
    return true;
  }

  if (treeA == null || treeB == null) {
    return false;
  }

  if (treeA.value !== treeB.value) {
    return false;
  }

  return (
    checkIsSameTree(treeA.left, treeB.left) &&
    checkIsSameTree(treeA.right, treeB.right)
  );
}
