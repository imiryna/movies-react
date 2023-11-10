import styled from 'styled-components';

export const SectionCss = styled.header`
  padding-top: 20px;
  padding-bottom: 50px;
`;

export const SearchFormCss = styled.form`
  /* display: flex;
  align-items: center;
  justify-content: start;
  padding: 20px 0 20px 0;
  background: linear-gradient(#f4f4f2cc, rgba(30, 30, 30, 0.6));
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); */
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
    background-color: #935bcb;
    color: #b0d6f9;
  }
`;
