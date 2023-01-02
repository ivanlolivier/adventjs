export default function isValid(letter) {
  let parenthesisOpen = 0;
  let parenthesisHasContent = false;

  for (const char of letter) {
    if (char === "(") {
      parenthesisOpen += 1;
      continue;
    }

    if (char === ")") {
      if (!parenthesisOpen || !parenthesisHasContent) {
        return false;
      }

      parenthesisOpen -= 1;

      if (parenthesisOpen === 0) {
        // reset content if all the parenthesis were closed
        parenthesisHasContent = false;
      }

      continue;
    }

    if (parenthesisOpen && (char === "{" || char === "[")) {
      return false;
    }

    if (parenthesisOpen) {
      // here char is something valid
      parenthesisHasContent = true;
    }
  }

  return parenthesisOpen === 0; // invalid if not all the parenthesis were closed
}
