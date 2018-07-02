import StringMask from "string-mask";

const mask = new StringMask('(00) 0000-0000');
const mask9 = new StringMask('(00) 0 0000-0000');

export default (value) => {
  if (!value) {
    return '';
  }

  value = value.toString().replace(/\D/g, '');

  return value.length > 10 ? mask9.apply(value) : mask.apply(value);
}
