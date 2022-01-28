import 'dotenv/config'
import MovieModel from '../models/MovieModel'
import express from 'express'
import axios from 'axios'

const KEY: string = process.env.KEY || ""

const API = axios.create({ baseURL: `https://imdb-api.com/en/API/Title/${KEY}` })

export const fetchMovie = async (_req: express.Request, res: express.Response) => {
    try {
        const movies = await MovieModel.aggregate([{ $sample: { size: 1 } }])
        res.json(movies)
    } catch (error) {
        console.log(error)
    }
}

export const addMovie = async (req: express.Request, res: express.Response) => {
    const { id } = req.params
    try {
        const { data } = await API.get(`/${id}/FullCast,Posters,`)
        const newMovie = new MovieModel({
            title: data.title,
            year: data.year,
            poster: data.image,
            actors: data.actorList.slice(0, 6)
        })
        newMovie.save()
        res.send(newMovie)
    } catch (error) {
        console.log(error)
    }
}