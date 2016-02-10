var express = require('express');
var server = express();
var PORT = process.env.PORT || 3000;

server.use(express.static(__dirname + '/public'));

server.listen(PORT, function () {
  console.log('Example app listening on port '+ PORT);
});