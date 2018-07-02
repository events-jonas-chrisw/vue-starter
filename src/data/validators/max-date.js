import {withParams} from "vuelidate/lib";
import moment from 'moment';

export default max => withParams({type: 'maxDate', max}, value => {
  if (!value) {
    return true;
  }

  return moment(value, ['YYYY-MM-DD', 'L'], true).isSameOrBefore(max || moment(), 'day');
});
