var express = require('express');
var path = require('path')
var server = express();
var mongoose = require('mongoose');
var secret = require('./config/secret')
var PORT = process.env.PORT || secret.PORT;
var BlogDB = require('./db/blogDB');
var session = require('express-session');
var MongoStore = require('connect-mongo/es5')(session);
var bodyParser = require('body-parser');
var moment = require('moment');

server.use(bodyParser.json());
server.use(express.static(__dirname + '/public'));
server.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

mongoose.connect(secret.database,function(err){
  if(err){
    console.log(err)
  }else{
    console.log("connected to the DB!")
  }
});

server.post('/getAllBlogs', function(req,res,next){
    BlogDB.find(function(err,allblogs){
    if(allblogs){
      res.json(allblogs);
    }else{
      return next(err);
    }
  });
})

server.post('/getOneBlog', function(req,res,next){
  BlogDB.findById(req.body.id, function (err, blog) {
    if(blog){
      res.json(blog);
    }else{
      return next(err);
    }
  });
})

server.post('/postBlog', function(req,res,next){
  var blogDB = new BlogDB();
  blogDB.title = req.body.title;
  blogDB.date = Date.now();
  blogDB.text = req.body.text;
  blogDB.save(function(err){
    if(err){
      return next(err);
    }else{
      res.send('postBlog completed')
    }
  });
});

server.post('/updateBlog', function(req,res,next){
  BlogDB.findById(req.body.id, function (err, blog) {
    blog.title = req.body.title;
    blog.text = req.body.text;
    blog.save(function(err){
      if(err){
        return next(err);
      }else{
        res.send('updateBlog completed')
      }
    });
  });
});

server.post('/deleteBlog', function(req,res,next){
  BlogDB.findByIdAndRemove(req.body.id, function (err) {
    if(err) return next(err);
  });
});


server.listen(PORT, function () {
  console.log('Example app listening on port '+ PORT);
});