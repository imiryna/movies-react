import styled from 'styled-components';

export const SectionCss = styled.header`
  padding-top: 20px;
  padding-bottom: 50px;
  margin-left: 55px;
`;

export const SearchFormCss = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin: 20px;
  gap: 10px;
  position: relative;
`;

export const SearchInputCss = styled.input`
  display: inline-block;
  color: #1d0533;
  width: 100%;
  height: 30px;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding: 8px;
  border: 1px solid #5cabf5;
  border-radius: 4px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &::placeholder {
    font: inherit;
    color: #cccccc;
  }

  @media (min-width: 1200px) {
    width: 300px;
  }
`;

export const SearchButtonCss = styled.button`
  position: absolute;
  top: 0;
  left: 50%;
  display: inline-block;
  width: 80px;
  height: 48px;
  border: 1px solid #935bcb;
  /* border-radius: 4px; */
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  background-color: #5cabf5;
  color: #fff;
  font: inherit;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;
  font-size: 20px;

  &:hover {
    background-color: rgba(232, 235, 25, 1);
    color: #131415;
  }
`;
