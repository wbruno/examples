'use strict';

let express = require('express'),
    session = require('express-session'),
    app = express();


app.use(session({
  secret: 'linkidiomas',
  saveUninitialized:true,
  resave: true
}));

app.get('/', function(request, response, next) {
  response.sendFile(`${process.env.PWD}/index.html`);
});

app.post('/count', function(request, response, next) {
  request.session.count = request.session.count ? request.session.count : 0;
  request.session.count += 1;

  console.log('request.session.count', request.session.count);

  response.status(200).json({ count: request.session.count });
});

app.listen(3000);
