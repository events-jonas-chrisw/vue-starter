import {withParams} from "vuelidate/lib";

export default withParams({type: 'cep'}, value => {
  if (!value) {
    return true;
  }

  return value.replace(/\D/g, '').length === 8;
});
