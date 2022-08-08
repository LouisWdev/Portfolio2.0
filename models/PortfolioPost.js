const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {type: String, require: true},
  article: {type: String, required: true},
  authorname: {type: String, required: true}
});

const Articles = mongoose.model("PortfolioPost", articleSchema);

module.exports = Articles;