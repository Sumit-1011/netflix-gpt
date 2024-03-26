import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestion = () => {

  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className='p-4 m-4 mt-28 bg-black text-white text-lg opacity-90'>
      <div>
        {movieNames.map((movieNames, index) => <MovieList key={movieNames} title={movieNames} movies={movieResults[index]}/>)}
      </div>
    </div>
  )
}

export default GptMovieSuggestion;