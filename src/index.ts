/**
 * When you inevitably have to debug this again,
 * @see https://regex101.com/
 * You poor bastard.
 */
const createRegexFor = (search) => {
  const escapedSearch = search.replace('.', '\\.');
  return new RegExp(`(${escapedSearch})(?<!<mark>)(?!<\/mark>)(?<!=")(?!">)`, 'gi'); // eslint-disable-line
};

export const markWords = (search: string, content: string): string => {
  if (search === undefined || content === undefined) throw new Error('Missing argument: expects two strings as function arguments');

  if (!search) {
    return content;
  }

  const regex = createRegexFor(search);
  return content.replace(regex, `<mark>${search}</mark>`);
};

export default {
  markWords,
};
