import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

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
                <Route path='/:movieName' children={<Child />} />
            </Switch>
        </Router>
    );
};

export default Home;

type ParamsType = {
    movieName: string;
}
function Child() {
    let {movieName} = useParams<ParamsType>();

    return (
        <div><h3>{`movie name passed in: ` + movieName}</h3></div>
    )
}