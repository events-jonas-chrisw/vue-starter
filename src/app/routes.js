import { routes as auth } from './auth';
import { routes as home } from './home';
import { routes as user } from './user';

export default [
  ...auth,
  ...home,
  ...user,
];
