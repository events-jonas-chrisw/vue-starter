export default (value) => {
  value = Number(value);

  if (isNaN(value)) {
    value = 0;
  }

  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
    .format(value);
}
