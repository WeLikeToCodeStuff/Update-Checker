var request = require('request');
const currentver = "1.23.4"


request("example.tld/version", function (error, response, body) {
  var version = JSON.parse(body).Version
  if (version == currentver) {
    console.log("Up to date.")
  } else if(version > currentver) {
    console.log("Out of date.")
  }
});
