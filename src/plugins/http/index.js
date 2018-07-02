import axios from 'axios';
import interceptors from './interceptors';
import { apiUrl } from 'src/config';

export const http = axios.create({
  baseURL: apiUrl
});

export function setToken(token) {
  http.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export default function install(Vue, { router }) {
  interceptors(http, router);

  Vue.http = http;

  Object.defineProperty(Vue.prototype, '$http', {
    get() {
      return http;
    }
  })
}
