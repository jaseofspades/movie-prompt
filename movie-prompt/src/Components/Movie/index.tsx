import React, { useEffect } from 'react';
import { MovieInfo } from '../SearchMovie';

const Movie = ( {movieData} : {movieData: MovieInfo} ) => {

    let movieDataExists = false;
    movieDataExists = !(movieData.Title === undefined || movieData.Title === '');

    // Actors: string,
    // Awards: string
    // BoxOffice: string
    // Director: string
    // Genre: string
    // imdbID: string
    // imdbRating: string,
    // Metascore: string,
    // Plot: string,
    // Poster: string,
    // Production: string,
    // Rated: string,
    // Rating: string,
    // Released: string,
    // Runtime: string,
    // Title: string,
    // Writer: string,
    // Year: string,
    
    return (
        movieDataExists 
        ? 
        <React.Fragment>
            <h1>{movieData.Title} ({movieData.Year})</h1>
            <img src={movieData.Poster} alt={movieData.Title} />
            <h2>Directed by {movieData.Director}</h2>
            <h3>{movieData.Rated} - {movieData.Runtime}</h3>
            <h3>{ movieData.Ratings.map( movieRating => 
                (<li id={movieRating.Source}>{movieRating.Source}: {movieRating.Value}</li>)) }
            </h3>
            <p>{movieData.Plot}</p>
        </React.Fragment>
        :
        <div>Movie does not exist; try again.</div>
    );
};

export default Movie;