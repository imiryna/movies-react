import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'components/services/api';
import { toast } from 'react-toastify';
import { MoviesList } from 'components/MoviesList/moviesList';
import { Loader } from 'components/Loader/loader';
import { ContainerCss } from './page.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isloader, setIsloader] = useState(false);

  useEffect(() => {
    const handleFetchMovies = async () => {
      try {
        setIsloader(true);
        const { results } = await fetchTrendingMovies();

        setMovies(results);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setIsloader(false);
      }
    };
    handleFetchMovies();
  }, []);

  return (
    <>
      <ContainerCss>
        {error && <duv>Oh no! Something does wron: {error}</duv>}
        {movies.length > 0 && <MoviesList moviesList={movies} />}
      </ContainerCss>
      {isloader && <Loader />}
    </>
  );
};
