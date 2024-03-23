import React from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({title, posterPath}) => {
  return (
      <div className='w-48 pr-6'>
          <img
              className='rounded-2xl'
              alt={title}
              src={IMG_CDN + posterPath}
          />
    </div>
  )
}

export default MovieCard;