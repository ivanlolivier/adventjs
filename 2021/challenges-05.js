export default function daysToXmas(date) {
  const xmas = new Date("Dec 25, 2021");

  const diffTime = xmas - date;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
