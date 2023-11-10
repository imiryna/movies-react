import { Link, useLocation } from 'react-router-dom';
import {
  MovieList,
  MovieCardImg,
  Items,
  MovieCardInfo,
  MovieCardTitle,
} from './moviesListStyled';

export const MoviesList = ({ moviesList }) => {
  const location = useLocation();
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <MovieList>
      {moviesList.map(({ id, poster_path, title }) => (
        <Items key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MovieCardImg
              src={BASE_IMG_URL + poster_path}
              alt={title}
              width="200px"
              height="300px"
            />
            <MovieCardInfo>
              <MovieCardTitle>{title}</MovieCardTitle>
            </MovieCardInfo>
          </Link>
        </Items>
      ))}
    </MovieList>
  );
};

// MoviesList.PropTypes = {
//     movies: PropTypes.arrayOf(
//         PropTypes.shape({
//     title: PropTypes.string,
//     id: PropTypes.number.isRequired,
//    })
//   ).isRequired,
// }
