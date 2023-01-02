function decorateTree(base) {
  const aboveOrnament = {
    PP: "P",
    BB: "B",
    RR: "R",

    BP: "R",
    RP: "B",
    BR: "P",

    PB: "R",
    PR: "B",
    RB: "P",
  };

  let tree = [base.split(" ")];

  while (tree[0].length > 1) {
    const nextLevel = tree[0].reduce((newLevel, ornament, i, currLevel) => {
      const nextOrnament = currLevel[i + 1];
      newLevel.push(aboveOrnament[ornament + nextOrnament]);
      return newLevel;
    }, []);

    tree.unshift(nextLevel.filter(Boolean));
  }

  return tree.map((level) => level.join(" "));
}
