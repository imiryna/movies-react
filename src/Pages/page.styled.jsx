import styled from 'styled-components';

export const ContainerCss = styled.div`
  width: 1300px;
  margin-left: auto;
  margin-right: auto;
`;

/* general*/

export const HomeContainer = styled.div`
  min-width: 335px;

  @media screen and (max-width: 768px) {
    min-width: 704px;
    margin-left: 24px;
    margin-left: 24px;
  }

  @media screen and (max-width: 1440px) {
    min-width: 1100px;
    margin-left: 40px;
    margin-left: 40px;
  }
`;

export const TextError = styled.p`
  font-size: 25px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 120px;
  height: 48px;
  border: 1px solid #935bcb;
  border-radius: 30px;
  background-color: #39086a;
  color: #fff;
  font: inherit;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;
  font-size: 20px;
  margin: 10px 0;

  &:hover {
    background-color: #935bcb;
    color: #fff;
  }
`;

/*home #5cabf5;*/

export const TrendingTitle = styled.h1`
  font-size: 2rem;
  color: #021c35;
  font-weight: 700;
  margin: 1rem 0;
  display: block;
  text-transform: uppercase;
  text-align: center;
`;

/*movie details*/

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 20px 20px;
`;

export const MovieCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const Poster = styled.img`
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  align-self: flex-start;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  padding: 10px 20px;
`;

export const Title = styled.h2`
  margin-top: 10px;
  font-size: 2rem;
  font-weight: 700;
`;

export const Header = styled.h3`
  margin: 15px 0 5px 0;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const TextData = styled.span`
  margin: 5px 0;
  font-size: 1rem;
  font-weight: 400;
  text-align: justify;
`;
