export const stringstoArray = (text: string): Array<string> => {
  const trimmedText = text.trim().replace(/,$/, '');
  return trimmedText.split(',').map(item => item.trim());
}