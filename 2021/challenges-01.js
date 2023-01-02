export default function contarOvejas(ovejas) {
  return ovejas.filter(({ color, name }) => {
    const colorIsRed = color === "rojo";

    const nameInLower = name.toLowerCase();

    const nameIncludesA = nameInLower.includes("a");
    const nameIncludesN = nameInLower.includes("n");

    return colorIsRed && nameIncludesA && nameIncludesN;
  });
}
