import StringMask from "string-mask";

const mask = new StringMask('00.000.000/0000-00');

export default (value) => {
  if (!value) {
    return '';
  }

  value = value.toString().replace(/\D/g, '');

  return mask.apply(value);
}
