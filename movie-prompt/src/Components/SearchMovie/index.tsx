import React, { useState, useRef } from 'react';
import Movie from '../Movie';
import Error from '../Error';

export interface RatingInfo {
    Source: string; 
    Value: string;
}

export interface ErrorInfo {
    Error: string;
    Response: string;
}

export interface MovieInfo {
    Actors: string,
    Awards: string
    BoxOffice: string
    Director: string
    Genre: string
    imdbID: string
    imdbRating: string,
    Metascore: string,
    Plot: string,
    Poster: string,
    Production: string,
    Rated: string,
    Ratings: RatingInfo[],
    Released: string,
    Runtime: string,
    Title: string,
    Writer: string,
    Year: string,
};

const SearchMovie = () => {

    // We use null here as a potential type to handle since we may not have
    // a starting movie object and don't want to display anything until there is
    const [ movie, setMovie ] = useState<MovieInfo | null>(null);
    
    const [ error, setError ] = useState("");

    /**
     * Think of variables with useRef() as a pointer to their variable that 
     * bridges the HTML element to the DOM.
     */
    const movieTitleInput = useRef<HTMLInputElement>(null);
    const movieYearInput = useRef<HTMLInputElement>(null);

    const getMovieData = () => {

        let searchParameter = "";

        if ((movieTitleInput.current === null || movieTitleInput.current === undefined) ||  
            (movieYearInput.current === null || movieYearInput.current === undefined))
        {
            return;
        }

        // Build the movie title parameter for the API call
        if (movieTitleInput.current.value) {
            searchParameter += ("t=" + movieTitleInput.current.value.trim().split(' ').join('+'));
        }

        // If there is a movie year parameter, add that too
        if (movieYearInput.current.value) {
            searchParameter += ("&y=" + movieYearInput.current.value);
        }

        console.log(searchParameter);

        const axios = require('axios');

        axios.get(`http://www.omdbapi.com/?${searchParameter}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
            .then( (response: { data: MovieInfo | ErrorInfo; }) => {

                // Purge error and movie data since we're conducting a new search
                // "Resetting the world"
                setError("");
                setMovie(null);

                // Handle errors if there is no movie data that returns
                if ('Error' in response.data) {
                    return setError(response.data.Error);
                }

                // Otherwise, just return the movie data
                return setMovie(response.data);
            });
    };

    return (
        <React.Fragment>
            <div>
                <label htmlFor='movie-title-search-bar'>
                    Search by movie title:
                </label>
                <input 
                    ref={movieTitleInput}
                    type='search'
                    id='movie-title-search'
                    placeholder='Search by title'
                />
            </div>
            <div>
                <label htmlFor='movie-year-search-bar'>
                    Search by movie year:
                </label>
                <input
                    ref={movieYearInput}
                    type='search'
                    id='movie-year-search'
                    placeholder='Search by year'
                />
            </div>
            <button onClick={getMovieData}>Search</button>

            <div>
                {movie && <Movie movieData={movie}/>}
                {error && <Error errorMessage={error}/>}
            </div>
        </React.Fragment>
    );
};

export default SearchMovie;

/**
 * () => setterFromHook(param) if you want to uase paramas
 */

/**
 * todo list
 * - disdplau movie data on page
 * - ckleamn up the code
 * -    replacing the way we parse the str query for best prac
 */