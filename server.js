var express = require('express');
var path = require('path')
var app = express();
var mongoose = require('mongoose');
var secret = require('./config/secret')
var PORT = process.env.PORT || secret.PORT;
var session = require('express-session');
var MongoStore = require('connect-mongo/es5')(session);
var routes = require('./routes/routes');

app.use('/', routes);
app.use(express.static(__dirname + '/public'));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

mongoose.connect(secret.database,function(err){
  if(err){
    console.log(err)
  }else{
    console.log("connected to the DB!")
  }
});


app.listen(PORT, function () {
  console.log('Example app listening on port '+ PORT);
});