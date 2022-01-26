import { connect, Schema } from "mongoose";


interface Movie {
    title: String,
    actors: [String]
    poster: String
}

const schema = new Schema<Movie>({
    title: { type: String, required: true },
    actors: { type: [String], required: true },
    poster: { type: String, required: true },
})