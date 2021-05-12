import React, { useState, useRef } from 'react';

interface MovieInfo {
    imdbID: string,
    Title: string,
    Year: string,
    Rating: string,
};

type MovieProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

const SearchMovie = () => {

    const [ searchQuery, setSearchQuery ] = useState('');
    
    const [ movie, setMovie ] = useState({
        imdbID: "",
        Title: "",
        Year: "",
        Rating: ""
    });

    /**
     * This var will constantly
     * two islands: html and DOM
     * you can keep track of this elem with useRef
     * the html elem using this var will be bridged to the elem that
     * references this
     * think of it as pointer to this var
     */
    const searchInput = useRef(null);

    // useEffect(() => {
    //     getMovieData();
    // }, []);

    const getMovieData = () => {

        const axios = require('axios');
        // @ts-ignore
        const tempQueryArray: string[] = searchInput.current.value.trim().split(' ');
        const searchParameter = tempQueryArray.join('+');
        axios.get(`http://www.omdbapi.com/?t=${searchParameter}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
            .then( (response: { data: MovieInfo; }) => {
                setMovie(response.data);
            });

        // todo: what should we do w/ movie data here?
    };

    return (
        <React.Fragment>
            <label htmlFor='movie-search-bar'>
                Search for movies
            </label>
            <input 
                ref={searchInput}
                type='search'
                id='movie-search'
                placeholder='Search for movies'
            />
            <button onClick={getMovieData}>Search</button>
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