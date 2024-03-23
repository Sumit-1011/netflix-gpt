import { useSelector } from "react-redux";
import useMovieTraler from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {

  
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTraler(movieId);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoBackground