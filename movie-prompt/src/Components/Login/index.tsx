import { Route, Link } from 'react-router-dom';

const Login = () => {
    
    const background = 'url(https://wallpaperaccess.com/full/2063931.jpg)';
    return (
        <div background-image={background}>

            <h1>App Title Placeholder</h1>
            <div>
                <input placeholder='Username' />
            </div>
            <div>
                <input type='password' placeholder='Password' />
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