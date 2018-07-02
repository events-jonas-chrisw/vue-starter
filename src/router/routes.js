import { routes as app } from '../app';

const root = [];

const notFound = {
  path: '*',
  redirect: '/'
};

export default [ ...root, ...app, notFound ];
