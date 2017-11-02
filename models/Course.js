var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//class Schema
var courseSchema = new Schema({
    name:{
        type: String,
        required: true
    }
});

var Course = module.exports = mongoose.model('Course', courseSchema);

// get classes
module.exports.getCourse = function(callback, limit){
    Course.find(callback).limit(limit);
}