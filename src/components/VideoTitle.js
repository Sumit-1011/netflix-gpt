import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='text-lg w-3/6 py-6 text-gray-700'>{overview}</p>
      <div className='space-x-2'>
        <button className='bg-gray-400 text-black opacity-50 p-4 px-12 rounded-md text-lg'>▶ Play</button>
        <button className='bg-gray-400 text-black opacity-50 p-4 px-12 rounded-md text-lg'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;

