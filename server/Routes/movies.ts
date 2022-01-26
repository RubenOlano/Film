import express from 'express'
import { fetchMovie } from '../controllers/movies'

const router: express.Router = express.Router()

router.get('/', fetchMovie)

export default router