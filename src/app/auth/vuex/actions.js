import localforage from 'localforage';
import { http } from 'src/plugins/http';

export const attemptLogin = ({ dispatch }, payload) => {
  // return http.post('/auth', payload)
  return http.post('/login', {email: payload.username, password: payload.password})
    .then(response => {
      const { user, token } = response.data;

      dispatch('setUser', user);
      dispatch('setToken', token);

      return user;
    });
};

export const logout = ({ dispatch }) => {
  // revoke token
  return Promise.all([
    dispatch('setUser', {}),
    dispatch('setToken', {})
  ]);
};

export const setUser = ({ dispatch, commit }, user) => {
  if (user) {
    commit('Auth.SET_USER', user);
    return Promise.resolve(user);
  } else {
    return dispatch('loadUser');
  }
};

export const setToken = ({ commit }, payload) => {
  const token = !payload ? null : payload.token || payload;
  commit('Auth.SET_TOKEN', token);
  return Promise.resolve(token);
};

export const checkUserToken = ({ dispatch, state }) => {
  if (state.token) {
    return Promise.resolve(state.token);
  }

  return localforage.getItem('token')
    .then((token) => {
      if (!token) {
        return Promise.reject('NO_TOKEN');
      }

      return dispatch('setToken', token)
    })
    .then(() => dispatch('loadUser'));
};

export const loadUser = ({ dispatch }) => {
  // return http.get('/me')
  return http.get('/users/1')
    .then(({data}) => dispatch('setUser', data.data))
    .catch(() => {
      dispatch('setToken', null);
      return Promise.reject('FAIL_IN_LOAD_USER');
    })
};
