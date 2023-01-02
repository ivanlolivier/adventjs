export default function pangram(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const letterNormalized = letter
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

  return alphabet.every((char) => letterNormalized.includes(char));
}
