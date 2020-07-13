import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Temperature from './Temperature';
import './index.css';

function Room() {
    const [isLit, setLit] = useState(true);  
    let [defaultTemp, currentTemp] = useState(72);
    const brightness = isLit ? 'Lit' : 'Dark'; 
    /* isLit = sate value
       setLit = fun to change the state */ 
    return (
        <div className={`room ${brightness}`}>
            The room is {isLit ? 'Lit' : 'Dark'}<hr/>
            {/* <button onClick={() => setLit(!isLit)}>
                flip
            </button> */}
            <hr/>
            <button onClick={() => (setLit(true), currentTemp(++defaultTemp))}>ON</button>
            <button onClick={() => (setLit(false), currentTemp(--defaultTemp))}>OFF</button>
            <br/><br/>
            <Temperature count={defaultTemp}/>
            
        </div>
    );
}

ReactDOM.render(
    <Room/>, 
    document.querySelector('#root'));
    
/*document.getElementById with root
 same like 
 document.querySelector with #root
 */