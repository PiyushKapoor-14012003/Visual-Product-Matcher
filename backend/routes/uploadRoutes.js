const express = require("express");
const router = express.Router();
const { handleUpload } = require("../controllers/uploadController");
const upload = require("../middlewares/uploadMiddleware");

router.post("/", upload.single("file"), handleUpload);

module.exports = router;
