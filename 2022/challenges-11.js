function getCompleted(part, total) {
  // const greatestCommonDivisor = (a, b) => {
  //   let temporal;
  //   while (b !== 0) {
  //     temporal = b;
  //     b = a % b;
  //     a = temporal;
  //   }
  //   return a;
  // };

  const durationToSeconds = (duration) => {
    const [hourWorked, minWorked, secWorked] = duration.split(":");
    return secWorked * 1 + minWorked * 60 + hourWorked * 60 * 60;
  };

  const worked = durationToSeconds(part);
  const estimated = durationToSeconds(total);

  // let GCD = greatestCommonDivisor(worked, estimated);
  let GCD = worked;
  let b = estimated;
  let temporal;
  while (b !== 0) {
    temporal = b;
    b = GCD % b;
    GCD = temporal;
  }

  return `${worked / GCD}/${estimated / GCD}`;
}
