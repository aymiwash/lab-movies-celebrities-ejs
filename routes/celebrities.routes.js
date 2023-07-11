// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here



router.get("/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res) => {
  const data = req.body;
  try {
    const newCelebrity = await Celebrity.create(data);
    res.redirect("/celebrities");
  } catch (error) {
    console.log(error);
    res.render("celebrities");
  }
});

router.get("/", async (req, res) => {
  try {
    const allCelebrities = await Celebrity.find();
    res.render("celebrities/celebrities", {allCelebrities});
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;