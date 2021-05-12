import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';

import Login from './Components/Login';
import ForgotUsernamePassword from './Components/ForgotUsernamePassword';
import Home from './Components/Home';
import RegisterNewUser from './Components/RegisterNewUser';
import Movie from './Components/Movie';
import SearchMovie from './Components/SearchMovie';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/forgotUsernamePassword' component={ForgotUsernamePassword} />
        <Route exact path='/register' component={RegisterNewUser} />
        <Route exact path='/searchMovie' component={SearchMovie} />
        <Route render={() => <div>404 - NOT FOUND</div>} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
