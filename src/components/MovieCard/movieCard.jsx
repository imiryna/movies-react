import { NavLink, Outlet } from 'react-router-dom';
import {
  ContainerCardCss,
  MovieCardImg,
  MovieDescr,
  MovieDescrCs,
  MovieCardTitle,
  TextCss,
} from './movieCardStyled';

export const MovieCard = ({ moviesInfo }) => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const { overview, poster_path, title, genres } = moviesInfo;
  // genres.map(genre => console.log(genre))

  return (
    <>
      <ContainerCardCss>
        <MovieDescrCs>
          <MovieCardImg src={BASE_IMG_URL + poster_path} alt={title} />
        </MovieDescrCs>
        <MovieDescr>
          <MovieCardTitle>{title}</MovieCardTitle>
          <TextCss>Overview</TextCss>
          <p>{overview}</p>

          <TextCss>Genres: </TextCss>
          {genres.map(genre => (
            <p key={genre.id}>* {genre.name}</p>
          ))}
        </MovieDescr>
      </ContainerCardCss>
      <h1>Additional information</h1>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
