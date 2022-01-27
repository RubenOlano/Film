import MovieModel from '../models/MovieModel'
import express from 'express'


export const fetchMovie = async (_req: express.Request, res: express.Response) => {
    try {
        const movies = await MovieModel.aggregate([{ $sample: { size: 1 } }])
        res.json(movies)
    } catch (error) {
        console.log(error)
    }
}

export const addMovie = async (_req: express.Request, res: express.Response) => {
    res.send("wait")
    // const Baby_Driver = new MovieModel({
    //     title: "Baby Driver",
    //     actors: [{
    //         name: "Ansel Elgort",
    //         image: "https://imdb-api.com/images/original/MV5BZTk1NWNmMTEtODdiMS00YzQ1LTg4MDQtMDczMzU5OGM3ZGFhXkEyXkFqcGdeQXVyODIzMDE1OTg@._V1_Ratio1.0000_AL_.jpg"
    //     }, {
    //         name: "Jon Bernthal",
    //         image: "https://imdb-api.com/images/original/MV5BMTcwNzA5MDg0OV5BMl5BanBnXkFtZTcwMTU2NjE0Nw@@._V1_Ratio1.0000_AL_.jpg"
    //     }, {
    //         name: "Jon Hamm",
    //         image: "https://imdb-api.com/images/original/MV5BNzg0MzA4MTY5M15BMl5BanBnXkFtZTcwODg2MTIwOQ@@._V1_Ratio1.0000_AL_.jpg"
    //     }, {
    //         name: "Eiza González",
    //         image: "https://imdb-api.com/images/original/MV5BMTU4MjA5M2EtNmQ2OC00YjdhLWEyYWMtYzdiOTRkZWM3NGM2XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.7857_AL_.jpg"
    //     }, {
    //         name: "Micah Howard",
    //         image: "https://imdb-api.com/images/original/MV5BZGNmOWNiMGYtYzhjMS00ZjZjLWE5YjQtNDJkNzhjMjc3MTdkXkEyXkFqcGdeQXVyNjgxNzc5NjQ@._V1_Ratio1.0000_AL_.jpg"
    //     }, {
    //         name: "Lily James",
    //         image: "https://imdb-api.com/images/original/MV5BMTgxMjM2NTAyMV5BMl5BanBnXkFtZTgwOTU4NjU2NDE@._V1_Ratio1.0000_AL_.jpg"
    //     }],
    //     poster: "https://imdb-api.com/images/original/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_Ratio0.7273_AL_.jpg"
    // })

    // try {
    //     Baby_Driver.save((err, movie) => {
    //         if (err)
    //             return console.log(err)
    //         res.json({ movie })
    //     })
    // } catch (error) {
    //     console.log(error)
    // }
}