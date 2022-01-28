import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Movie } from "../../types/types";
import { fetchMovie } from "./movieAPI";
import { AxiosResponse } from "axios";
import { Actor } from "../../types/types";

const empty: Array<Actor> = []

const initialState: Movie = {
    title: "",
    actors: empty,
    poster: ""
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
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setMovie.pending, (state) => {
            state.title = 'loading'
        }).addCase(setMovie.fulfilled, (state, action) => {
            state.actors = action.payload.actors
            state.poster = action.payload.poster
            state.title = action.payload.title
        })
    }
})


export const selectMovie = (state: RootState) => state.movie

export default movieSlice.reducer