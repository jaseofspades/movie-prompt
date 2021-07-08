import React,{ useState, useEffect } from 'react';
import { ErrorInfo, MovieInfo } from '../SearchMovie';
import axios, { AxiosResponse } from 'axios';

import Error from '../Error';

import './style.css';

const PopularMovies = () => {

    const movieArray = [
        { movie : ['the+shining', ''] },
        { movie : ['baby+driver',''] },
        { movie : ['avengers+endgame', '2019'] },
    ];

    const [ movies, setMovies ] = useState<MovieInfo[]>([]);
    const [ error, setError ] = useState("");

    /**
     * 
     * @returns Promise<AxiosResponse<MovieInfo>>[]
     */
    const getMoviePromises = (): Promise<AxiosResponse<MovieInfo>>[] => {
        
        return movieArray.map( movieItem => {

            let movieTitle = movieItem.movie[0];
            let movieYear = movieItem.movie[1];
            let query = "";

            if (movieTitle !== undefined || movieTitle !== null) {
                if (movieYear !== undefined || movieYear !== null) {
                    query = "t=" + movieTitle + "?y=" + movieYear;
                }
            }

            query = "t=" + movieTitle;
            
            return axios.get(`http://www.omdbapi.com/?${query}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
        });
    }

    const getMovies = () => {

        // Start with an empty array of MovieInfo objects
        setMovies([]);

        const moviePromises = getMoviePromises();

        Promise.all(moviePromises).then( (movieResponses) => {

            const movieResponseList = movieResponses.map((movieResponse) => {
                return movieResponse.data;
            });

            setMovies(movieResponseList);
        });
    }


    /* useEffect will render something once, as long as you have
        an empty array as second parameter*/
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="popular-movies">
            {movies && movies.map((movie) => 
                <div key={movie.Title} className="movies-container">
                    <div className="movie">
                        
                        <img className="movie-poster" src={movie.Poster} 
                             alt={`Movie poster for ${movie.Title}`} /> 
                    
                        <button className="plus-button">➕</button>

                        <div className="button-section">

                            <fieldset className="rating-fieldset">
                            <legend className="rating-legend">Your rating:</legend>
                                
                                <div className="rating-buttons-container">
                                    <input className="star-rating-input" type="radio" name="rating" value="1" id="rating-1" />
                                    <label className="star-rating-label" htmlFor="rating-1" aria-label="One"></label>

                                    <input className="star-rating-input" type="radio" name="rating" value="2" id="rating-2" />
                                    <label className="star-rating-label" htmlFor="rating-2" aria-label="Two"></label>

                                    <input className="star-rating-input" type="radio" name="rating" value="3" id="rating-3" />
                                    <label className="star-rating-label" htmlFor="rating-3" aria-label="Three"></label>

                                    <input className="star-rating-input" type="radio" name="rating" value="4" id="rating-4" />
                                    <label className="star-rating-label" htmlFor="rating-4" aria-label="Four"></label>

                                    <input className="star-rating-input" type="radio" name="rating" value="5" id="rating-5" />
                                    <label className="star-rating-label" htmlFor="rating-5" aria-label="Five"></label>
                                </div>
                                
                            </fieldset>
                        </div>
                    </div>
                </div>
            )}

            {error && <Error errorMessage={error}/>}
        </div>
    );
}

export default PopularMovies;