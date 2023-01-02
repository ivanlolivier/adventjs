export default function countPackages(carriers, carrierID) {
  const carrier = carriers.find(([ID]) => ID === carrierID);

  const [ID, carrierPackages, subordinates] = carrier;

  const packagesFromSubordinates = subordinates.reduce(
    (total, subordinate) => total + countPackages(carriers, subordinate),
    0
  );

  return carrierPackages + packagesFromSubordinates;
}
