import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies, title = 'Trending today' }) => {
  const location = useLocation();
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {movies.map(movie => {
          const { id, title } = movie;
          return (
            <div key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
