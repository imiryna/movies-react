import {useState} from 'react';
import * as API from '../services/api';
import { toast } from 'react-toastify';
import {SearchForm} from '../SearchForm/searchForm';
import {MoviesList} from '../MoviesList/moviesList';
import { ContainerCss } from './pageStaled/page';

export const Movies = ()=>{
    const [error, setError] = useState(null);
    const [searchMovies, setSearchMovies] = useState([])

    const fetchData = async (queryString) => {
        try {
         const {results}  = await API.fetchSearchMovie(queryString);

          setSearchMovies(results);
        } catch (error) {
            setError(error.message)
            toast.error(error.message);
        }
        
    }

    return (
        <>
        <ContainerCss>
             <SearchForm 
        searchMovies={searchMovies}
        fetchData={fetchData}
        />
         {error && <duv>Oh no! Something does wron: {error}</duv>}
         {searchMovies.length > 0 && <MoviesList moviesList={searchMovies}/>}
        </ContainerCss>
        </>
    )
}