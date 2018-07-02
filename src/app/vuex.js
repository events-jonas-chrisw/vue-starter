import { vuex as auth } from './auth';

const vuex = { auth };
const keys = Object.keys(vuex);

const modules = keys.reduce((acc, key) => ({ ...acc, [key]: vuex[key].module }), {});
const plugins = keys.reduce((acc, key) => [...acc, vuex[key].plugin], []);

export default { modules, plugins }
