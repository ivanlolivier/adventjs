function createCube(size) {
  let top = [];
  let bottom = [];

  for (let i = 0; i < size; i++) {
    let output = " ".repeat(size - 1 - i);
    output += "/";
    output += "\\/".repeat(i);
    output += "\\_".repeat(size);
    output += "\\";

    top.push(output);

    output = " ".repeat(i);
    output += "\\/".repeat(size - i);
    output += "_/".repeat(size);

    bottom.push(output);
  }

  return [...top, ...bottom].join("\n");
}
