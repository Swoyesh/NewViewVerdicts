const express = require('express')
const router = express.Router()
const { getMovies, postMovies, updateMovie, isAdmin } = require("../Controllers/movieController")

// require('dotenv').config()

//Movie paths
router.post('/postMovies', isAdmin, postMovies)
router.put('/updateMovie/:id', isAdmin, updateMovie)
// router.get('/getMovies', getMovies)

module.exports = router