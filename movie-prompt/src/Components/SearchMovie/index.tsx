import React, { useState, useRef } from 'react';
import Movie from '../Movie';

export interface RatingInfo {
    Source: string; 
    Value: string;
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

    const [ searchQuery, setSearchQuery ] = useState('');
    
    const [ movie, setMovie ] = useState({
        Actors: "",
        Awards: "",
        BoxOffice: "",
        Director: "",
        Genre: "",
        imdbID: "",
        imdbRating: "",
        Metascore: "",
        Plot: "",
        Poster: "",
        Production: "",
        Rated: "",
        Ratings: [{Source: "", Value: ""}],
        Released: "",
        Runtime: "",
        Title: "",
        Writer:"",
        Year: "",
    });

    /**
     * Think of variables with useRef() as a pointer to their variable that 
     * bridges the HTML element to the DOM.
     */
    const movieTitleInput = useRef<HTMLInputElement>(null);
    const movieYearInput = useRef<HTMLInputElement>(null);

    let searchParameter = "";

    const getMovieData = () => {

        if ((movieTitleInput.current === null || movieTitleInput.current === undefined) ||  
            (movieYearInput.current === null || movieYearInput.current === undefined))
        {
            return;
        }

        // Build the movie title parameter for the API call
        if (movieTitleInput.current.value) {
            searchParameter += ("t=" + movieTitleInput.current.value.trim().split(' ').join('+'));
            console.log(searchParameter);
        }

        // If there is a movie year parameter, add that too
        if (movieYearInput.current.value) {
            searchParameter += ("&y=" + movieYearInput.current.value);
        }

        console.log("Your movie title search input: " + movieTitleInput.current.value);
        console.log("Your movie year search input: " + movieYearInput.current.value);
        console.log("Your overall parameter: " + searchParameter);

        const axios = require('axios');
        // const tempQueryArray: string[] = movieTitleInput.current.value.trim().split(' ');
        // searchParameter = tempQueryArray.join('+');
        axios.get(`http://www.omdbapi.com/?${searchParameter}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
            .then( (response: { data: MovieInfo; }) => setMovie(response.data));
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
                <Movie movieData={movie} />
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