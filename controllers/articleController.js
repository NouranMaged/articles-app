const Article = require("../models/articleSchema");

const getAllArticles = (req, res) => {
  //Article is the Array of data inside mongodb database
  Article.find()
    .then((result) => {
      res.render("index", { myTitle: "HOME", arrArticle: result });
    })
    .catch((err) => {});
};
const getDetails = (req, res) => {
  Article.findById(req.params.id)
    .then((result) => {
      res.render("details", {
        myTitle: "Article details",
        articleDetails: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteArticle = (req, res) => {
  Article.findByIdAndDelete(req.params.id)

    .then((params) => {
      res.json({ mylink: "/all-articles" });
    })

    .catch((err) => {
      console.log(err);
    });
};

const addArticle = (req, res) => {
  const article = new Article(req.body);
  article
    .save()
    .then((result) => {
      res.redirect("/all-articles");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllArticles,
  getDetails,
  deleteArticle,
  addArticle,
};
