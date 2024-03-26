import React, { useRef } from 'react';
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {

    const langkey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispactch = useDispatch();

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            'https://api.themoviedb.org/3/search/movie?query=' + (movie) + '&include_adult=false&language=en-US&page=1',
            API_OPTIONS);
        const json = await data.json();
        return json.results;
        //will return a promise and not a result
    };

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        //MAke an API call to GPT API to get GPT movies results

        const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the Query : " + searchText.current.value + ". Only give me names of 5 movies, comma seperated like the example resluts given ahead. Example Results: Gadar, Sholay, Mela, Golmaal, Phir Hera Pheri"; 

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        if (!gptResults.choices) {
            // TODO: Write Error Handling
            alert("GPT API Failed");
        }

        //console.log(gptResults.choices?.[0]?.message?.content);
        
        //Hera Pheri, Andaz Apna Apna, Dhamaal, Welcome, Chup Chup Ke
        const gptMovies = (gptResults.choices?.[0]?.message?.content).split(",");

        //[Hera Pheri, Andaz Apna Apna, Dhamaal, Welcome, Chup Chup Ke]

        const promiseArr = gptMovies.map((movie) => searchMovieTMDB(movie));
        //["Promise","Promise", "Promise", "Promise", "Promise"]
        //Promise will take some time to resolve

        const tmdbGptResults = await Promise.all(promiseArr); 
        console.log(tmdbGptResults);

        dispactch(addGptMovieResults({movieNames: gptMovies, movieResults: tmdbGptResults}));
    }

    return (
    <div className='pt-[10%] flex justify-center'>
            <form
                className='bg-black w-1/2 grid grid-cols-12 rounded-lg'
                onSubmit={(e)=>e.preventDefault()}   
            >
            <input 
                ref={searchText}   
                type='text'
                placeholder={lang[langkey].gptSearchPlaceHolder}
                className='p-4 m-4 col-span-10 text-lg rounded-3xl focus:rounded-lg'
            />
                <button
                    className='bg-red-700 text-white p-4 m-4 col-span-2 text-lg rounded-xl hover:rounded'
                    onClick={handleGptSearchClick}
                >
                    {lang[langkey].search}
            </button>
        </form>        
    </div>
    )
}

export default GptSearchBar;