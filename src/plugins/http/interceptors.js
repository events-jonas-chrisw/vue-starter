export default (http, router) => {
  http.interceptors.response.use(
    response => response,
    error => {
      if (error.response && [401].indexOf(error.response.status) > -1) {
        router.push({ path: '/login' });
      }

      return Promise.reject(error);
    }
  )
}
