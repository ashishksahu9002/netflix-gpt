import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    genreList: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addGenreList: (state, action) => {
      state.genreList = action.payload;
    },
    addMovieGenreToState: (state, action) => {
      const key = action.payload;
      if (!(key in state)) {
        state[key] = null;
      }
    },
    addMoviesToMovieGenre: (state, action) => {
    
      const {key, results} = action.payload;
      if ((key in state)) {
        state[key] = results;
      }

    },
  },
});

export const {
  addTrailerVideo,
  addGenreList,
  addMovieGenreToState,
  addMoviesToMovieGenre,
  addNowPlayingMovies
} = movieSlice.actions;

export default movieSlice.reducer;
