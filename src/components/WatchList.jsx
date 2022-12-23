import React from "react";
import MovieCard from "./MovieCard";

const WatchList = ({ list, removeMovie}) => {
    const movieDisplay = list.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} list={list} removeMovie={removeMovie}/>
    })

    return (
        <div className='watchlist'>
            <h1>Watchlist</h1>
            <div className='movie-container'>{movieDisplay}</div>
        </div>
    )
}

export default WatchList