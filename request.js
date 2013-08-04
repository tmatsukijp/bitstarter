var request = require('request');
var fs = require('fs');
var URLSITE_DEFAULT = "http://polar-chamber-4747.herokuapp.com";


request(URLSITE_DEFAULT, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
});

/*
var req = function(targetURL){
  request(targetURL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Print the google web page.
      return body;
    }
  });
};
*/
// var buffer = Buffer(4000);
// var len = buffer.write(req(URLSITE_DEFAULT));
// console.log(len);
