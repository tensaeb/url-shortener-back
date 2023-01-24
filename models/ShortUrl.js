const mongoose = require("mongoose");
const shortid = require("shortid");
const { v4: uuidv4 } = require("uuid");

const Schema = mongoose.Schema;
const urlCode = shortid.generate();
// const shortUrl = "tnsae.me/" + urlCode;

const ShortUrlSchema = new Schema({
  code: {
    type: String,
    required: true,
    default: urlCode,
  },
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: () => "tnsae.me/" + urlCode,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

ShortUrlSchema.pre("findOneAndUpdate", function (next) {
  this.update({}, { $set: { updatedAt: new Date() } });
  next();
});

module.exports = mongoose.model("ShortUrl", ShortUrlSchema);
