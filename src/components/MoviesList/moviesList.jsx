import { Link, useLocation } from "react-router-dom";

// import PropTypes  from "prop-types";


export const MoviesList = ({moviesList})=>{
    const location = useLocation();

    return(
        <ul>
            {moviesList.map(({id, title})=>(
                <li key={id}>
                <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>
                </li>
            ))}
        </ul>
    )
}

// MoviesList.PropTypes = {
//     movies: PropTypes.arrayOf(
//         PropTypes.shape({
//     title: PropTypes.string,
//     id: PropTypes.number.isRequired,
//    })
//   ).isRequired,
// }
