import React from 'react'
import lang from "../utils/langConstants";
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

    const langkey = useSelector((store) => store.config.lang);

    return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12 rounded-lg'>
            <input 
                type='text'
                placeholder={lang[langkey].gptSearchPlaceHolder}
                className='p-4 m-4 col-span-10 text-lg rounded-3xl focus:rounded-lg'
                />
            <button className='bg-red-700 text-white p-4 m-4 col-span-2 text-lg rounded-xl hover:rounded'
            >{lang[langkey].search}
            </button>
        </form>        
    </div>
    )
}

export default GptSearchBar;