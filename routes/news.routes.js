const express = require("express");
const verifyJWT = require("../middlewares/verifyJWT.middleware");
const { getNews } = require("../controllers/news.controller");

const router = express.Router();

router.route("/").get(verifyJWT, getNews);

module.exports = router;


