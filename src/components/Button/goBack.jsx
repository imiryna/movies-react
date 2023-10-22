import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BoxCss, ButtonSt } from './goBackStyled';

export const GoBack = ({ movieId }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnClick = () => {
   
    navigate(location.state?.from.pathname);
    //?? ('/movies')
  };

  return (
    <BoxCss>
      <ButtonSt type="button" onClick={handleOnClick}>
        <Link state={{ from: location }} to={`/movies/${movieId}`}>
          Go back
        </Link>
      </ButtonSt>
    </BoxCss>
  );
};
