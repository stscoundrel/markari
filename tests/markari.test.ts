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

  test('Handles empty string correctly', () => {
    const search = '';
    const content = 'Lorem ipsum dolor sit amet dolor sit igitur';

    const expected = 'Lorem ipsum dolor sit amet dolor sit igitur';

    const result = markWords(search, content);

    expect(result).toEqual(expected);
  });

  test('Does not mark content inside other mark tags.', () => {
    const original = 'Lorem ipsum dolor <strong>sit</strong> amet dolor <mark>sit</mark> igitur';
    const expected = 'Lorem ipsum dolor <strong><mark>sit</mark></strong> amet dolor <mark>sit</mark> igitur';
    const result = markWords('sit', original);
    expect(result).toEqual(expected);
  });

  test('Does not mark content inside html attributes.', () => {
    const original = 'Lorem ipsum dolor sit amet dolor <abbr title="fake latin sit">sit</abbr> igitur';
    const expected = 'Lorem ipsum dolor <mark>sit</mark> amet dolor <abbr title="fake latin sit"><mark>sit</mark></abbr> igitur';
    const result = markWords('sit', original);
    expect(result).toEqual(expected);
  });
});
