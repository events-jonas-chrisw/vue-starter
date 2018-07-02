const express = require('express');
const env = require('./config/startup');

const app = express();

if (env.npm_lifecycle_event === 'dev') {
  require('./build/dev-server').init(app);
}

app.use(express.static('dist'));

// Rewrite for HTML5 browser history
app.get('/*', function(request, response){
  response.sendFile('dist/index.html', {
    root : __dirname
  });
});

app.listen(env.PORT, () => console.log(`App listening on port ${env.PORT}.`));
