import {withParams} from "vuelidate/lib";
import moment from 'moment';

export default min => withParams({type: 'minDate', min}, value => {
  if (!value) {
    return true;
  }

  return moment(value, ['YYYY-MM-DD', 'L'], true).isSameOrAfter(min || moment(), 'day');
});
