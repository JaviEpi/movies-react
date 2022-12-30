import styles from "./MovieCard.module.css";

export function MovieCard({ movie }) {
    const imagenURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
    return (
        <li className={styles.movieCard}>
            <img width={230} height={345} src={imagenURL} alt={movie.title} className={styles.movieImage}/>
            <div>
                <h2 className={styles.movieTitle}>{movie.title}</h2>
            </div>
        </li>
    );
}