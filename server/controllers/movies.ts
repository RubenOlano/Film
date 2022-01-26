import MovieModel from '../models/MovieModel'



export const fetchMovie = async (req, res) => {
    try {
        const movies = await MovieModel.findOne()
        res.json({ movie: movies })
    } catch (error) {
        console.log(error)
    }
}