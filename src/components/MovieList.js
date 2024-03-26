import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    // Check if movies is null or undefined
    if (!movies) {
        return null; // Or render a loading spinner or placeholder
    }

    return (
        <div className='px-6'>
             <h1 className='text-xl md:text-3xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-auto no-scrollbar'>
                <div className='flex'>
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie?.id}
                            title={movie?.title || "Title Not Available"}
                            posterPath={movie?.poster_path || ""}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
