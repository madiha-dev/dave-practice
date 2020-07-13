import React from 'react';

// function Gate(params) {
//     return <div>{params.isOpen == 'true'? 'open' : 'closed'}</div>;
// }

//Arrow function
const Gate = ({isOpen}) => <div>{isOpen == 'true'? 'open' : 'closed'}</div>;

export default Gate;