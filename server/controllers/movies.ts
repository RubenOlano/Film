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
    const Pulp_Fiction = new MovieModel({
        title: "Pulp Fiction",
        actors: [{
            name: "John Travolta",
            image: "https://m.media-amazon.com/images/M/MV5BMTMyMjZlYzgtZWRjMC00OTRmLTllZTktMmM1ODVmNjljMTQyXkEyXkFqcGdeQXVyMTExNzQ3MzAw._V1_UY317_CR21,0,214,317_AL_.jpg"

        }, {
            name: "Uma Thurman",
            image: "https://m.media-amazon.com/images/M/MV5BMjMxNzk1MTQyMl5BMl5BanBnXkFtZTgwMDIzMDEyMTE@._V1_UX214_CR0,0,214,317_AL_.jpg"
        }, {
            name: "Samuel L. Jackson",
            image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg"
        }, {
            name: "Bruce Willis",
            image: "https://m.media-amazon.com/images/M/MV5BMjA0MjMzMTE5OF5BMl5BanBnXkFtZTcwMzQ2ODE3Mw@@._V1_UY317_CR27,0,214,317_AL_.jpg"
        }, {
            name: "Tim Roth",
            image: "https://m.media-amazon.com/images/M/MV5BMjA5NTA3MDQyOV5BMl5BanBnXkFtZTcwODM4NDE3Mw@@._V1_UY317_CR16,0,214,317_AL_.jpg"
        }, {
            name: "Amanda Plummer",
            image: "https://m.media-amazon.com/images/M/MV5BMjAzNDczNzUzMV5BMl5BanBnXkFtZTcwOTQwNTQ1NA@@._V1_UY317_CR131,0,214,317_AL_.jpg"
        }],
        poster: "https://cantonpalacetheatre.org/wp-content/uploads/2021/06/Pulp-Fiction.jpg"
    })

    try {
        Pulp_Fiction.save((err, movie) => {
            if (err)
                return console.log(err)
            res.json({ movie })
        })
    } catch (error) {
        console.log(error)
    }
}