import React from 'react';
import ReactDOM from 'react-dom';

/*What makes a fun, is a component??
- fun has JSX syntax, when react invoke the fun,
it gets JSX, and renders the equivalent HTML o the DOM
*/

function Hi(){
    return (
    <div>
        <p>HI! thiss is <strong>madiha</strong></p>
    </div>
    );
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));