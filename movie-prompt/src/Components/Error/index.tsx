import React from 'react';

const Error = ({errorMessage} : {errorMessage: string} ) => {

    return (
        <div>Movie doesn't exist: {errorMessage}</div>
    );
}

export default Error;