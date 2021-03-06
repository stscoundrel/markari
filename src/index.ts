export const markWords = (search: string, content: string): string => {
  if (search === undefined || content === undefined) throw new Error('Missing argument: expects two strings as function arguments');

  if (!search) {
    return content;
  }

  return content.split(search).join(`<mark>${search}</mark>`);
};

export default {
  markWords,
};
