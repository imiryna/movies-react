import { useState } from 'react';
import {
  SectionCss,
  SearchFormCss,
  SearchInputCss,
  SearchButtonCss,
} from './searchFormStyled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchForm = ({ fetchData }) => {
  const [inputValue, setInputValue] = useState('');

  const getSearchTerm = e => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue === '') {
      toast.error(
        'The search form cannot be empty. Please type any criteria in the search form.'
      );
    } else {
      setInputValue(inputValue);
      fetchData(inputValue);
    }
  };

  const handleKeyPressed = e => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <>
      <SectionCss>
        <SearchFormCss onKeyDown={handleKeyPressed}>
          <SearchButtonCss type="button" onClick={handleClick}>
            <span>Search</span>
          </SearchButtonCss>

          <SearchInputCss
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={getSearchTerm}
          />
        </SearchFormCss>
      </SectionCss>
      <ToastContainer />
    </>
  );
};
