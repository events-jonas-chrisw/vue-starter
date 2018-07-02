import {withParams} from "vuelidate/lib";

export default (size = 1) => withParams({type: 'minWords', size}, value => {
  if (!value) {
    return true;
  }

  return value.trim().replace(/\s+/g, ' ').split(' ').length >= size;
});
