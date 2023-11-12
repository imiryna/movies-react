import styled from 'styled-components';

export const MovieList = styled.ul`
  margin-top: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 40px;
  margin-right: 40px;
  gap: 16px;
  display: flex;
  position: relative;
  margin-bottom: 24px;
  list-style: none;
`;

export const Items = styled.li`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  flex-basis: calc((100% - 3 * 16px) / 4);
  border-radius: 5px;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const MovieCardImg = styled.img`
  width: 260px;
  height: 360px;
  border-radius: 5px;
`;

export const MovieCardInfo = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* padding-left: 12px; */
  /* padding-right: 12px; */
  padding-bottom: 12px;
  width: 200px;
`;

export const MovieCardTitle = styled.p`
  font-family: 'Roboto Medium', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.15;
  text-transform: uppercase;
  color: #ffffff;
`;
