'use strict';

let express       = require('express'),
    compression   = require('compression'),
    app           = express();


app.use(compression());

app.disable('etag');
app.disable('x-powered-by');


app.get('/', function getHome(request, response, next) {
  response.send('Home');
});

app.use('/', require('./routes'));

app.use(function(request, response, next) {
  response.status(404).render('404', {
    title: 'Página não encontrada'
  });
});

app.use(function(err, request, response, next) {
  response.status(err.status || 500);

  //log
  if (request.xhr) {
    response.json({ err: err.message });
  } else {
    response.render('error', {
      message: err.message
    });
  }
});

module.exports = app;
