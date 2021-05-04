import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

import Movie from '../../Components/Movie';

const Home = () => {

    return (
        <Router>
            <div>
                <h1>This is the main page</h1>
                <div>
                    <Link to='/FirstMovie'>First Movie</Link>
                </div>
                <div>
                    <Link to='/SecondMovie'>Second Movie</Link>
                </div>     
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
            <Movie />
        </div>
    )
}