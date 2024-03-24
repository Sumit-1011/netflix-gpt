import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className='w-screen bg-black'>
        <div className='-mt-64 relative z-20 pl-8'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
          <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        </div>
    </div>)
  )
}

export default SecondaryContainer