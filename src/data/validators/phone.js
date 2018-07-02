import {withParams} from "vuelidate/lib";

export default withParams({type: 'phone'}, value => {
  if (!value) {
    return true;
  }

  return value.replace(/\D/g, '').length >= 10
});
