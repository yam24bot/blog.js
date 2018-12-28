const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

schema.set("toJSON", {
  virtuals: true // _id => id
});

module.exports = mongoose.model("Post", schema);
