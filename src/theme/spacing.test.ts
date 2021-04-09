import { spacing } from './spacing';

test('generates the correct string when user passes in a defaultSpacing number and a factor in number', () => {
  const value = spacing(2, 8);
  const result = `${2 * 8}px`;
  expect(value).toBe(result);
});

test('generates the correct string when user does not pass in defaultSpacing', () => {
  const value = spacing(2);
  const result = `${2 * 8}px`;
  expect(value).toBe(result);
});

test('generates the correct string when user passes in a factor in array of numbers and number and string mixes', () => {
  const value1 = spacing([2, 3], 8);
  const result1 = `${2 * 8}px ${3 * 8}px`;
  const value2 = spacing([2, 'auto', 3, 3]);
  const result2 = `${2 * 8}px auto ${3 * 8}px ${3 * 8}px`;
  const value3 = spacing(['1em', 'auto', 3, '2em']);
  const result3 = `1em auto ${3 * 8}px 2em`;
  expect(value1).toBe(result1);
  expect(value2).toBe(result2);
  expect(value3).toBe(result3);
});
