import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies  = action.payload
  },
  },
});
export const selectMovies = (state) => state.movie.movies;
export const { setMovies } = movieSlice.actions;

// export const selectRecommend = (state) => state.movie.recommend;
// export const selectNewDisney = (state) => state.movie.newDisney;
// export const selectOriginal = (state) => state.movie.original;
// export const selectTrending = (state) => state.movie.trending;

export default movieSlice;

/*

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies  = action.payload
        }
    }
})

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;
*/