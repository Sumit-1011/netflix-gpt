import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store.movies.UpcomingMovies);

    const getUpcomingMovies = useCallback(async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }, [dispatch]);

    useEffect(() => {
        if (!upcomingMovies) getUpcomingMovies();
    }, [upcomingMovies, getUpcomingMovies]);
};

export default useUpcomingMovies;
