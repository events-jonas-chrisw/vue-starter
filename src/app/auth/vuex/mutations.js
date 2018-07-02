export default {
  ['Auth.SET_USER'] (state, user) {
    state.user = user;
  },
  ['Auth.SET_TOKEN'] (state, token) {
    state.token = token;
  }
}
