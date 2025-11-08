import { useDispatch, useSelector} from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";


const useMovieTraler = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector(store => store.movies.trailerVideo);
    
    const getMovieVideos = useCallback(async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();

        const trailerData = json.results.filter((video) => video.type === "Trailer");
        const trailer = trailerData.length ? trailerData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }, [dispatch, movieId]);

    useEffect(() => {
        if (!trailerVideo) getMovieVideos();
    }, [trailerVideo, getMovieVideos]);
};

export default useMovieTraler;