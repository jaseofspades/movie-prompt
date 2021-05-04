import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';


const Login = () => {
    
    return (
        <div>
            <h1>App Title Placeholder</h1>
            <div>
                <input placeholder='Username' />
            </div>
            <div>
                <input placeholder='Password' />
            </div>
            
            <Route>
                <div>
                    <Link to='/forgotUsernamePassword'>Forgot username or password?</Link>
                </div>
                <div>
                    <Link to='/register'>Register</Link>
                </div>     
            </Route>

            <button>Login</button>
        </div>
    );
};

export default Login;