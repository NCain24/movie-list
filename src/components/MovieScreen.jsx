import React from 'react';
import MovieCard from './MovieCard';
import styles from './MovieScreen.module.css';

const MovieScreen = ({
  addMovie,
  movieList,
  page,
  setPage,
  list,
  removeMovie,
}) => {
  const decrement = () => {
    if (page !== 1) {
      setPage(--page);
    } else {
      alert("You're already on page 1!");
    }
  };
  const increment = () => setPage(++page);

  const movieDisplay = movieList.map((movie) => {
    return (
      <MovieCard
        movie={movie}
        key={movie.id}
        list={list}
        addMovie={addMovie}
        removeMovie={removeMovie}
      />
    );
  });

  return (
    <div className={styles.screen}>
      <div className="btn-container">
        <button onClick={decrement}>
          <span className="material-symbols-outlined">replay</span>
        </button>
        <h1>Now Showing</h1>
        <button onClick={increment}>
          <span className="material-symbols-rounded">fast_forward</span>
        </button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
