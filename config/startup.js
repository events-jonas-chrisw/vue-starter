const env = process.env;

if (env.NODE_ENV !== 'production') {
    require('dotenv').config({silent: true});
}

env.NODE_ENV = env.NODE_ENV || 'development';
env.PORT = env.PORT || 8080;

module.exports = env;
