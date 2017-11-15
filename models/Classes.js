var mongoose = require('mongoose');

//Schema
var CoursesSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	}
});

var Course = module.exports = mongoose.model('Course', CoursesSchema);

//Get Classes
module.exports.getCourse = function(callback, limit){
	Course.find(callback).limit(limit);
}