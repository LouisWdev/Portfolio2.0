const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {type: String, require: true},
  article: {type: String, required: true}
});

const ProjectPost = mongoose.model("ProjectPost", articleSchema);

module.exports = ProjectPost;