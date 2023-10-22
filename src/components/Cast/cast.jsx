import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchMoviemovieCredits } from 'services/api';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

  // get the movie ID from the path
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCredits = async castMovieID => {
      try {
        setIsLoading(true);
        const { cast } = await fetchMoviemovieCredits(castMovieID);
        
        setCast(cast);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCredits(movieId);
  }, [movieId]);

  //   const {character, name, profile_path}

  return (
    <>
      {error && <div>Oh no! Something does wron: {error}</div>}
      <ul>
        {cast.map(item => (
          <li>
            <img src={BASE_IMG_URL + item.profile_path} alt={item.name} />
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
            <hr/>
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
    </>
  );
};

export default Cast;
