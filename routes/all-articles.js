const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
router.get("/", articleController.getAllArticles);

router.get("/:id", articleController.getDetails);

router.delete("/:id", articleController.deleteArticle);

router.post("/", articleController.addArticle);

module.exports = router;
