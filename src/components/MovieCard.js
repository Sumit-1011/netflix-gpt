import React from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({title, posterPath}) => {
  if (!posterPath) return null;
  return (
      <div className='w-36 md:w-48 pr-6'>
          <img
              className='rounded-2xl'
              alt={title}
              src={IMG_CDN + posterPath}
          />
    </div>
  )
}

export default MovieCard;