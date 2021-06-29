import React, { useEffect } from 'react';
import { MovieInfo } from '../SearchMovie';

import './style.css';

const Movie = ( {movieData} : {movieData: MovieInfo} ) => {

    return (
        <React.Fragment>
            <div className='movie-text-color'>
                <h1>{movieData.Title} ({movieData.Year})</h1>
                <img src={movieData.Poster} alt={movieData.Title} />
                <h2>Directed by {movieData.Director}</h2>
                <h3>{movieData.Rated} - {movieData.Runtime}</h3>
                <h3>{ movieData.Ratings.map( movieRating => 
                    (<li key={movieRating.Source}>{movieRating.Source}: {movieRating.Value}</li>)) }
                </h3>
                <p>{movieData.Plot}</p>
            </div>
        </React.Fragment>
    );
};

export default Movie;