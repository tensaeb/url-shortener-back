const UrlService = require("../services/UrlService");

exports.getAllUrls = async (req, res) => {
  try {
    const urls = await UrlService.getAllUrls();
    res.json({ data: urls, status: "Success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUrl = async (req, res) => {
  try {
    const url = await UrlService.createUrl(req.body);
    res.json({ data: url, status: "Success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUrlById = async (req, res) => {
  try {
    const url = await UrlService.getUrlById(req.params.id);
    res.json({ data: url, status: "Success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.UpdateUrl = async (req, res) => {
  try {
    const url = UrlService.updateUrl(req.params.id, req.body);
    res.json({ data: url, status: "Success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUrl = async (req, res) => {
  try {
    const url = UrlService.deleteUrl(req.params.id);
    res.json({ data: url, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
