const express = require("express");

const {
  getAllUrls,
  createUrl,
  getUrlById,
  UpdateUrl,
  deleteUrl,
} = require("../controllers/UrlController");

const router = express.Router();

router.route("/").get(getAllUrls).post(createUrl);
router.route("/:id").get(getUrlById).put(UpdateUrl).delete(deleteUrl);

module.exports = router;
