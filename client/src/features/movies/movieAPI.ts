import axios, { Axios } from "axios";
import type { Movie } from "../../types/types";

const API: Axios = axios.create({ baseURL: 'https://film-guess.herokuapp.com/' })

const defaultstate: Movie = {
    title: "",
    actors: [],
    poster: "",
    currActors: [],
    year: 0,
    guesses: 0
}


export function fetchMovie(movie = defaultstate) {
    try {
        return API.get('/movies')
    } catch (error) {
        return console.log(error)
    }
}