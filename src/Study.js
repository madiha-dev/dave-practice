import React from 'react';

function course(params) {
    return(
        <div>
            <h1>"{params.name}"</h1>
            <p>This is paragrapg of 2nd component</p>

            <img src={params.url} alt='Pakistan'/>
        </div>
    );
}

export default course;