import React from 'react';
import ReactDOM from 'react-dom';
import Study from './Study';
import './index.css';

/*What makes a fun, is a component??
- fun has JSX syntax, when react invoke the fun,
it gets JSX, and renders the equivalent HTML o the DOM
*/

function Hi(props){
    return (
    <div>
        <p>HI! this is <strong>{props.name}.</strong></p>
        <h4>Learning React</h4>
        <ul>
            <li>Project 1n</li>
            <li>Project 2</li>
            <li>Project 3</li>
        </ul>
        
    </div>
    );
}

/*Rendering
- call the fun e.g. here is "Hi"
- gets JSX
- insert HTML elements with id "#root" into
     document.querySelector("#root")
*/
ReactDOM.render(
[<Hi name="madiha"/>, 
<Study 
name='React Practice'
url='/images/PK.jpeg'
/>], 
document.querySelector('#root'));