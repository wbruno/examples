//Wrong
function(query, callbackSuccess, callbackError) {
  //..
}

callback(data);
callback(data, err);

promise.then(
  function(data) {},
  function(err) {}
);

p1.then(function(dataP1) {
  p2(dataP1).then(function(dataP2) {
    p3(dataP2).then(function(dataP3) {
      console.log(dataP3);
    });
  });
});

-> Do not have a callback API
-> Do your own new Promise()
-> Forget to .catch()
