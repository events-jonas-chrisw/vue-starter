import moment from "moment";

export default (value, format = 'date', utc = false) => {
  if (!value) {
    return '';
  }

  switch (format) {
    case 'date':
      format = 'L';
      break;
    case 'datetime':
      format = 'L LT';
      break;
  }

  let date = utc ? moment(value).utc() : moment(value);

  return date.isValid() ? date.format(format) : '';
}
