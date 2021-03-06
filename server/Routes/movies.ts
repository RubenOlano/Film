import express from 'express'
import { fetchMovie, addMovie } from '../controllers/movies'

const router: express.Router = express.Router()

router.get('/', fetchMovie)
router.get('/add/:id', addMovie)

export default router