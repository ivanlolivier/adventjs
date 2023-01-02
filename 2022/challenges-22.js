function checkStepNumbers(systemNames, stepNumbers) {
  const lastStepNumber = {};

  return systemNames.every((systemName, index) => {
    const prevStepNumber = lastStepNumber[systemName];
    const stepNumber = stepNumbers[index];

    if (prevStepNumber && stepNumber <= prevStepNumber) {
      return false;
    }

    lastStepNumber[systemName] = stepNumber;
    return true;
  });
}
