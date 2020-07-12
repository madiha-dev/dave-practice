import React from 'react';

function Gate(params) {
    return <div>{params.isOpen == 'true'? 'open' : 'closed'}</div>;
}

export default Gate;