const mongoose = require('mongoose')
const{ Schema } = mongoose

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String
    },
    genre: [String],
    releaseDate: {
        type: Date
    },
    director: {
        type: String
    },
    cast: [String],
    poster: {
        type: String
    },
    averageRating: {
        type: Number,
        default: 0
    },
    totalReviews: {
        type: Number,
        default: 0
    }
})

const Movie = mongoose.model('Movies', MovieSchema)
module.exports = Movie