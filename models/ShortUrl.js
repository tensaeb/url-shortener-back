const mongoose = require("mongoose");
const shortid = require("shortid");

const Schema = mongoose.Schema;

const ShortUrlSchema = new Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: `tnsae.short/${shortid.generate()}`,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ShortUrl", ShortUrlSchema);
