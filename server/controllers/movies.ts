import 'dotenv/config'
import MovieModel from '../models/MovieModel'
import express from 'express'
import axios from 'axios'
import { results } from 'constants/constants'

const KEY: string = process.env.KEY || ""

const API = axios.create({ baseURL: `https://imdb-api.com/en/API/Title/${KEY}` })

export const fetchMovie = async (_req: express.Request, res: express.Response) => {
    try {
        const movies = await MovieModel.aggregate([{ $sample: { size: 1 } }])
        res.json(movies).status(202)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

export const addMovie = async (req: express.Request, res: express.Response) => {
    const { id } = req.params
    try {
        const { data }: { data: results } = await API.get(`/${id}/FullCast,Posters,`)

        if (!data.actorList?.slice()) {
            res.status(404).send("unable to access api")
            return;
        }

        const newMovie = new MovieModel({
            title: data.title,
            year: data.year,
            poster: data.image,
            actors: data.actorList?.slice(0, 6)
        })
        newMovie.save()
        res.send(newMovie).status(202)
    } catch (error) {
        console.log(error)
        res.send(error).status(404)
    }
}