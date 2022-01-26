import mongoose, { Schema } from 'mongoose'
import { Actor, ActorSchema } from './ActorModel'

const MovieSchema: Schema = new Schema({
    title: { type: String, required: true },
    actors: { type: [ActorSchema], required: true },
    poster: { type: String, required: true }
})


export interface Movie extends Document {
    title: string,
    actors: [Actor],
    poster: string
}

export default mongoose.model<Movie>("Movie", MovieSchema);
