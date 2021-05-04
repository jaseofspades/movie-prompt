import React from 'react';

const ForgotUsernamePassword = () => {

    return (
        <React.Fragment>
            <div>
                <h1>Forgot your username or your password?</h1>
                <h3>Let us help!</h3>
            </div>
            <form>
                <div>
                    If you forgot your password, enter your username: <input placeholder="Username" />
                </div>
                <div>
                    If you forgot your username, enter your email: <input placeholder="Email"/>
                </div>
            </form>
            <button>Submit</button>

        </React.Fragment>
    );
};

export default ForgotUsernamePassword;