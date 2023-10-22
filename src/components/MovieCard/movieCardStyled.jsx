import styled from "styled-components";

export const ContainerCardCss = styled.div`
 position: relative;
 display:flex;

 
  cursor: pointer;
  text-decoration: none;
  flex-basis: calc((100% - 2 * 16px) / 3);
  border-radius: 5px;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: inherit;
    background-image: linear-gradient(
      180deg,
      #00000000 63.48%,
      rgba(0, 0, 0, 0.902) 100%
    );
  }
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const MovieCardImg = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 5px;
`;
export const MovieDescrCs = styled.div`
    width: 300px;
  padding: 0 8px;
  border-radius: 5px;
  margin-right: 24px;
  margin-left:44px;
`

export const MovieDescr = styled.ul`
    width: 500px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
 
`;
export const MovieCardTitle = styled.p`
  font-family: 'Roboto Medium', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.1;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
  margin-bottom:10px;
`;

export const TextCss = styled.p`
  font-family: 'Roboto Medium', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.1;
  text-transform: uppercase;
  color: #050505;
  margin: 0;
`;



