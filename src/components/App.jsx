import { Routes, Route} from 'react-router-dom';
import { Home } from './Pages/Home';
import { Movies } from './Pages/Movies';
import { MovieDetails } from './Pages/MovieDetails';
import {Layout} from './Layout/layout'
import NotFound from './NotFound/notFound'

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
           <Route index element={<Home />}></Route>
           <Route path="movies" element={<Movies />}></Route>
           <Route path="movies/:movieId/*" element={<MovieDetails />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};
