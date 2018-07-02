const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

const apiEndpoint = process.env.API_ENDPOINT || 'https://reqres.in/api';

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: JSON.stringify(apiEndpoint),
});
