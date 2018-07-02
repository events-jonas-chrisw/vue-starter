export default (value, length, pad = 0) => {
  for (let i = 0; i < length; i++) {
    value = `${pad}${value}`;
  }

  return value.slice(-length);
}
