import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./components/Movies.module.css";
import { Navigation } from "./components/Navigation";
import { Search } from "./components/Search";

export default function Movies() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <Search />
        <MoviesGrid />
      </main>
      <footer>
        <Navigation />
      </footer>
    </div>
  );
}
