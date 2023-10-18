import { Routes, Route, NavLink } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink>Movies</NavLink>
          </li>
        </ul>
      </nav>
      </header>
      <Routes>
        {/* <Route path='/' element={<Home />}></Route> */}
        {/* <Route path='/movies' element={<Movies/>}></Route> */}
      </Routes>
    </div>
  );
};
