import { lazy } from 'react';
import { Routes, Route} from 'react-router-dom';

const  Home = lazy(()=> import('../Pages/Home'));
const  Movies = lazy(()=> import('../Pages/Movies'));
const  MovieDetails = lazy(()=> import('../Pages/MovieDetails'));
const  NotFound = lazy(()=> import('../components/NotFound/notFound'));
const  Layout = lazy(()=> import('../components/Layout/layout'));
const  Cast = lazy(()=> import('../components/Cast/cast'));
const  Reviews = lazy(()=> import('../components/Reviews/reviews'));


export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
           <Route index element={<Home />}></Route>
           <Route path="movies" element={<Movies />}></Route>
           <Route path="movies/:movieId/*" element={<MovieDetails />}>
               <Route path='cast' element={<Cast/>}></Route>
               <Route path='reviews' element={<Reviews/>}></Route>
           </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};
