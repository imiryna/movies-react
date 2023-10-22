import { useState } from 'react';
import { fetchSearchMovie } from 'services/api';
import { toast } from 'react-toastify';
import { SearchForm } from 'components/SearchForm/searchForm';
import { MoviesList } from 'components/MoviesList/moviesList';
import { ContainerCss } from './page.styled';

export const Movies = () => {
  const [error, setError] = useState(null);
  const [searchMovies, setSearchMovies] = useState([]);

  const fetchData = async queryString => {
    try {
      const { results } = await fetchSearchMovie(queryString);

      setSearchMovies(results);
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      <ContainerCss>
        <SearchForm searchMovies={searchMovies} fetchData={fetchData} />
        {error && <duv>Oh no! Something does wron: {error}</duv>}
        {searchMovies.length > 0 && <MoviesList moviesList={searchMovies} />}
      </ContainerCss>
    </>
  );
};
