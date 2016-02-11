var express = require('express');
var path = require('path')
var server = express();
var PORT = process.env.PORT || 3000;

server.use(express.static(__dirname + '/public'));
server.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});



server.listen(PORT, function () {
  console.log('Example app listening on port '+ PORT);
});