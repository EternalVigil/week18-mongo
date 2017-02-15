// Mongoose Schema Model - Comment.js
var mongoose = require ("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	body:{
		type: String
	},
	author:{
		type: String
	}
});

var Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;