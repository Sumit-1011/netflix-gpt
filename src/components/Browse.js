import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearchPage from './GptSearchPage';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies(); 
  usePopularMovies();
  useUpcomingMovies();
  return (

    <div>
      <Header />
      {showGptSearch ?
        (<GptSearchPage />) : 
        (<>
          <MainContainer />
          <SecondaryContainer/>
        </>)
      }
      
    </div>
  )
};

export default Browse;