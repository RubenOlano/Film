import axios, { Axios } from "axios";
import type { Movie } from "../../types/types";

const API: Axios = axios.create({ baseURL: 'http://localhost:5000' })

const defaultstate: Movie = {
    title: "",
    actors: [{ name: "", image: "" }],
    poster: ""
}


export function fetchMovie(movie = defaultstate) {
    try {
        return API.get('/movies')
    } catch (error) {
        return console.log(error)
    }
}