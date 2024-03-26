import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[45%] md:pt-[20%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-xl md:text-6xl font-bold'>{title}</h1>
      <p className='none md:inline-block text-lg w-2/6 py-6 text-gray-200'>{overview}</p>
      <div className='space-x-2'>
        <button className='bg-white text-black p-2 mt-4 md:m-0 md:p-4 md:px-12 rounded-md text-xl hover:bg-gray-300'>▶ Play</button>
        <button className='none md:inline-block bg-gray-500 text-white p-4 px-12 rounded-md text-xl hover:bg-opacity-80'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;

