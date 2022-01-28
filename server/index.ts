import 'dotenv/config'
import { CallbackError, connect } from "mongoose";
import express from "express"
import router from './routes/movies'
import cors from 'cors'

const app: express.Application = express()
const URL: string = process.env.CONNECTION_URL || ""
const PORT: any = process.env.PORT || 5000

app.use(cors())

app.use('/movies', router)

connect(URL, (err: CallbackError) => {
    if (err)
        console.log(err)
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
})