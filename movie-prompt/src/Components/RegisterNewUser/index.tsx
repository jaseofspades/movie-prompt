import React from 'react';

import './style.css';

const RegisterNewUser = () => {

    return (
        <React.Fragment>
            <h1>This is the new user registration page</h1>
            <form className='registrationForm'>
                <div>
                    <label>First name:</label> <input placeholder="First name"></input>
 
                    <label>Last name:</label> <input placeholder="Last name"></input>

                    <label>Email:</label> <input placeholder="Email address"></input>

                    <label>Password:</label><input placeholder="Password"></input>
 
                    <label>Confirm your password:</label><input placeholder="Confirm password"></input>
                </div>
                <button>Submit</button>
            </form>
            
        </React.Fragment>
    );
}

export default RegisterNewUser;