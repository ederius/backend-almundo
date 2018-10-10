var connection = require('./connection'),
	Schema = connection.Schema,
	timestamp = require('mongoose-timestamp'),

hotelsSchema = new Schema({
	name : {type:String, required:true},
	start : {type:String, required:true},
	images : {type:Array, required:true},
	price: {type:String, required:true},
});

hotelsSchema.plugin(timestamp);

var Hotels = connection.model('Hotels', hotelsSchema, 'hotels');

module.exports = Hotels;