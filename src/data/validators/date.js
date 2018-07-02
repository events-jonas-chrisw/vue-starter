import {withParams} from "vuelidate/lib";
import moment from 'moment';

export default withParams({type: 'date'}, value => {
  if (!value) {
    return true;
  }

  return moment(value, ['YYYY-MM-DD', 'L'], true).isValid();
});
