// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/create", async (req, res) => {
    const allCelebrities = await Celebrity.find()
    res.render("movies/new-movie", { allCelebrities })
})

router.post("/create", async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.redirect("/");
    }
    catch (error) { console.log(error) }
})


module.exports = router