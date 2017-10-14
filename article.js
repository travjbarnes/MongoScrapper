
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  Url: {
    type: String,
    required: true
  },

  Summary: {
    type: String,
    required: false
  }
    note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});


var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
