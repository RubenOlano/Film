import MovieModel from '../models/MovieModel'
import express from 'express'


export const fetchMovie = async (_req: express.Request, res: express.Response) => {
    try {
        const movies = await MovieModel.findOne()
        res.json({ movie: movies })
    } catch (error) {
        console.log(error)
    }
}