import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Actor, Movie } from "../../types/types";
import { fetchMovie } from "./movieAPI";
import { AxiosResponse } from "axios";

const initialState = {} as Movie;

export const setMovie = createAsyncThunk("movie/setMovie", async () => {
  const { data }: AxiosResponse["data"] = await fetchMovie();
  return data[0];
});

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Movie>) => {
      state = action.payload;
    },
    pop: (state) => {
      state.guesses++;
      if (state.guesses > 6) return;
      const actor = state.actors.pop() as Actor;
      state.currActors = [...state.currActors, actor];
    },
    reset: (state) => {
      state.year = 0;
      state.guesses = 0;
      state.currActors = [];
    },
    win: (state) => {
      state.currActors = [...state.currActors, ...state.actors];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setMovie.pending, (state) => {
        state.title = "loading";
      })
      .addCase(setMovie.fulfilled, (state, action) => {
        state.actors = action.payload.actors;
        state.poster = action.payload.poster;
        state.title = action.payload.title.replace("-", " ").replace(":", "");
        state.year = action.payload.year;
      });
  },
});

export const { pop, reset, win } = movieSlice.actions;

export const selectMovie = (state: RootState) => state.movie;

export default movieSlice.reducer;
