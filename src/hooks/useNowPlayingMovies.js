import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

    const getNowPlayingMovies = useCallback(async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }, [dispatch]); // ✅ stable function

    useEffect(() => {
        if (!nowPlayingMovies) getNowPlayingMovies();
    }, [nowPlayingMovies, getNowPlayingMovies]); // ✅ fixed deps
};

export default useNowPlayingMovies;
