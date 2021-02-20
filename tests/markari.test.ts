import { markWords } from '../src';

describe('Markari tests', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      markWords(undefined as any, undefined as any);
    }).toThrow('Missing argument: expects two strings as function arguments');
  });

  test('Returns a string', () => {
    const original = 'And if the day would only come, then you might just appear, even though you\'d soon be gone';
    const result = markWords('Lorem', original);
    expect(typeof result === 'string').toBeTruthy();
  });

  test('Does not edit string if no matches', () => {
    const original = 'And if the day would only come, then you might just appear, even though you\'d soon be gone';
    const result = markWords('Not in the sentence', original);
    expect(result).toEqual(original);
  });

  test('Adds markup if a match is found', () => {
    const original = 'And if the day would only come, then you might just appear, even though you\'d soon be gone';
    const expected = 'And if the <mark>day</mark> would only come, then you might just appear, even though you\'d soon be gone';
    const result = markWords('day', original);
    expect(result).toEqual(expected);
  });

  test('Adds markup for all instances of the word', () => {
    const original = 'And if the day would only come, then you might just appear, even though you\'d soon be gone';
    const expected = 'And if the day would only come, then <mark>you</mark> might just appear, even though <mark>you</mark>\'d soon be gone';
    const result = markWords('you', original);
    expect(result).toEqual(expected);
  });

  test('Marks multiword queries', () => {
    const original = 'And if the day would only come, then you might just appear, even though you\'d soon be gone';
    const expected = '<mark>And if the day would only come</mark>, then you might just appear, even though you\'d soon be gone';
    const result = markWords('And if the day would only come', original);
    expect(result).toEqual(expected);
  });
});
