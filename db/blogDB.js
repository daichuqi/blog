var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
  title:String,
  text:String,
  image:String,
  date:String
});

module.exports = mongoose.model('BlogDB',BlogSchema);