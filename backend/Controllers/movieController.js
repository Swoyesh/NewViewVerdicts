const Movie = require('../Models/Movie')
// require('dotenv').config()

//To ensure an Admin
exports.isAdmin = (req, res, next) => {
    // Assuming you have user roles implemented
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json({ message: 'Access denied, Admins only' });
    }
};

//Post movies in the database
exports.postMovies = async(req, res)=>{
    try{
        movie = await Movie.create({
            title: req.body.title,
            description: req.body.description,
            genre: req.body.genre,
            releaseDate: req.body.releaseDate,
            director: req.body.director,
            cast: req.body.cast,
            poster: req.body.poster,
            averageRating: req.body.averageRating,
            totalReviews: req.body.totalReviews
        })
        res.status(200).send({successful: "Movie added!"})
    }catch(error){
        res.status(500).send({error: "Internal server error!!"})
    }
}

//Put/Update specific movie in the database
exports.updateMovie = async(req, res)=>{
    const { id } = req.params
    const { title, description, genre, releaseDate } = req.body

    try {
        const movie = Movie.findById(id)
        if (!movie){
            return res.status(404).json({ message: 'Movie not found' });
        }

        const updatedMovie = await movie.save()
        res.status(200).json({
            message: 'Movie updated successfully',
            movie: updatedMovie,
          });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}