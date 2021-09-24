import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={'/Details/' + movie.id} className='nav-item nav-link'>
      <img
        className={styles.movieImage}
        src={imageUrl}
        alt={movie.title}
        width={230}
        height={345}
      />
      <div>{movie.title}</div>
      </Link>
    </li>
  );
}
