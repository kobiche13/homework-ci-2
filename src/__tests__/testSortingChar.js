import sortingCharArray from '../sortingChar.js';

const charArrayStart = [
  { name: 'маг', health: 10 },
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'шаман', health: 5 },
  { name: 'целитель', health: 83 },
];
const charArrayEnd = [
  { name: 'шаман', health: 5 },
  { name: 'маг', health: 10 },
  { name: 'мечник', health: 10 },
  { name: 'лучник', health: 80 },
  { name: 'целитель', health: 83 },
  { name: 'маг', health: 100 },
];

test('testing sorting array', () => {
  const result = charArrayStart.sort(sortingCharArray);
  expect(result).toEqual(charArrayEnd);
});
