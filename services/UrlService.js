const ShortUrl = require("../models/ShortUrl");

exports.getAllUrls = async () => {
  return await ShortUrl.find();
};

exports.createUrl = async (url) => {
  return await ShortUrl.create(url);
};

exports.getUrlById = async (id) => {
  return await ShortUrl.findById(id);
};

exports.updateUrl = async (id, url) => {
  return await ShortUrl.findByIdAndUpdate(id, url);
};

exports.deleteUrl = async (id) => {
  return await ShortUrl.findByIdAndDelete(id);
};
