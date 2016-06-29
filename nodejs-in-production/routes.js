'use strict';

let express = require('express'),
    router  = express.Router();


app.get('/api', function getApi(request, response, next) {
  response.send('api');
});


module.exports = router;
