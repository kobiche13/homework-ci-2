export default function sortingCharArray(a, b) {
  const sortingResult = (a.health > b.health) ? 1 : (a.health === b.health) ? 0 : -1;
  return sortingResult;
}
