import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchMoviesReviews } from 'services/api';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/loader';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCredits = async reviewMovieID => {
      try {
        setIsLoading(true);
        const { results } = await fetchMoviesReviews(reviewMovieID);

        setReview(results);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCredits(movieId);
  }, [movieId]);

  return (
    <>
      {error && <div>Oh no! Something goes wrong: {error}</div>}
      <ul>
        {review.map(item => (
          <li key={item.id}>
            <p>{item.author}</p>
            <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
    </>
  );
};

export default Reviews;
