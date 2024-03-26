import { useDispatch, useSelector} from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useMovieTraler = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector(store => store.movies.trailerVideo);
    
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();

        const trailerData = json.results.filter((video) => video.type === "Trailer");
        const trailer = trailerData.length ? trailerData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        !trailerVideo && getMovieVideos();
    }, []);
}

export default useMovieTraler;