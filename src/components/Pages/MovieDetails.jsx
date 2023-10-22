import { useState, useEffect } from 'react';
import * as API from 'components/services/api';
import { MovieCard } from 'components/MovieCard/movieCard';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/loader';
import { useParams } from 'react-router';
import { GoBack } from 'components/Button/goBack';

export const MovieDetails = () => {
  const [moviesInfo, setMoviesInfo] = useState('');
  const [error, setError] = useState(null);
  const [isloader, setIsloader] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async searchedMovieId => {
      try {
        setIsloader(true);
        const movie = await API.fetchMovieBiId(searchedMovieId);
        setMoviesInfo(movie);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setIsloader(false);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
      <GoBack />
      {error && <div>Oh no! Something does wrong: {error}</div>}
      {moviesInfo && <MovieCard moviesInfo={moviesInfo} />}
      {isloader && <Loader />}
    </>
  );
};
