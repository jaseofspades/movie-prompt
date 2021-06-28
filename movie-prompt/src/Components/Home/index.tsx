import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import SearchMovie from '../SearchMovie';
import MyImage from './homepageBackground.jpeg';

import './style.css';

const Home = () => {

    return (
        <Router>
            {/**
             * Suggestion: make a component for the background?
             * Make it work first, then compartmentalize
             * 
             */}
            <div>
                <h1>HOME PAGE TITLE PLACEHOLDER</h1>
                <SearchMovie />
                <div>
                    <Link to='/FirstMovie'>First Movie</Link>
                </div>
                <div>
                    <Link to='/SecondMovie'>Second Movie</Link>
                </div>     
            </div>

            {/* TODO: A carousel/slideshow of top rated 10-20 movies? */}
            {/* TODO: Carousels/slideshows of other movie categories beneath? */}

            {/* What to do with the switch for routing? */}
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