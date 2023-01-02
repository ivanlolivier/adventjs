function fixLetter(letter) {
  const punctuationChars = ["?", "!", "."];

  const cleanLetter = letter
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s?,\s?/g, ", ")
    .replace(/\s?\./g, ".")
    .replace(/\s?\?+/g, "?")
    .replace(/Santa Claus/gi, "Santa Claus");

  const letterWithUppercase = punctuationChars.reduce(
    (text, char) =>
      text
        .split(`${char} `)
        .map((text) => text[0].toUpperCase() + text.substring(1))
        .join(`${char} `),
    cleanLetter
  );

  const finalPunctuation = punctuationChars.includes(letterWithUppercase.at(-1))
    ? ""
    : ".";

  return letterWithUppercase + finalPunctuation;
}
