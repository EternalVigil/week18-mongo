// Mongoose Schema Model - News.js
var mongoose = require ("mongoose");

var Schema = mongoose.Schema;

var newsSchema = new Schema({
	title:{
		type: String,
		unique: true
	},
	articule:{
		type: String	
	},
	comments:{
		type: Schema.Types.ObjectId,
		ref: "Comment"
	}
});

var News = mongoose.model("News", newsSchema);

module.exports = News;