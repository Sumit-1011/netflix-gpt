import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        PopularMovies: null,
        UpcomingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, actions) => {
            state.nowPlayingMovies = actions.payload;
        },
        addPopularMovies: (state, actions) => {
            state.PopularMovies = actions.payload;
        },
        addUpcomingMovies: (state, actions) => {
            state.UpcomingMovies = actions.payload;
        },
        addTrailerVideo: (state, actions)=>{
            state.trailerVideo = actions.payload;
        },
    },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;