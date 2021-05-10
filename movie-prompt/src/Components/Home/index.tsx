import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Movie from '../../Components/Movie';

interface MovieInfo {
    imdbID: string,
    Title: string,
    Year: string,
    Rating: string,
};

const Home = () => {
    const [movie, setMovie] = useState({
        imdbID: "",
        Title: "",
        Year: "",
        Rating: ""
    });

    // useEffect(() => {
    //     getMovieData();
    // }, []);

    const getMovieData = () => {
        const axios = require('axios');
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
            .then( (response: { data: MovieInfo; }) => {
                setMovie(response.data);
            });
    };

    return (
        <Router>
            <div>
                <h1>This is the main page</h1>
                <input 
                    placeholder='Search for movies here'
                    name='movieSearch'
                    type='search'
                />
                <button onClick={getMovieData}>Search</button>
                <div>
                    <Link to='/FirstMovie'>First Movie</Link>
                </div>
                <div>
                    <Link to='/SecondMovie'>Second Movie</Link>
                </div>     
            </div>
            <div>
                {movie.Title}
                {movie.Year}
                {movie.Rating}
                {movie.imdbID}
            </div>

            <Switch>
                <Route path='/:movieName' children={<HandleMovieTitle />} />
            </Switch>
        </Router>
    );
};

export default Home;

type MovieParameter = {
    movieName: string;
}

function HandleMovieTitle() {
    let {movieName} = useParams<MovieParameter>();

    return (
        <div>
            <h3>{`DEBUG: movie name passed in - ` + movieName}</h3>
        </div>
    )
}