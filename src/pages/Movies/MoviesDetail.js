import Details from "./components/Details";
import styles from "./components/Movies.module.css";

export default function MoviesDetail() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <Details />
      </main>
    </div>
  );
}
