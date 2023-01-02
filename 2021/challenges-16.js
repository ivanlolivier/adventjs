export default function decodeNumber(symbols) {
  const symbolToNumber = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };

  let result = 0;

  for (let i = 0; i < symbols.length; i++) {
    const currSymbol = symbols[i];
    const nextSymbol = symbols[i + 1] ?? 0;

    const currNumber = symbolToNumber[currSymbol];
    const nextNumber = symbolToNumber[nextSymbol];

    result =
      currNumber < nextNumber ? result - currNumber : result + currNumber;
  }

  return result;
}
