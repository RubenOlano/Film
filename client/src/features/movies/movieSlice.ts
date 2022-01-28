import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Actor, Movie } from "../../types/types";
import { fetchMovie } from "./movieAPI";
import { AxiosResponse } from "axios";


const initialState: Movie = {
    title: "",
    actors: [],
    poster: "",
    guesses: 0,
    currActors: [],
    year: 0
}

export const setMovie = createAsyncThunk(
    'movie/setMovie',
    async () => {
        const { data }: AxiosResponse['data'] = await fetchMovie()
        return data[0]
    }
)

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<Movie>) => {
            state = action.payload
        },
        pop: (state) => {
            state.guesses++
            if (state.guesses === 6)
                return
            const actor = state.actors.pop() as Actor
            state.currActors.push(actor)
        },
        reset: (state) => {
            state.guesses = 0
            state.currActors = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setMovie.pending, (state) => {
            state.title = 'loading'
        }).addCase(setMovie.fulfilled, (state, action) => {
            state.actors = action.payload.actors
            state.poster = action.payload.poster
            state.title = action.payload.title
            state.year = action.payload.year
        })
    }
})

export const { pop, reset } = movieSlice.actions

export const selectMovie = (state: RootState) => state.movie

export default movieSlice.reducer