import { Link } from "react-router-dom";

// import PropTypes  from "prop-types";


export const MoviesList = ({moviesList})=>{
 
    return(
        <ul>
            {moviesList.map(({id, title})=>(
                <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
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
