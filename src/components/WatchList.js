import React, { useContext } from 'react';
import { GlobalContext, GlobalProvider } from '../context/GlobalState';
import { MovieCard } from './MovieCard';

export const WatchList = () => {
    const { watchlist } = useContext(GlobalContext);

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">
                        My WatchList
                    </h1>
                </div>
                {watchlist.length > 0 ? (<div className="movie-grid">
                    {watchlist.map((movie) => (
                        <MovieCard movie={movie} type="watchlist" />
                    ))}
                </div>)
                    : (
                        <h3 className="no-movies">Your WatchList is empty!</h3>
                    )}
            </div>
        </div>
    );
}
