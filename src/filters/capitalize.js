export function capitalizeWord(word) {
  if (word.charAt(0) === '(') {
    return '(' + word.charAt(1).toUpperCase() + word.substring(2);
  }

  return word.charAt(0).toUpperCase() + word.substring(1);
}

export function capitalize(value, ignore = []) {
  if (typeof value !== 'string') {
    return '';
  }

  return value
    .trim()
    .toLowerCase()
    .split(' ')
    .map(part => ignore.indexOf(part) !== -1 ? part : capitalizeWord(part))
    .join(' ');
}

export function capitalizeName(value) {
  value = value.replace(/\s{2,}/g, ' ');
  return capitalize(value, ['da', 'de', 'do', 'das', 'dos', 'e', 'ou', 'no', 'na', 'c/', 's/']);
}
