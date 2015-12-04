//Right
function(query, callback) {
  //..
}

callback(null, data);
callback(err);

promise
  .then(function(data) {})
  .catch(function(err) {});


p1
  .then(function(dataP1) {
    return p2(dataP1);
  })
  .then(function(dataP2) {
    return p3(dataP2);
  })
  .then(function(dataP3) {
    console.log(dataP3);
  });



function foo() {
  return promise
    .then(function(data) {
      //..
      return data;
    });
  }
}

foo()
  .then(funtion(data) {
    console.log(data);
  });

