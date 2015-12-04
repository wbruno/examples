//callbacks

function fetch(query, callback) {
  //..
    callback(err, data);
}


fetch({ name: /^C/ }, function(err, data) {
  if(err) {
    return console.log(err);
  }

  console.log(data);
});

//promises

function fetch(query, callback) {
  //..
    callback(err, data);
}

var fetchAsync = Promise.promisify(fetch);

fetchAsync({ name: /^C/ })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });
