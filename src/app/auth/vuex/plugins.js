import localforage from 'localforage';
import { setToken } from 'src/plugins/http';

export default store => {
  store.subscribe((mutation, { auth }) => {
    if ('Auth.SET_TOKEN' === mutation.type) {
      setToken(auth.token);
      localforage.setItem('token', auth.token);
    }
  });
};
