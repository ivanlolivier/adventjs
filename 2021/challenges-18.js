export default function fixFiles(files) {
  const filesObj = {};

  return files.map((file) => {
    const filesCant = (filesObj[file] ?? 0) + 1;

    filesObj[file] = filesCant;

    return `${file}${filesCant > 1 ? `(${filesCant - 1})` : ""}`;
  });
}
