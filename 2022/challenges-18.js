function dryNumber(dry, numbers) {
  const numbersWithErrors = [];
  for (let i = 1; i <= numbers; i++) {
    if (`${i}`.includes(`${dry}`)) {
      numbersWithErrors.push(i);
    }
  }
  return numbersWithErrors;
}
