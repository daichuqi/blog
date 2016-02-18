var express = require('express');
var server = express();
var BlogDB = require('../db/blogDB');
var bodyParser = require('body-parser');

server.use(bodyParser.json());
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

module.exports = server;
