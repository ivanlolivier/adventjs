function printTable(gifts) {
  const maxGiftWidth = Math.max(
    "Gift".length,
    ...gifts.map((g) => g.name.length)
  );

  const maxQuantityWidth = Math.max(
    "Quantity".length,
    ...gifts.map((g) => `${g.quantity}`.length)
  );

  let table = "+".repeat(maxGiftWidth + maxQuantityWidth + 7) + "\n";
  table += "| Gift" + " ".repeat(maxGiftWidth - "Gift".length);
  table +=
    " | Quantity" + " ".repeat(maxQuantityWidth - "Quantity".length) + " |\n";
  table += "| " + "-".repeat(maxGiftWidth);
  table += " | " + "-".repeat(maxQuantityWidth) + " |\n";
  gifts.forEach((g) => {
    const extraSpacesForGift = maxGiftWidth - g.name.length;
    const extraSpacesForQuantity = maxQuantityWidth - `${g.quantity}`.length;

    table += "| " + g.name + " ".repeat(extraSpacesForGift);
    table += " | " + g.quantity + " ".repeat(extraSpacesForQuantity) + " |\n";
  });
  table += "*".repeat(maxGiftWidth + maxQuantityWidth + 7);

  return table;
}
