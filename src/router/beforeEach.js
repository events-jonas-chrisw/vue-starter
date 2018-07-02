import store from '../store';

export default (to, from, next) => {
  if (to.meta.requiresAuth !== true) {
    next();
    return;
  }

  store.dispatch('checkUserToken')
    .then(() => next())
    .catch(() => next('/login'));
}
