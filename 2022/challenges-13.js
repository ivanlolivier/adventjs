function getFilesToBackup(lastBackup, changes) {
  const missingChanges = changes
    .filter(([, timestamp]) => timestamp > lastBackup)
    .map(([id]) => id);

  const uniqueIds = [...new Set(missingChanges)];

  return uniqueIds.sort((a, b) => a - b);
}
