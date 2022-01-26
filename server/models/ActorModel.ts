import mongoose, { Schema } from 'mongoose'

const ActorSchema: Schema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true }
})


export interface Actor extends Document {
    name: string,
    image: string
}

export default mongoose.model<Actor>("Actor", ActorSchema)