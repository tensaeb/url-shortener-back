const express = require("express");

const {
  getAllUrls,
  createUrl,
  getUrlById,
  UpdateUrl,
  deleteUrl,
} = require("../controllers/UrlController");
const { updateUrl } = require("../services/UrlService");

const router = express.Router();

router.route("/").get(getAllUrls).post(createUrl);
router.route("/id").get(getUrlById).put(updateUrl).delete(deleteUrl);

module.exports = router;
